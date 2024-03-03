import { validatedHeader } from '../../globalValues/api-header.mjs';
import { profileUrl } from '../../globalValues/urls.mjs';
import { currentProfileName } from '../../local-storage/current-user.mjs';

/**
 * Runs api call for fetching user's bids data
 * @returns {ReturnType} - Returns object with all bids data or null if an error occurs
 */
export async function bidsMadeData() {
  try {
    const userName = await currentProfileName();
    const profileApiCall = {
      method: 'GET',
      headers: validatedHeader,
    };
    const response = await fetch(
      `${profileUrl}/${userName}/bids?_listing=true`,
      profileApiCall
    );
    if (!response.ok) {
      throw new Error('Failed to fetch bids data');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    const errorMessageSpan = document.getElementById('errorMessageProfile');
    errorMessageSpan.innerHTML = `<span class="error-message">Failed to load bids data: ${error.message}. Please try again later.</span>`;
    return null;
  }
}
