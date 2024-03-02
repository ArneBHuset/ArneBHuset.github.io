import { placedBid } from '../forms/bid-form.mjs';
import { fetchProfileData } from '../api-calls/profile/profile-data.mjs';
import { bidOnListing } from '../api-calls/listings/bidon-listing.mjs';

/**
 * Checks if form data from placedBid is valid, that user has sufficienct credits, and calls bidOnListing api-call
 */
export async function bidValidation(listingId) {
  const placeBidBtn = document.getElementById('biddingBtn');
  const errorElement = document.getElementById('biddingError');
  placeBidBtn.addEventListener('click', async () => {
    try {
      errorElement.textContent = '';
      const userProfile = await fetchProfileData();
      const userCredit = userProfile.credits;
      const userBid = await placedBid();
      const bidAmount = parseFloat(userBid.amount);

      if (isNaN(bidAmount)) {
        errorElement.textContent = 'Please provide a numerical bid';
        return;
      }
      if (bidAmount > userCredit) {
        errorElement.textContent = 'Insufficient credits in wallet';
        return;
      }
      await bidOnListing(userBid, listingId);
      const remainingCredits = userCredit - bidAmount;
      errorElement.innerHTML = `<h3 class="text-teal-600 font-semibold font-primary">Bid successful! You bidded ${bidAmount} credits.<br/> Remaining credits: ${remainingCredits}.</h3>`;
    } catch (error) {
      errorElement.textContent =
        error.message || 'Error during the bidding process';
    }
  });
}
