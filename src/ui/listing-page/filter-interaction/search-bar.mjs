export function currentSearchInput(externalValue = '') {
	const searchInput = document.getElementById('listing-search');
	if (externalValue) {
		searchInput.value = externalValue;
	}
	return searchInput.value.trim();
}
