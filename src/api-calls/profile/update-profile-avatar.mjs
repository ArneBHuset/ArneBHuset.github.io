import { currentProfileName } from '../../local-storage/current-user.mjs';
import { profileUrl } from '../../globalValues/urls.mjs';
import { validatedHeader } from '../../globalValues/api-header.mjs';

/**
 * API call for chaning user's profile picture
 * @param {Object} newMedia - Taakes the img URL for the new profile picture
 */
export async function changeProfileImg(newMedia) {
	try {
		const userName = await currentProfileName();
		const updateProfileCall = {
			method: 'PUT',
			headers: validatedHeader,
			body: JSON.stringify(newMedia),
		};
		const response = await fetch(`${profileUrl}/${userName}/media`, updateProfileCall);
		if (!response.ok) {
			throw new Error('Failed to update profile image');
		}
		await response.json();
		window.location.reload();
	} catch (error) {
		const errorMessageSpan = document.getElementById('errorMessageProfile');
		errorMessageSpan.innerHTML = `<span class="error-message">Failed to update profile image: ${error.message}. Please try again later.</span>`;
	}
}
