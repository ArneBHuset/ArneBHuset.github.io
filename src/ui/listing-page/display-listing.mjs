import { listingCardBuild } from '../listings/listing-card.mjs';
import { listingModal } from '../modal-bodies/listing-modal.mjs';
// import { callListings } from '../../api-calls/listings/listing-api.mjs';
import { filteredListingData } from '../../filters/jsondata-filter/filtered-json.mjs';

/**
 * Sets up the grid layout, and populates with standard listing cards.
 * Initializes listing modal interaction
 */
export async function displayListingCards(listingData = null) {
  let errorDisplay = document.getElementById('errorMessageListings');
  errorDisplay.innerHTML = '';

  try {
    if (!listingData) {
      console.log(
        'Confirming that listingData i not passed as parameter in displayListingCards'
      );
      listingData = await filteredListingData();
    } else {
      console.log('Confirming that listingData is passes a paramter!');
    }
    console.log(listingData);
    if (!listingData || listingData.length === 0) {
      errorDisplay.innerHTML = 'No listings available';
      return;
    }

    listingData = Array.isArray(listingData) ? listingData : [listingData];

    console.log(document.getElementById('listingsContainer'));

    const listingsContainer = document.getElementById('listingsContainer');

    if (!listingsContainer) {
      throw new Error('Listings container not found');
    }
    let listingCardsHtml = await listingCardBuild(listingData);

    listingsContainer.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${listingCardsHtml}
      </div>`;

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
