import { filteredListingUrl } from './query-filters.mjs';
import { displayListingCards } from '../../main.mjs';
import { filteredListingData } from '../jsondata-filter/filtered-json.mjs';

export async function updateFilteredListingCards() {
  // Fetch and display listings based on the current filter settings
  const listingData = await filteredListingData(); // Make sure this function uses current filters
  await displayListingCards(listingData);
}

// Set up event listeners for filter changes
document.addEventListener('DOMContentLoaded', () => {
  const activeFilterInput = document.getElementById('activeFilterInput');
  if (activeFilterInput) {
    activeFilterInput.addEventListener('change', () => {
      updateFilteredListingCards(); // Re-fetch and update listings when the filter changes
    });
  }

  // Add event listeners for any other filters or inputs as necessary
  // Example: bidsFilterInput, sellerFilterInput, etc.
});
