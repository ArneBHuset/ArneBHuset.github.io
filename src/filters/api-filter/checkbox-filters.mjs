import { filteredListingUrl } from './all-query-filters.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';
import { displayListingCards } from '../../main.mjs';
// import { debounce } from '../../globalValues/api-debounce.mjs';
// import { updateSearchFilterDisplay } from '../../main.mjs';
// import { determineSearchType } from './search-bar-filter.mjs';

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
  const searchForm = document.getElementById('searchForm');
  // if (searchForm) {
  //   searchForm.addEventListener('submit', function (event) {
  //     event.preventDefault();
  //     // Determine and set new search filter based on current input
  //     const { listingId, tag } = determineSearchType(); // Adjust this based on actual logic

  //     if (listingId) {
  //       localStorage.setItem('searchListingId', listingId);
  //       localStorage.removeItem('searchTag');
  //     } else if (tag) {
  //       localStorage.setItem('searchTag', tag);
  //       localStorage.removeItem('searchListingId');
  //     }

  //     // Clear the input field after capturing the value
  //     document.getElementById('listing-search').value = '';

  //     // Update filters and display based on the new search
  //     updateFilteredListingCards();
  //     updateSearchFilterDisplay();
  //   });
  // }
});
