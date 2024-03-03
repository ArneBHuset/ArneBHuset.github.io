import { listingCardBuild } from '../listings/listing-card.mjs';
import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { setupDeleteListingInteractions } from './delete-listing.mjs';
import { updateListingInteraction } from './update-listing.mjs';
import { filteredListingData } from '../../filters/jsondata-filter/filtered-json.mjs';

/**
 * Takes the json data for profile specific api call and populates grid with standard listing cards.
 * Initz listingmodal
 */
export async function displayProfileListing() {
  let listingData = await filteredListingData();
  const listingCardsHtml = await listingCardBuild(listingData); // Build listing cards HTML
  const listingsContainer = document.getElementById('listingsContainer');
  listingData = Array.isArray(listingData) ? listingData : [listingData];
  listingsContainer.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      ${listingCardsHtml}
    </div>`;

  listingsContainer.addEventListener('click', function (e) {
    setupDeleteListingInteractions(listingsContainer);
    updateListingInteraction(listingsContainer);

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
