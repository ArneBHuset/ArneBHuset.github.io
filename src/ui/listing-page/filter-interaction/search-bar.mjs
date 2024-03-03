// Function to get the current search input and then clear the field
// Function to get the current search input
// Modified to accept an external value
export function currentSearchInput(externalValue = '') {
	const searchInput = document.getElementById('listing-search');
	if (externalValue) {
		searchInput.value = externalValue; // Set the value from URL parameter if present
	}
	return searchInput.value.trim();
}
