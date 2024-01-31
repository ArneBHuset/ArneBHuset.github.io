import { API_BASE_URL } from '../globalValues/base-url.mjs';
import { listingsRetrivalError } from '../error/listings-error/listingretrival-error.mjs';

export async function displayListings() {
  const listingsUrl = `${API_BASE_URL}/auction/listings`;
  try {
    const retriveListingsData = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(listingsUrl, retriveListingsData);
    console.log('Listing data:', response);
    const json = await response.json();
    console.log('Listing json data', json);
  } catch (error) {
    listingsRetrivalError(error);
  }
}
