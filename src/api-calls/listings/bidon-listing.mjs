import { listingsUrl } from '../../globalValues/urls.mjs';
import { validatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Runs API call for bidding on a listing
 * @param {Object} bidValue - Object with the value of the bid to be placed
 */
export async function bidOnListing(bidValue, listingId) {
  try {
    const bidCall = {
      method: 'POST',
      headers: validatedHeader,
      body: JSON.stringify(bidValue),
    };
    console.log('Attempting to post bid:', bidValue);
    const response = await fetch(`${listingsUrl}/${listingId}/bids`, bidCall);

    if (!response.ok) {
      console.error('HTTP Error:', response.status);
      const errorBody = await response.json();
      console.error('Error response body:', errorBody);
      throw new Error(
        `API responded with a status: ${response.status} and message: ${JSON.stringify(errorBody)}`
      );
    }

    const responseData = await response.json();
    console.log('Bid successful:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error making the bid:', error);
    throw error;
  }
}
