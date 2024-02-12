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
      const dateInput = this.value; // Get the value of the input
      const infoText = 'Date set will always end at midnight 23.59'; // Create the text you want to display
      document.getElementById('dateInfo').textContent = infoText; // Update the text content of the span
    });

  postBtn.addEventListener('click', async () => {
    const userListingData = await newListingData();
    // Check if title or endsAt fields are missing
    if (!userListingData.title || !userListingData.endsAt) {
      console.log('Required fields missing');
      return; // Exit the function if validation fails
    }

    // Convert user input to a Date object
    const inputDate = new Date(userListingData.endsAt);

    // Get the current date and time
    const currentDate = new Date();

    // Create a new date that is 24 hours ahead of the current time
    const requiredDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // Adds 24 hours

    // Validate that the input date is at least 24 hours ahead of the current time
    if (inputDate <= requiredDate) {
      console.log('The listing end date must be at least 24 hours from now');
      return; // Exit the function if validation fails
    }

    // If the code reaches this point, the input is valid
    // You can proceed with API call or further actions
    console.log('Input is valid', userListingData);
    createNewListing(userListingData);
  });
}
