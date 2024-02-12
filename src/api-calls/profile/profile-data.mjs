import { filteredProfileUrl } from '../../filters/api-filter/profile/profile-filter.mjs';
import { profileDataError } from '../../error/profile-error/profile-data-error.mjs';
import { validatedHeader } from '../../globalValues/api-header.mjs';
/**
 * Runs api call for fetching users profile data
 * @returns {ReturnType} - Returns oject with all profile data
 */
export async function fetchProfileData() {
  try {
    const profileUrl = await filteredProfileUrl();
    const profileApiCall = {
      method: 'GET',
      headers: validatedHeader,
    };
    const response = await fetch(profileUrl, profileApiCall);
    console.log('Profile response', response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    profileDataError(error);
  }
}
