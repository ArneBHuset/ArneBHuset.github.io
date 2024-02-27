import { listingCardBuild } from '../listings/listing-card.mjs';
import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';

/**
 * Sets up the grid layout, and populates with standard listing cards.
 * @param {ParameterType} listingData - Takes listingData if given. If not, calls it inside the function
 */
export async function displayListingCards(listingData = null) {
  const errorDisplay = document.getElementById('errorMessageListings');
  errorDisplay.innerHTML = '';
  try {
    if (!listingData) {
      listingData = await callListings();
    }
    listingData = Array.isArray(listingData) ? listingData : [listingData];
    if (listingData.length === 0) {
      throw new Error('No listings available');
    }

    const listingCardsHtml = await listingCardBuild(listingData);
    const listingsContainer = document.getElementById('listingsContainer');
    listingsContainer.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${listingCardsHtml}
      </div>`;

    listingsContainer.addEventListener('click', function (e) {
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
  } catch (error) {
    console.error('Display listings error:', error);
    errorDisplay.innerHTML =
      error.message || 'An error occurred while displaying listings.';
  }
}
