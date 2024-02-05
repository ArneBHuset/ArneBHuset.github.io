import { profileUrl } from '../globalValues/urls.mjs';
import { profileDataError } from '../error/profile-error/profile-data-error.mjs';
import { checkingAccessToken } from '../access-token/validate-access-token.mjs';

/**
 * Runs api call for fetching users profile data
 * @returns {ReturnType} - Returns oject with all profile data
 */
export async function fetchProfileData() {
  try {
    const accessToken = checkingAccessToken();
    if (accessToken) {
      const profileApiCall = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await fetch(profileUrl, profileApiCall);
      console.log('Profile response', response);
      const json = await response.json();
      console.log(json);
      return json;
    } else {
      throw new Error('No access token found');
    }
  } catch (error) {
    profileDataError(error);
  }
}