import { filteredListingUrl } from '../../filters/api-filter/query-filters.mjs';
import { UNvalidatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Main API call for fetching all listings from the database
 * @returns {ReturnType} - Returns the JSON object of the response if the API call is successful.
 */
export async function callListings() {
	try {
		const filteredUrl = await filteredListingUrl();
		const retrieveListingsData = {
			method: 'GET',
			headers: UNvalidatedHeader,
		};
		const response = await fetch(filteredUrl, retrieveListingsData);
		if (!response.ok) {
			throw new Error(`API call failed with status: ${response.status}`);
		}
		const json = await response.json();
		if (json.errors && json.errors.length > 0) {
			const errorMessage = json.errors[0].message;
			throw new Error(errorMessage);
		}
		return json;
	} catch (error) {
		console.log('Failed to call listings data');
		throw error;
	}
}
