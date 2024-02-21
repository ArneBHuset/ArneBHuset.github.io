import { bidsMadeData } from '../../api-calls/profile/profile-bids.mjs';

export async function bidsMadeByUser() {
  const bidsMadeByUser = await bidsMadeData(); // Fetch the bids data
  console.log('Bidding data', bidsMadeByUser);

  const bidsSection = document.getElementById('bidsSection');

  // Check if there are any bids made by the user
  if (bidsMadeByUser && bidsMadeByUser.length > 0) {
    const bidsHtml = bidsMadeByUser
      .map(
        bid => `
            <div class="border-b-2 border-gray-200 p-4">
                <h3 class="font-semibold text-lg">Bid ID: ${bid.id}</h3>
                <p>Amount: $${bid.amount}</p>
                <p>Created: ${new Date(bid.created).toLocaleDateString()}</p>
            </div>
        `
      )
      .join('');

    // Set the innerHTML of the bids section to the generated bidsHtml
    bidsSection.innerHTML = bidsHtml;
  } else {
    // Display a message if there are no bids
    bidsSection.innerHTML = '<p>No bids made by this user.</p>';
  }
}
