import { listingsUrl } from '../../globalValues/urls.mjs';
import { determineSearchType } from './search-bar-filter.mjs';
import { currentActiveFilter } from '../../main.mjs';
import { currentBidsFilter } from '../../main.mjs';
import { currentSellerFilter } from '../../main.mjs';

export async function filteredListingUrl() {
  const isIndexPage = document.body.dataset.page === 'index';
  const isProfilePage = document.body.dataset.page === 'profile';

  // If on the index page, set all filters to true and construct the URL accordingly
  if (isIndexPage || isProfilePage) {
    const queryParams = `_seller=true&_bids=true&_active=true`;
    return `${listingsUrl}?${queryParams}`;
  }

  // For all other scenarios:
  // Retrieve the state from 'determineSearchType'
  const { listingId, tag } = determineSearchType();

  // Store the ID or tag in local storage
  if (listingId) {
    localStorage.setItem('searchListingId', listingId); // Store the listing ID
    localStorage.removeItem('searchTag'); // Ensure no tag is stored if ID is present
  } else if (tag) {
    localStorage.setItem('searchTag', tag); // Store the tag
    localStorage.removeItem('searchListingId'); // Ensure no ID is stored if tag is present
  } else {
    // If neither is present, clear both from storage
    localStorage.removeItem('searchListingId');
    localStorage.removeItem('searchTag');
  }

  // Get the actual filter states for non-index pages
  const activeBoolean = currentActiveFilter();
  const bidsBoolean = currentBidsFilter();
  const sellerBoolean = currentSellerFilter();

  // Construct query parameters string based on filter states
  let queryParams = `_seller=${sellerBoolean}&_bids=${bidsBoolean}&_active=${activeBoolean}`;
  if (tag) {
    queryParams += `&_tag=${encodeURIComponent(tag)}`;
  }

  // Construct the final API filter URL
  let apiFilter = listingId
    ? `${listingsUrl}/${listingId}`
    : `${listingsUrl}?${queryParams}`;

  console.log('API Filter URL:', apiFilter);
  return apiFilter;
}
