import { filteredProfileUrl } from '../../filters/api-filter/profile-filter.mjs';
import { validatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Runs api call for fetching user's profile data
 * @returns {ReturnType} - Returns object with all profile data or null if an error occurs
 */
export async function fetchProfileData() {
  try {
    const profileUrl = await filteredProfileUrl();
    const profileApiCall = {
      method: 'GET',
      headers: validatedHeader,
    };
    const response = await fetch(profileUrl, profileApiCall);
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Failed to fetch profile data');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    const errorMessageSpan = document.getElementById('errorMessageProfile');
    errorMessageSpan.innerHTML = `<span class="opacity-50 text-primary2"> ${error.message}. Please Log in!</span>`;
    console.error('Profile data fetch error:', error);
    return null;
  }
}
