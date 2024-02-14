import { listingsUrl } from '../../globalValues/urls.mjs';
import { listingsRetrivalError } from '../../error/listings-error/listingretrival-error.mjs';
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
    // console.log('Json from all listings api call', json);
    return json;
  } catch (error) {
    listingsRetrivalError(error);
  }
}
