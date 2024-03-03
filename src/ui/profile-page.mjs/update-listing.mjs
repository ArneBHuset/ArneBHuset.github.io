import { updateListing } from '../../api-calls/listings/update-listing.mjs';
import { updateModal } from '../modal-bodies/update-listing.mjs';
import { updateListingData } from '../../forms/update-listing.mjs';

/**
 * Sets up the form handle before using the object as a parameter for calling the update API call.
 * @param {string} event - Registers the click event
 * @param {string} listingId - Takes the corrosponding container id for the listing
 */
async function handleFormSubmit(event, listingId) {
	event.preventDefault();
	const listingUpdateData = await updateListingData();
	if (typeof listingUpdateData === 'object' && listingUpdateData !== null) {
		updateListing(listingUpdateData, listingId);
	}
}
/**
 * Sets up the click interaction for updating the user's listing and calls the handleFormSubmit funciton
 * @param {string} container - Takes the corrosponding container if for the listing
 */
export async function updateListingInteraction(container) {
	container.addEventListener('click', async function (e) {
		const updateBtn = e.target.closest('.update-button');
		if (updateBtn) {
			const listingId = updateBtn.getAttribute('data-listing-id');
			await updateModal();

			const updateForm = document.getElementById('updateListingForm');
			if (updateForm) {
				updateForm.onsubmit = async event => {
					await handleFormSubmit(event, listingId);
				};
			}
		}
	});
}
