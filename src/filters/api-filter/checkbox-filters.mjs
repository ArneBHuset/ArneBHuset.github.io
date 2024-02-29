import { filteredListingUrl } from './query-filters.mjs';
import { displayListingCards } from '../../main.mjs';
import { filteredListingData } from '../jsondata-filter/filtered-json.mjs';

export async function updateFilteredListingCards() {
  const listingData = await filteredListingData(); // Make sure this function uses current filters
  await displayListingCards(listingData);
}

document.addEventListener('DOMContentLoaded', () => {
  const activeFilterInput = document.getElementById('activeFilterInput');
  if (activeFilterInput) {
    activeFilterInput.addEventListener('change', () => {
      updateFilteredListingCards(); // Re-fetch and update listings when the filter changes
    });
  }

  const dateSortInput = document.getElementById('dateSortInput');
  if (dateSortInput) {
    dateSortInput.addEventListener('change', async () => {
      await updateFilteredListingCards(); // Assuming this function uses newestListings internally
    });
  }
});
