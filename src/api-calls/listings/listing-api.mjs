import { filteredListingUrl } from '../../filters/api-filter/query-filters.mjs';
import { UNvalidatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Main API call for fetching all listings from the database
 * @returns {ReturnType} - Returns the JSON object of the response if the API call is successful.
 */
export async function callListings() {
  try {
    const filteredUrl = await filteredListingUrl();
    const retrieveListingsData = {
      method: 'GET',
      headers: UNvalidatedHeader,
    };
    console.log('Making API call to:', filteredUrl);
    const response = await fetch(filteredUrl, retrieveListingsData);

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const json = await response.json();

    if (json.errors && json.errors.length > 0) {
      const errorMessage = json.errors[0].message;
      console.error('API response error:', errorMessage);
      throw new Error(errorMessage);
    }

    console.log('Successful API call, received data:', json);
    return json;
  } catch (error) {
    console.error('Error in callListings:', error.message);
    throw error;
  }
}
