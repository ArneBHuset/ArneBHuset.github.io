import { listingsUrl } from '../../globalValues/urls.mjs';
import { validatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Runs API call for bidding on a listing
 * @param {Object} bidValue - Object with the value of the bid to be placed
 * @param {Object} listingId - ID of the listing to be bidded no
 */
export async function bidOnListing(bidValue, listingId) {
  try {
    const bidCall = {
      method: 'POST',
      headers: validatedHeader,
      body: JSON.stringify(bidValue),
    };
    const response = await fetch(`${listingsUrl}/${listingId}/bids`, bidCall);
    const json = await response.json();

    if (!response.ok) {
      const errorMessage =
        json.errors && json.errors.length > 0
          ? json.errors[0].message
          : 'Failed to place bid';
      throw new Error(errorMessage);
    }
    return json;
  } catch (error) {
    const errorDisplay = document.getElementById('biddingError');
    errorDisplay.textContent = error.message || 'Error making the bid';
    throw error;
  }
}
