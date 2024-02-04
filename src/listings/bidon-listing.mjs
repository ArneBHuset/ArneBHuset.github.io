import { checkingAccessToken } from '../access-token/validate-access-token.mjs';
import { listingsUrl } from '../globalValues/urls.mjs';

let testID = `1d36126e-a74a-4e2a-87b2-26dc2d98309b`;
// Should only run after a "bid" button has been clicked with bid amount

/**
 * Runs API call for bidding on a listing
 * @param {ParameterType} bidValue - Value of the bid to be placed
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
    const response = await fetch(`${listingsUrl}/${testID}/"bids"`, bidCall);
    console.log('Your bid was:', bidValue, response);
  } catch (error) {
    console.log('Nanana', error);
  }
}
