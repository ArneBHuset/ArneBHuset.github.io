import { changeProfileImg } from '../../api-calls/profile/update-profile-avatar.mjs';
import { createModal } from '../modal-base/modals.mjs';
import { openModal } from '../modal-base/open-modal.mjs';

const modalContent = `
<form id="updateMediaForm" class="px-3 flex flex-col items-center gap-3">
<input
type="url"
id="registerAvatar"
placeholder="Avatar URL.."
autocomplete="on"
class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
/>
<button
type="button"
id="RegisterBtn"
class="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 focus:outline-none"
>Register</button>
</form>`;

export async function userUpdatesProfilePicture() {
  const updateModalBtn = document.getElementById('updateModalBtn');

  updateModalBtn.addEventListener('click', () => {
    console.log('yiha');
  });

  changeProfileImg();
}
