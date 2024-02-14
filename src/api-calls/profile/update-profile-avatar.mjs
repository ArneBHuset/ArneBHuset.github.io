import { currentProfileName } from '../../local-storage/current-user.mjs';
import { profileUrl } from '../../globalValues/urls.mjs';
import { validatedHeader } from '../../globalValues/api-header.mjs';

export async function changeProfileImg(newMedia) {
  try {
    const userName = await currentProfileName();
    const updateProfileCall = {
      method: 'PUT',
      header: validatedHeader,
      body: newMedia,
    };
    const response = await fetch(
      `${profileUrl}/${userName}/media`,
      updateProfileCall
    );
    const json = await response.json();
    console.log('Result of profile update', json, response);
  } catch (error) {
    console.log(error);
  }
}
