// Function to get the current search input
export function currentSearchInput() {
  const searchInput = document.getElementById('listing-search');
  return searchInput.value.trim(); // Returns the current input value, trimmed of whitespace
}
