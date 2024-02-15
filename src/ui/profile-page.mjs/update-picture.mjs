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
type="submit"
id="RegisterBtn"
class="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 focus:outline-none"
>Update avatar</button>
</form>`;

export async function userUpdatesProfilePicture() {
  const updateModalBtn = document.getElementById('updateModalBtn');

  if (updateModalBtn) {
    updateModalBtn.addEventListener('click', () => {
      // Create the modal instance with the initial content set to an empty string or you could pass modalContent directly.
      const profileModal = createModal();

      // Set the content of the modal to your form
      profileModal.setModalContent(modalContent);

      // Open the modal
      profileModal.openModal();

      // Attach event listener to the "Register" button within the modal content
      const updateForm = document.getElementById('updateMediaForm');
      if (updateForm) {
        updateForm.addEventListener('submit', async event => {
          event.preventDefault();
          // Get the value from the input field
          const avatarValue = document.getElementById('registerAvatar').value;
          // Call the function to change the profile image with the new URL
          const newMediaData = {
            avatar: avatarValue,
          };
          try {
            await changeProfileImg(newMediaData);

            profileModal.closeModal();
          } catch (error) {
            console.log(error);
          }
        });
      }
    });
  }
}
