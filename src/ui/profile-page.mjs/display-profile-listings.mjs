import { listingCardBuild } from '../listings/listing-card.mjs';
import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';
import { setupDeleteListingInteractions } from './delete-listing.mjs';
import { filteredProfileListings } from '../../filters/api-filter/profile/profile-selected-listings.mjs';
import { callUserListings } from '../../api-calls/profile/profile-listings.mjs';
import { updateListingInteraction } from './update-listing.mjs';

export async function displayProfileListing() {
  let listingData = await callUserListings();
  const listingCardsHtml = await listingCardBuild(listingData); // Build listing cards HTML
  const listingsContainer = document.getElementById('listingsContainer');
  console.log('listingData in profile, result', listingData);

  listingData = Array.isArray(listingData) ? listingData : [listingData];

  // Set the inner HTML of the listings container to include all listing cards
  listingsContainer.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      ${listingCardsHtml}
    </div>`;

  // Add event listener for click events within the listings container
  listingsContainer.addEventListener('click', function (e) {
    // Initialize delete listing interactions
    setupDeleteListingInteractions(listingsContainer);

    // Initialize update listing interactions
    updateListingInteraction(listingsContainer);

    // Check if the clicked element or its parent has the 'listingModalButton' class
    const target = e.target.closest('.listingModalButton');
    if (target) {
      const listingId = target.dataset.listingId; // Get the data-listing-id attribute
      const listing = listingData.find(listing => listing.id === listingId); // Find the corresponding listing data

      if (listing) {
        listingModal(listing);
      }
    }
  });
}
