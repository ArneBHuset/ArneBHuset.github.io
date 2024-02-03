import { profileUrl } from '../globalValues/urls.mjs';
import { profileDataError } from '../error/profile-error/profile-data-error.mjs';
import { checkingAccessToken } from '../access-token/validate-access-token.mjs';

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
    } else {
      throw new Error('No access token found');
    }
  } catch (error) {
    profileDataError(error);
  }
}
