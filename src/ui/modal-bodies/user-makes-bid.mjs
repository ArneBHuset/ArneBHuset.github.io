import { bidValidation } from '../../validation/user-bid.mjs';

/**
 * Sets up the bidding input with animation
 * @param {string} listingId - Takes the corrosponding listing id for placing the bid
 */
export async function userMakesBid(listingId) {
  const biddingBtn = document.getElementById('biddingBtn');
  const biddingArea = document.getElementById('inputArea');

  if (biddingBtn) {
    biddingBtn.addEventListener('click', () => {
      biddingArea.classList.remove('hidden');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          biddingArea.classList.remove('translate-x-full');
          biddingArea.classList.add('translate-x-0', 'flex', 'justify-center');
        });
      });

      bidValidation(listingId);
    });
  } else {
    console.log('Bidding button unavailable');
  }
}
