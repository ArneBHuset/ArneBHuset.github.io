import { validatedHeader } from '../../globalValues/api-header.mjs';
import { currentProfileName } from '../../local-storage/current-user.mjs';
import { profileUrl } from '../../globalValues/urls.mjs';
/**
 * Runs api call for fetching users profile data
 * @returns {ReturnType} - Returns oject with all profile data
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
    console.log('Profile bids response', response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log('Error wtih profile bids data', error);
  }
}
