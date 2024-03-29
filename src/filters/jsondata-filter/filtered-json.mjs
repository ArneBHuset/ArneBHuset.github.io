import { newestListings } from './filter-by-creationdate.mjs';
import { callUserListings } from '../../api-calls/profile/profile-listings.mjs';

/**
 * Takes the json data from a specific sourse, and returns it to the correct html page for building listing cards.
 * @returns {ReturnType} - Returns json data for listing card build
 */
export async function filteredListingData() {
	if (document.body.dataset.page === 'index') {
		const listingsSortedByDate = await newestListings();
		const listingsForCarousel = listingsSortedByDate.slice(0, 30);
		return listingsForCarousel;
	}

	if (document.body.dataset.page === 'profile') {
		const listingsSortedForProfile = await callUserListings();
		return listingsSortedForProfile;
	}

	if (document.body.dataset.page === 'listings') {
		const listingsSortedForListingPage = await newestListings();
		return listingsSortedForListingPage;
	}
}
