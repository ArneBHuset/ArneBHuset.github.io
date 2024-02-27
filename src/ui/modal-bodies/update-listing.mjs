// register-modal.mjs
import { createModal } from '../modal-base/modals.mjs';

const updateContent = `
  <h3 class="mb-4 p-6 font-bold text-3xl text-center font-primary text-primary2 uppercase">Update listing</h3>
  <form id="updateListingForm" class="px-6 my-4 flex flex-col items-center gap-3" novalidate>
          <input
            type="text"
            id="listingTitle"
            placeholder="Listing Title.."
            autocomplete="off"
            class="bg-white outline outline-1 shadow-md text-primary2 text-sm rounded-lg focus:shadow-lg focus:outline-teal-600 block w-full pl-8 p-2.5"
          />
          <input
            type="text"
            id="listingDescription"
            placeholder="Add description.."
            autocomplete="off"
            class="bg-white outline outline-1 shadow-md text-primary2 text-sm rounded-lg focus:shadow-lg focus:outline-teal-600 block w-full pl-8 p-2.5"
          />
          <input
            type="text"
            id="listingTags"
            placeholder="#Tags.."
            autocomplete="off"
            class="bg-white outline outline-1 shadow-md text-primary2 text-sm rounded-lg focus:shadow-lg focus:outline-teal-600 block w-full pl-8 p-2.5"
          />
          <input
            type="url"
            id="listingMedia"
            placeholder="Add picture link.."
            autocomplete="off"
            class="bg-white outline outline-1 shadow-md text-primary2 text-sm rounded-lg focus:shadow-lg focus:outline-teal-600 block w-full pl-8 p-2.5"
          />
          <span id="updateErrorMessage" class="error-message max-w-1/2"></span>
          <button
            type="submit"
            id="UpdateListingBtn"
            class="mt-4 bg-teal-600 opacity-80 hover:opacity-100 text-white focus:outline-none focus:ring rounded px-4 py-2"
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
