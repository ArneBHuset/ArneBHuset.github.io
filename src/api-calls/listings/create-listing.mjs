import { listingsUrl } from '../../globalValues/urls.mjs';
import { validatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Runs API call to create a new listing.
 * @param {ParameterType} listingFormData - Takes validated form-data in an array to create new listing
 */
export async function createNewListing(listingFormData) {
  try {
    console.log(listingFormData);
    const newListingCall = {
      method: 'POST',
      headers: validatedHeader,
      body: JSON.stringify(listingFormData),
    };

    const response = await fetch(listingsUrl, newListingCall);

    // Check if the response status is not in the range of 2xx
    if (!response.ok) {
      // Attempt to parse the error response body for detailed error messages
      try {
        const errorResponse = await response.json();
        console.error('Error in creating new listing:', errorResponse);
        alert(
          `Failed to create listing: ${errorResponse.message || 'An error occurred'}`
        );
      } catch (parseError) {
        // If parsing the error response fails, log and alert with a generic message
        console.error('Error parsing error response:', parseError);
        alert(
          'Failed to create listing: An error occurred, and we could not retrieve detailed information.'
        );
      }
    } else {
      // If the request was successful, log and possibly display success feedback
      const json = await response.json();
      console.log('Success in creating new listing', json, response);
      // Optionally, alert or update UI with success message
    }
  } catch (networkError) {
    // Handle network errors (e.g., request was not sent)
    console.error('Network error:', networkError);
    alert('Failed to create listing: Network error or CORS issue.');
  }
}
