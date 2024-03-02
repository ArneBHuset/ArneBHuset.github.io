import { filteredListingData } from './filtered-json.mjs';
import { currentSearchInput } from '../../main.mjs';
import { listingCardBuild } from '../../ui/listings/listing-card.mjs';

export async function searchForListing() {
  const searchInput = currentSearchInput();
  if (!searchInput) return;

  const listings = await filteredListingData();
  const filteredListings = listings
    .filter(listing => {
      const searchText = searchInput.toLowerCase();
      const matchesTitle =
        listing.title && listing.title.toLowerCase().includes(searchText);
      const matchesDescription =
        listing.description &&
        listing.description.toLowerCase().includes(searchText);
      const matchesTags =
        listing.tags &&
        listing.tags.some(tag => tag && tag.toLowerCase().includes(searchText));
      return matchesTitle || matchesDescription || matchesTags;
    })
    .slice(0, 6);

  console.log('Top 6 filtered results:', filteredListings);
  const listingsHTML = await listingCardBuild(filteredListings);
  document.getElementById('listingsContainer').innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${listingsHTML}
    </div>`;
}

export async function eventListener() {
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('listing-search');

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        searchForListing();
      });

      searchInput.addEventListener('blur', async () => {
        searchInput.value = '';

        const rawListings = await filteredListingData();

        const listingsHTML = await listingCardBuild(rawListings);
        document.getElementById('listingsContainer').innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${listingsHTML}
          </div>`;
      });
    }
  });
}
