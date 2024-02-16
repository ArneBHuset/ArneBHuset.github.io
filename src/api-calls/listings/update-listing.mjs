import { listingsUrl } from '../../globalValues/urls.mjs';
import { validatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Runs API call for updating and exsiting listing
 * @param {ParameterType} updateDataForm - Takes validated new form-data for updating a listing.
 */
export async function updateListing(updateDataForm, listingId) {
  try {
    const updateApiCall = {
      method: 'PUT',
      headers: validatedHeader,
      body: JSON.stringify(updateDataForm),
    };
    const response = await fetch(`${listingsUrl}/${listingId}`, updateApiCall);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
