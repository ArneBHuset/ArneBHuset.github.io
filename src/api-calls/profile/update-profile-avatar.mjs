import { currentProfileName } from '../../local-storage/current-user.mjs';
import { profileUrl } from '../../globalValues/urls.mjs';
import { validatedHeader } from '../../globalValues/api-header.mjs';

export async function changeProfileImg(newMedia) {
  try {
    console.log('body', newMedia);
    const userName = await currentProfileName();
    const updateProfileCall = {
      method: 'PUT',
      headers: validatedHeader,
      body: JSON.stringify(newMedia),
    };
    const response = await fetch(
      `${profileUrl}/${userName}/media`,
      updateProfileCall
    );
    if (!response.ok) {
      throw new Error('Failed to update profile image');
    }
    await response.json();
    window.location.reload();
  } catch (error) {
    console.log('Error updating profile image', error);
    const errorMessageSpan = document.getElementById('errorMessageProfile');
    errorMessageSpan.innerHTML = `<span class="error-message">Failed to update profile image: ${error.message}. Please try again later.</span>`;
  }
}
