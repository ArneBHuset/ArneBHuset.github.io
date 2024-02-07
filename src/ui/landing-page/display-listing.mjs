import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { listingCardBuild } from '../../listings/listing-card.mjs';
import { callListings } from '../../listings/listing-api.mjs';

export async function landingPageListings() {
  const htmlContent = await listingCardBuild();
  const listingData = await callListings();

  const container = document.getElementById('listingCards'); // Replace 'yourContainerElementId' with the actual ID of your container element
  container.innerHTML = htmlContent;
  document.getElementById('listingModal').addEventListener('click', () => {
    listingModal(listingData);
  });
}
