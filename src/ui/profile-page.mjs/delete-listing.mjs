import { deleteListing } from '../../api-calls/listings/delete-listing.mjs';

export async function setupDeleteListingInteractions(container) {
  container.addEventListener('click', async function (e) {
    const deleteBtn = e.target.closest('.delete-button');
    if (deleteBtn) {
      const listingId = deleteBtn.getAttribute('data-listing-id');
      try {
        await deleteListing(listingId);
        window.location.reload();
      } catch (error) {
        console.log('wont delete');
      }
    }
  });
}
