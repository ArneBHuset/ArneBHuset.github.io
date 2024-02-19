import { filteredListingUrl } from './all-query-filters.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';
import { displayListingCards } from '../../main.mjs';
import { debounce } from '../../globalValues/api-debounce.mjs';

export async function updateFilteredListingCards() {
  const listingData = await callListings();
  //   console.log('filterstuff', listingData);
  displayListingCards(listingData); // Updates the DOM
}

// Set up event listeners for filter changes
document.addEventListener('DOMContentLoaded', () => {
  const activeFilterInput = document.getElementById('activeFilterInput');
  const bidsFilterInput = document.getElementById('bidsFilterInput');
  const sellerFilterInput = document.getElementById('sellerFilterInput');
  const searchInput = document.getElementById('listing-search');
  // Add other filter inputs if necessary

  activeFilterInput.addEventListener('change', updateFilteredListingCards);
  bidsFilterInput.addEventListener('change', updateFilteredListingCards);
  sellerFilterInput.addEventListener('change', updateFilteredListingCards);
  const searchForm = document.getElementById('searchForm'); // Adjust if you have more specific selectors
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    updateFilteredListingCards(); // Trigger the update based on the current search input
  });
});
