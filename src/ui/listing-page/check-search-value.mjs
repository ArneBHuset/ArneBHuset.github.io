import { searchForListing } from '../../main.mjs';
export async function checkForSearchInput() {
	document.addEventListener('DOMContentLoaded', async () => {
		const urlParams = new URLSearchParams(window.location.search);
		const searchParam = urlParams.get('search');

		if (searchParam) {
			const searchInput = document.getElementById('listing-search');
			searchInput.value = decodeURIComponent(searchParam);
			await searchForListing();
		}
	});
}
