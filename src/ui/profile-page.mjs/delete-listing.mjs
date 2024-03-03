import { deleteListing } from '../../api-calls/listings/delete-listing.mjs';

/**
 * Sets up deletebutton, corrosponding with specific id of the listing
 * @param {string} container - Takes the corrosponding container for the listing
 */
export async function setupDeleteListingInteractions(container) {
  container.addEventListener('click', async function (e) {
    const deleteBtn = e.target.closest('.delete-button');
    if (deleteBtn) {
      const isConfirmed = confirm(
        'Are you sure you want to delete this listing? This action cannot be undone.'
      );
      if (isConfirmed) {
        const listingId = deleteBtn.getAttribute('data-listing-id');
        await deleteListing(listingId);
      }
    }
  });
}
