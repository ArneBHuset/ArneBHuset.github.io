import { bidValidation } from '../validation/user-bid.mjs';

// let bidInput = `
// <input
// type="number"
// id="bidInputAmount"
// class="max-w-1/2"
// placeholder="Amount to bid.."
// autocomplete="off"
// class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
// />`;

export async function userMakesBid() {
  const biddingBtn = document.getElementById('biddingBtn');
  const biddingArea = document.getElementById('inputArea');

  if (biddingBtn) {
    biddingBtn.addEventListener('click', () => {
      biddingArea.classList.remove('hidden', 'translate-x-full'); // Make the element visible and start the animation
      biddingArea.classList.add('translate-x-0'); // Move element to its original position
      // Assuming bidValidation is a function you've defined elsewhere
      bidValidation();
    });
  } else {
    console.log('Bidding button unavailable');
  }
}
