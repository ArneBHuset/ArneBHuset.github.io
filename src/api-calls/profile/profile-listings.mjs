import { filteredListingUrl } from '../../filters/api-filter/query-filters.mjs';
import { validatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Main API call for fetching all user listings from the database
 * @returns {ReturnType} - Returns the JSON object of the response if the API call is successful, or null if an error occurs.
 */
export async function callUserListings() {
  try {
    const filteredUrl = await filteredListingUrl();
    const retrieveListingsData = {
      method: 'GET',
      headers: validatedHeader,
    };
    const response = await fetch(filteredUrl, retrieveListingsData);
    if (!response.ok) {
      throw new Error('Failed to fetch listings');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    const errorMessageSpan = document.getElementById(
      'errorMessageProfileListings'
    );
    errorMessageSpan.innerHTML = `<span class="error-message">Failed to load listings: ${error.message}. Please try again later.</span>`;
    return null;
  }
}
