import { filteredListingUrl } from '../../filters/api-filter/url-filters.mjs';
import { listingsRetrivalError } from '../../error/listings-error/listingretrival-error.mjs';
import { UNvalidatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Main API call for fetch all listings from database
 * @returns {ReturnType} - Returns the json object of the response is api call is successful.
 */
export async function callListings() {
  try {
    const retriveListingsData = {
      method: 'GET',
      headers: UNvalidatedHeader,
    };
    const response = await fetch(
      // Bedre filtrering
      `${filteredListingUrl}?_seller=true&_bids=true`,
      retriveListingsData
    );
    // console.log('Listing data:', response);
    const json = await response.json();
    // console.log(json);
    return json;
  } catch (error) {
    listingsRetrivalError(error);
  }
}
