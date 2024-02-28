import { listingsUrl } from '../../globalValues/urls.mjs';
import { UNvalidatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Main API call for fetch all listings from database
 * @returns {ReturnType} - Returns the json object of the response is api call is successful.
 */
export async function callAllListings() {
  try {
    const retriveListingsData = {
      method: 'GET',
      headers: UNvalidatedHeader,
    };
    const response = await fetch(listingsUrl, retriveListingsData);
    const json = await response.json();
    return json;
  } catch (error) {}
}
