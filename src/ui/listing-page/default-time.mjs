/**
 * Sets default time 24H ahead for the new-bid expiration
 */
export function defaultTimeNewListing() {
  const endDateInput = document.getElementById('listingEndsAt');
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];
  endDateInput.value = tomorrowStr;
}
