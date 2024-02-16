// register-modal.mjs
import { createModal } from '../modal-base/modals.mjs';

const updateContent = `
  <h3 class="mb-4 font-bold text-3xl text-blue-500">Update your listing</h3>
  <form id="updateListingForm" class="px-3 flex flex-col items-center gap-3">
          <input
            type="text"
            id="listingTitle"
            placeholder="Listing Title.."
            autocomplete="off"
            class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            id="listingDescription"
            placeholder="Add description.."
            autocomplete="off"
            class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            id="listingTags"
            placeholder="#Tags.."
            autocomplete="off"
            class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <input
            type="url"
            id="listingMedia"
            placeholder="Add picture link.."
            autocomplete="off"
            class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          
          <button
            type="submit"
            id="UpdateListingBtn"
            class="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 focus:outline-none"
          >
            Update Listing
          </button>
        </form>
`;

export async function updateModal() {
  const modal = createModal();
  modal.openModal();
  modal.setModalContent(updateContent);
}
