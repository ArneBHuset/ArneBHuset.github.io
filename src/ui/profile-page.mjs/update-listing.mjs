import { updateListing } from '../../api-calls/listings/update-listing.mjs';
import { updateModal } from '../modal-bodies/update-listing.mjs';
import { updateListingData } from '../../forms/update-listing.mjs';

// Define a function to handle form submissions
async function handleFormSubmit(event, listingId) {
  event.preventDefault();
  console.log('running 1');
  const listingUpdateData = await updateListingData();
  if (typeof listingUpdateData === 'object' && listingUpdateData !== null) {
    console.log(
      'Update API is called with:',
      listingUpdateData,
      'and',
      listingId
    );
    updateListing(listingUpdateData, listingId);
  } else {
    console.log('Invalid listing data');
  }
}

// Assuming updateModal is properly set and executed
export async function updateListingInteraction(container) {
  container.addEventListener('click', async function (e) {
    console.log('clicked');
    const updateBtn = e.target.closest('.update-button');
    if (updateBtn) {
      const listingId = updateBtn.getAttribute('data-listing-id');
      await updateModal(); // Assuming this correctly sets up the modal

      const updateForm = document.getElementById('updateListingForm');
      if (updateForm) {
        // This is now outside the timeout
        updateForm.onsubmit = async event => {
          // Convert to direct assignment
          await handleFormSubmit(event, listingId);
        };
      }
    }
  });
}
