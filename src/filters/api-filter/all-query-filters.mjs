import { listingsUrl } from '../../globalValues/urls.mjs';
import { currentActiveFilter } from '../../ui/landing-page/filter-interaction/active.mjs';
import { currentBidsFilter } from '../../ui/landing-page/filter-interaction/bids.mjs';
import { currentSellerFilter } from '../../ui/landing-page/filter-interaction/seller.mjs';
import { currentTagsFilter } from '../../ui/landing-page/filter-interaction/tags.mjs';
import { listingFilterById } from './specific-id-listing.mjs';

export async function filteredListingUrl() {
  const activeBoolean = await currentActiveFilter();
  const bidsBoolean = await currentBidsFilter();
  const sellerBoolean = await currentSellerFilter();
  const tagsValue = await currentTagsFilter();
  const idValue = await listingFilterById();

  // Step 1: Start with the base URL
  let apiFilter = listingsUrl;

  // Step 2: Conditionally append the ID
  if (idValue) {
    apiFilter += `/${idValue}`;
  }

  // Step 3: Construct query parameters string
  const queryParams = [
    `_seller=${sellerBoolean}`,
    `_bids=${bidsBoolean}`,
    `_tag=${encodeURIComponent(tagsValue)}`, // Encoding the tag to handle special characters
    `_active=${activeBoolean}`,
  ].join('&');

  // Append the query parameters to the URL
  apiFilter += `?${queryParams}`;

  // console.log('API Filter URL:', apiFilter);
  return apiFilter;
}
