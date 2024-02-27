import { newListingData } from '../forms/new-listing.mjs';
import { createNewListing } from '../api-calls/listings/create-listing.mjs';
/**
 * Checks if form-data from newListingData is valid and initz API call.
 */
export async function validatedNewListing() {
  const form = document.getElementById('newListingForm');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const userListingData = await newListingData();
    let errorDisplay = document.getElementById('errorMessageListingPage');
    errorDisplay.innerHTML = '';

    if (!userListingData.title || !userListingData.endsAt) {
      errorDisplay.innerHTML = `<h3 class="error-message">Please fill in all required fields (Title, End Date).</h3>`;
      return;
    }
    const inputDate = new Date(userListingData.endsAt);
    const currentDate = new Date();
    const requiredDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    if (inputDate <= requiredDate) {
      errorDisplay.innerHTML = `<h3 class="error-message">The listing end date must be at least 24 hours from now.</h3>`;
      return;
    }
    try {
      await createNewListing(userListingData);
    } catch (error) {
      errorDisplay.innerHTML = `<h3 class="error-message">An error occurred: ${error}.</h3>`;
    }
  });
}
