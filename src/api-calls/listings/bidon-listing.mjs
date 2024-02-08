import { checkingAccessToken } from '../../access-token/validate-access-token.mjs';
import { listingsUrl } from '../../globalValues/urls.mjs';

let testID = 'd8654d6b-4c7a-40a8-82c1-5fea47b16c45';

/**
 * Runs API call for bidding on a listing
 * @param {Object} bidValue - Object with the value of the bid to be placed
 */
export async function bidOnListing(bidValue) {
  try {
    const accessToken = await checkingAccessToken();
    const bidCall = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(bidValue),
    };
    console.log('Attempting to post bid:', bidValue);
    const response = await fetch(`${listingsUrl}/${testID}/bids`, bidCall);

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
