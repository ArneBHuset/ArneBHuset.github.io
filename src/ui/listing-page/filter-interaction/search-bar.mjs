// Function to get the current search input and then clear the field
// Function to get the current search input
export function currentSearchInput() {
  const searchInput = document.getElementById('listing-search');
  return searchInput.value.trim(); // Don’t clear the field automatically
}
