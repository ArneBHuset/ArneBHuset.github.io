import { filteredListingData } from './filtered-json.mjs';
import { currentSearchInput } from '../../main.mjs';
import { listingCardBuild } from '../../ui/listings/listing-card.mjs';

export async function searchForListing() {
  const searchInput = currentSearchInput(); // Fetch current search input value
  if (!searchInput) return; // Exit if search input is empty

  const listings = await filteredListingData(); // Get all listings
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
    .slice(0, 6); // Adjust the number as needed

  console.log('Top 6 filtered results:', filteredListings); // Display the top 6 results for debugging

  const listingsHTML = await listingCardBuild(filteredListings);
  document.getElementById('listingsContainer').innerHTML = listingsHTML;
}

export async function eventListener() {
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('listing-search');

    // Input event for handling real-time search
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        searchForListing(); // Call the search function on each input event
      });

      // Blur event to clear the search field when the user clicks away (optional based on your UX preference)
      searchInput.addEventListener('blur', () => {
        // Potentially clear the field and refresh listings here
        // Note: Clearing on blur might be frustrating for users who accidentally click away
        // Consider if this behavior is what you want, or simply refresh listings without clearing
      });
    }
  });
}
