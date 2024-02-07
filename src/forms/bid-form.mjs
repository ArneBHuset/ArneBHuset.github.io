/**
 * Takes form-data for amount of bid to be placed
 * @returns {ReturnType} - Returns array object of bid-data for bidding api call
 */
export async function placedBid() {
  const bidAmountString = document.getElementById('bidInputAmount').value;
  const bidAmount = Number(bidAmountString);
  const userBid = {
    amount: bidAmount,
  };
  console.log(userBid);
  return userBid;
}
