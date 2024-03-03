import { filteredListingData } from '../jsondata-filter/filtered-json.mjs';
import { listingCardBuild } from '../../ui/listings/listing-card.mjs';

/**
 * Updates the DOM with filtered listing cards, based on selected checkboxes and event listeners
 */
export async function updateFilteredListingCards() {
  const listingData = await filteredListingData();
  const listingsHTML = await listingCardBuild(listingData);
  document.getElementById('listingsContainer').innerHTML = `
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    ${listingsHTML}
  </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const activeFilterInput = document.getElementById('activeFilterInput');
  if (activeFilterInput) {
    activeFilterInput.addEventListener('change', () => {
      updateFilteredListingCards();
    });
  }

  const dateSortInput = document.getElementById('dateSortInput');
  if (dateSortInput) {
    dateSortInput.addEventListener('change', async () => {
      await updateFilteredListingCards();
    });
  }
});
