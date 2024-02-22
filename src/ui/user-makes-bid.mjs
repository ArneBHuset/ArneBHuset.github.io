import { bidValidation } from '../validation/user-bid.mjs';

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
