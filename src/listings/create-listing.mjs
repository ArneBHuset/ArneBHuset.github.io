import { listingsUrl } from '../globalValues/urls.mjs';
import { checkingAccessToken } from '../access-token/validate-access-token.mjs';
// Funksjonen skal gå når man klikker post

/**
 * Runs API call to create a new listing.
 * @param {ParameterType} listingFormData - Takes validated form-data in an array to create new listing
 */
export async function createNewListing(listingFormData) {
  try {
    const accessToken = await checkingAccessToken();
    console.log(listingFormData);
    const newListingCall = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(listingFormData),
    };
    const response = await fetch(listingsUrl, newListingCall);
    console.log('Success in creating new listing', response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
