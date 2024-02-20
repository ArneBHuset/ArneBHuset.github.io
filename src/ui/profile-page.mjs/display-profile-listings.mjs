import { listingCardBuild } from '../listings/listing-card.mjs';
import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';
import { setupDeleteListingInteractions } from './delete-listing.mjs';
import { setupUpdateListingInteractions } from './update-listing.mjs';
import { callAllListings } from '../../api-calls/listings/all-listings.mjs';

export async function displayProfileListing() {
  let listingData = await callListings(); // Fetch listing data
  const listingCardsHtml = await listingCardBuild(listingData); // Build listing cards HTML
  const listingsContainer = document.getElementById('listingsContainer');

  // Normalize listingData to ensure it's always an array
  listingData = Array.isArray(listingData) ? listingData : [listingData];

  // Set the inner HTML of the listings container to include all listing cards
  listingsContainer.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${listingCardsHtml}
    </div>`;

  // Add event listener for click events within the listings container
  listingsContainer.addEventListener('click', function (e) {
    setupDeleteListingInteractions(listingsContainer);
    setupUpdateListingInteractions(listingsContainer);
    // Check if the clicked element or its parent has the 'listingModalButton' class
    const target = e.target.closest('.listingModalButton');
    if (target) {
      const listingId = target.dataset.listingId; // Get the data-listing-id attribute
      const listing = listingData.find(listing => listing.id === listingId); // Find the corresponding listing data

      if (listing) {
        console.log('wut?', listingsContainer);
        listingModal(listing); // Open the modal with the specific listing data
      }
    }
  });
}
