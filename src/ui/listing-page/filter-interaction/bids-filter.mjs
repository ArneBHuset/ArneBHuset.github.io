// This function now just returns the current checked state of the bids filter checkbox
export function currentBidsFilter() {
  const bidsFilterInput = document.getElementById('bidsFilterInput');
  return bidsFilterInput.checked; // true for showing bids, false for not showing
}
