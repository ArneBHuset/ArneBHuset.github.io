import { filteredListingData } from './filtered-json.mjs';
import { currentSearchInput } from '../../main.mjs';
import { listingCardBuild } from '../../ui/listings/listing-card.mjs';

/**
 * Takes the current letter input in the search input and matches it against the available json data, present in the listings
 */
export async function searchForListing() {
	const searchInput = currentSearchInput();
	if (!searchInput) return;

	const listings = await filteredListingData();
	const filteredListings = listings
		.filter(listing => {
			const searchText = searchInput.toLowerCase();
			const matchesTitle = listing.title && listing.title.toLowerCase().includes(searchText);
			const matchesDescription = listing.description && listing.description.toLowerCase().includes(searchText);
			const matchesTags = listing.tags && listing.tags.some(tag => tag && tag.toLowerCase().includes(searchText));
			return matchesTitle || matchesDescription || matchesTags;
		})
		.slice(0, 9);

	const listingsHTML = await listingCardBuild(filteredListings);
	document.getElementById('listingsContainer').innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${listingsHTML}
    </div>`;
}

/**
 * Updates the DOM and listing display for every letter added or removed in the search input field
 */
export async function eventListener() {
	document.addEventListener('DOMContentLoaded', () => {
		const searchInput = document.getElementById('listing-search');
		const clearButton = document.getElementById('clearButton');

		if (searchInput) {
			searchInput.addEventListener('input', () => {
				searchForListing();
			});
			searchInput.addEventListener('blur', async () => {
				if (searchInput.value === '') {
					const rawListings = await filteredListingData();
					const listingsHTML = await listingCardBuild(rawListings);
					document.getElementById('listingsContainer').innerHTML = `
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      ${listingsHTML}
                  </div>`;
				}
			});
		}
		if (clearButton) {
			clearButton.addEventListener('click', async () => {
				searchInput.value = '';
				const rawListings = await filteredListingData();
				const listingsHTML = await listingCardBuild(rawListings);
				document.getElementById('listingsContainer').innerHTML = `
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      ${listingsHTML}
                  </div>`;
			});
		}
	});
}
