import { listingCardBuild } from '../listings/listing-card.mjs';
import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';

/**
 * Sets up the grid layout, and populates with standard listing cards.
 * Initializes listing modal interaction
 */
export async function displayListingCards(listingData = null) {
  const errorDisplay = document.getElementById('errorMessageListings');
  errorDisplay.innerHTML = '';

  try {
    if (!listingData) {
      listingData = await callListings();
    }

    // Check if the data is null or undefined, and handle accordingly
    if (!listingData || listingData.length === 0) {
      errorDisplay.innerHTML = 'No listings available';
      return; // Exit the function early to avoid further processing
    }

    // Ensure listingData is always an array to keep consistency in further operations
    listingData = Array.isArray(listingData) ? listingData : [listingData];

    const listingCardsHtml = await listingCardBuild(listingData);
    const listingsContainer = document.getElementById('listingsContainer');

    // Check if the listings container exists
    if (!listingsContainer) {
      throw new Error('Listings container not found');
    }

    // Populate the listings container with cards
    listingsContainer.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${listingCardsHtml}
      </div>`;

    // Reuse the setupModalInteraction for consistency
    setupModalInteraction(listingsContainer, listingData);
  } catch (error) {
    console.error('Display listings error:', error);
    errorDisplay.innerHTML =
      error.message || 'An error occurred while displaying listings.';
  }
}

function setupModalInteraction(container, listingData) {
  container.addEventListener('click', function (e) {
    const target = e.target.closest('.listingModalButton');
    if (target) {
      const listingId = target.dataset.listingId;
      const listing = listingData.find(listing => listing.id === listingId);
      if (listing) {
        listingModal(listing);
      } else {
        errorDisplay.innerHTML = 'Listing details not found.';
      }
    }
  });
}
