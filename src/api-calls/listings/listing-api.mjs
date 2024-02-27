import { filteredListingUrl } from '../../filters/api-filter/all-query-filters.mjs';
import { UNvalidatedHeader } from '../../globalValues/api-header.mjs';
// import { listingsUrl } from '../../globalValues/urls.mjs';

/**
 * Main API call for fetch all listings from database
 * @returns {ReturnType} - Returns the json object of the response is api call is successful.
 */
export async function callListings() {
  try {
    const filteredUrl = await filteredListingUrl();
    // console.log(filteredUrl);
    const retriveListingsData = {
      method: 'GET',
      headers: UNvalidatedHeader,
    };
    console.log('Filtered url from callListings:', filteredUrl);
    const response = await fetch(filteredUrl, retriveListingsData);
    // console.log('Listing data:', response);
    const json = await response.json();
    // console.log(json);
    return json;
  } catch (error) {}
}
