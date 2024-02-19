// Similarly, this function returns the current checked state of the seller details filter checkbox
export function currentSellerFilter() {
  const sellerFilterInput = document.getElementById('sellerFilterInput');
  return sellerFilterInput.checked; // true for showing seller, false for not showing
}
