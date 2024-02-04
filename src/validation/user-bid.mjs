import { placedBid } from '../forms/bid-form.mjs';
import { fetchProfileData } from '../profile/profile.mjs';
import { bidOnListing } from '../listings/bidon-listing.mjs';

/**
 * Checks if form data from placedBid is valid, that user has sufficienct credits, and calls bidOnListing api-call
 */
export async function bidValidation() {
  const placeBidBtn = document.getElementById('placeBidBtn');

  placeBidBtn.addEventListener('click', async () => {
    // Vurder å bare kjøre denne en gang en annen plass?
    const userProfile = await fetchProfileData();
    const userCredit = userProfile.credits;
    bidAmount = await placedBid();

    if (!Number.isFinite(bidAmount)) {
      console.log('Please provide a numerical bid');
      return;
    }

    if (bidAmount > userCredit) {
      console.log('Insufficient credits in wallet');
      return;
    }

    bidOnListing(bidAmount);
  });
}
