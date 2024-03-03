import { defaultMedia } from '../../globalValues/general.mjs';

/**
 * Takes the API json media and organizes it into the listing modal dialogue. Set up several images if present
 * @param {object} listingData - Takes all json data form corrosponding listing
 */
export function displayListingMedia(listingData) {
	const mediaContainer = document.getElementById('listingMedia');
	if (!mediaContainer) {
		return;
	}
	if (!listingData || !Array.isArray(listingData.media)) {
		mediaContainer.innerHTML = `<p class="error-message">Media information is unavailable.</p>`;
		return;
	}
	let innerHTML = '';
	const mediaUrls = listingData.media.length > 0 ? listingData.media : [defaultMedia];

	if (mediaUrls.length === 1) {
		innerHTML = `<img src="${mediaUrls[0]}" alt="Listing Image" class="w-full height-full  p-2 rounded-md my-auto">`;
	} else {
		innerHTML = mediaUrls
			.map(
				url => `
        <div class="inline-block">
            <img src="${url}" alt="Listing Image" class="w-full max-h-64 p-2 rounded-md">
        </div>
    `
			)
			.join('');
	}
	mediaContainer.innerHTML = innerHTML;
}
