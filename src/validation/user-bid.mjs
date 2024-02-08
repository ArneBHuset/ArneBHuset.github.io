import { placedBid } from '../forms/bid-form.mjs';
import { fetchProfileData } from '../api-calls/profile/profile.mjs';
import { bidOnListing } from '../api-calls/listings/bidon-listing.mjs';

/**
 * Checks if form data from placedBid is valid, that user has sufficienct credits, and calls bidOnListing api-call
 */
export async function bidValidation() {
  const placeBidBtn = document.getElementById('biddingBtn');
  placeBidBtn.addEventListener('click', async () => {
    const userProfile = await fetchProfileData();
    const userCredit = userProfile.credits;
    console.log('The user credit is', userCredit);
    const userBid = await placedBid();
    console.log('The user bid is', userBid);

    const bidAmount = userBid.amount;
    console.log('The bid amount is', bidAmount);
    if (isNaN(bidAmount)) {
      console.log('Please provide a numerical bid');
      return;
    }
    if (bidAmount > userCredit) {
      console.log('Insufficient credits in wallet');
      return;
    }
    bidOnListing(userBid);
  });
}
