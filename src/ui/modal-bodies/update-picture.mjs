import { changeProfileImg } from '../../api-calls/profile/update-profile-avatar.mjs';
import { createModal } from '../modal-base/modals.mjs';

const modalContent = `
<div class="flex justify-center w-full p-6 sm:p-12 ">
<div class=" flex-col items-center bg-primary1 ">
  <h3 class="mb-2 font-bold text-3xl text-center font-primary text-primary2">
    Update Avatar
  </h3>
  <form id="updateMediaForm" class="px-3 flex flex-col items-center gap-3">
<input
type="url"
id="registerAvatar"
placeholder="Avatar URL.."
autocomplete="on"
class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
/>
<button
type="submit"
id="RegisterBtn"
class="flex justify-center items-center bg-teal-600 opacity-80 hover:opacity-100 text-white focus:outline-none focus:ring rounded px-3 py-2"
>Update avatar</button>
</form>
</div>
</div>
`;

/**
 * Calls the base modal and populates it with modalContent with updateform.
 * Initz the api call for updating image with the input value
 */
export async function userUpdatesProfilePicture() {
	const updateModalBtn = document.getElementById('updateModalBtn');

	if (updateModalBtn) {
		updateModalBtn.addEventListener('click', () => {
			const profileModal = createModal();
			profileModal.setModalContent(modalContent);
			profileModal.openModal();
			const updateForm = document.getElementById('updateMediaForm');
			if (updateForm) {
				updateForm.addEventListener('submit', async event => {
					event.preventDefault();
					const avatarValue = document.getElementById('registerAvatar').value;
					const newMediaData = {
						avatar: avatarValue,
					};
					await changeProfileImg(newMediaData);
					profileModal.closeModal();
				});
			}
		});
	}
}
