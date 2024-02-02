import { profileUrl } from '../globalValues/urls.mjs';
import { profileDataError } from '../error/profile-error/profile-data-error.mjs';

export async function fetchProfileData() {
  try {
    const localAccessToken = localStorage.getItem('accessToken');
    if (localAccessToken) {
      const profileApiCall = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localAccessToken}`,
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
