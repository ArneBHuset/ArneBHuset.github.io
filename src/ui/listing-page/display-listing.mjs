import { listingCardBuild } from '../listings/listing-card.mjs';
import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';

export async function displayListingCards() {
  const listingCardBase = await listingCardBuild();
  const listingData = await callListings();

  const listingsContainer = document.getElementById('listingsContainer');

  listingsContainer.innerHTML = `
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
  <div class="flex justify-center">
  </div>
  ${listingCardBase} 
</div>`;
document.getElementById('listingModal').addEventListener('click', () => {
  listingModal(listingData);
})
}
