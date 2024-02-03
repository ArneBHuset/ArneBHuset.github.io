import { testListingUrl } from '../filters/api-filter/url-filters.mjs';
import { listingsRetrivalError } from '../error/listings-error/listingretrival-error.mjs';

export async function callListings() {
  try {
    const retriveListingsData = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(
      // Bedre filtrering
      `${testListingUrl}?_seller=true&_bids=true`,
      retriveListingsData
    );
    // console.log('Listing data:', response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    listingsRetrivalError(error);
  }
}
