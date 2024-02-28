import { filteredListingUrl } from '../../filters/api-filter/query-filters.mjs';
import { UNvalidatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Main API call for fetch all listings from database
 * @returns {ReturnType} - Returns the json object of the response is api call is successful.
 */
export async function callListings() {
  try {
    const filteredUrl = await filteredListingUrl();
    const retriveListingsData = {
      method: 'GET',
      headers: UNvalidatedHeader,
    };
    // console.log('Filtered url from callListings:', filteredUrl);
    const response = await fetch(filteredUrl, retriveListingsData);
    const json = await response.json();
    console.log('This is the raw json data from callListing()', json);
    return json;
  } catch (error) {}
}
