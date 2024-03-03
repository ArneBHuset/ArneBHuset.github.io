import { listingsUrl } from '../../globalValues/urls.mjs';
import { validatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Runs API call to create a new listing.
 * @param {Object} listingFormData - Takes validated form-data to create new listing
 */
export async function createNewListing(listingFormData) {
	let errorDisplay = document.getElementById('errorMessageListingPage');
	errorDisplay.innerHTML = '';
	try {
		const newListingCall = {
			method: 'POST',
			headers: validatedHeader,
			body: JSON.stringify(listingFormData),
		};
		const response = await fetch(listingsUrl, newListingCall);
		const json = await response.json();

		if (!response.ok) {
			const errorMessage = json.errors.map(err => err.message).join('<br>') || 'Failed to create listing';
			errorDisplay.innerHTML = `<h3 class="error-message">${errorMessage}</h3>`;
		} else {
			errorDisplay.innerHTML = `
          <span class="material-symbols-outlined text-green-600">
          task_alt
          </span>`;
			setTimeout(function () {
				window.location.reload();
			}, 1000);
		}
	} catch (networkError) {
		errorDisplay.innerHTML = `<h3 class="error-message">Network error: ${networkError.message}</h3>`;
	}
}
