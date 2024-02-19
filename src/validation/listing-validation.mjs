import { newListingData } from '../forms/new-listing.mjs';
import { createNewListing } from '../api-calls/listings/create-listing.mjs';
/**
 * Checks if form-data from newListingData is valid and calls function for API call.
 */
export async function validatedNewListing() {
  const postBtn = document.getElementById('addListingBtn');

  document
    .getElementById('listingEndsAt')
    .addEventListener('change', function () {
      const dateInput = this.value;
      const infoText = 'Date set will always end at midnight 23.59';
      document.getElementById('dateInfo').textContent = infoText;
    });

  postBtn.addEventListener('click', async () => {
    const userListingData = await newListingData();

    if (!userListingData.title || !userListingData.endsAt) {
      console.log('Required fields missing');
      return;
    }

    const inputDate = new Date(userListingData.endsAt);
    const currentDate = new Date();

    // Creates a new date that is 24 hours ahead of the current time
    const requiredDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    if (inputDate <= requiredDate) {
      console.log('The listing end date must be at least 24 hours from now');
      return;
    }

    console.log('Input is valid', userListingData);
    try {
      createNewListing(userListingData);
    } catch (error) {
      alert(`An error occurred: ${error}`);
    }
    window.location.reload();
  });
}
