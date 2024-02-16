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

export async function setupUpdateListingInteractions(container) {
  container.addEventListener('click', async function (e) {
    const updateBtn = e.target.closest('.update-button');
    if (updateBtn) {
      const listingId = updateBtn.getAttribute('data-listing-id');
      await updateModal(); // Open the update modal and wait for it to be populated

      // Ensure modal content is loaded before attaching event handlers
      setTimeout(() => {
        const updateForm = document.getElementById('updateListingForm');
        if (updateForm) {
          // Define the form submission handler with the current listingId
          const formSubmitHandler = event => handleFormSubmit(event, listingId);

          // Remove any previous listeners to avoid duplicates
          updateForm.removeEventListener('submit', formSubmitHandler);
          // Add the new event listener
          updateForm.addEventListener('submit', formSubmitHandler);
        }
      }, 0); // setTimeout ensures the DOM is updated before accessing the form
    }
  });
}
