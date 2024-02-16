import { deleteListing } from '../../api-calls/listings/delete-listing.mjs';

export function setupDeleteListingInteractions(container) {
  container.addEventListener('click', function (e) {
    const deleteBtn = e.target.closest('.delete-button');
    if (deleteBtn) {
      const listingId = deleteBtn.getAttribute('data-listing-id');
      deleteListing(listingId);

      console.log('deellll :(');
    }
  });
}
