import { checkingAccessToken } from '../access-token/validate-access-token.mjs';
import { listingsUrl } from '../globalValues/urls.mjs';

let testID = 'd8654d6b-4c7a-40a8-82c1-5fea47b16c45';
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
      // Use bidValue, which is the parameter name, not bidObject
      body: JSON.stringify({ amount: bidValue.amount }),
    };
    const response = await fetch(`${listingsUrl}/${testID}/bids`, bidCall);
    console.log('Your bid was:', bidValue.amount, response); // Adjusted to log bidValue.amount
  } catch (error) {
    console.log('Nanana', error);
  }
}
