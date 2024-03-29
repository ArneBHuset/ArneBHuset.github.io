import { openModal } from './open-modal.mjs';
import { closeModal } from './close-modal.mjs';

/**
 * Sets up modal dialogue and populates with content, initially set to empty/'' but set with innerHTML elsewhere.
 * @param {innerHTML} listingFormData - Takes innerHTML to craete the listing body.
 */
export function createModal(initialContent = '') {
	let modalExists = document.getElementById('mainModal');

	function attachEventListeners(modal) {
		modal.querySelector('.modal-container').addEventListener('click', event => event.stopPropagation());
		modal.querySelector('#closeModalBtn').addEventListener('click', () => closeModal(modal));
		modal.addEventListener('click', () => closeModal(modal));
	}

	if (!modalExists) {
		const mainModalBody = `
      <div id="mainModal" class="main-modal w-full fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 animated fadeIn faster">
        <div class="modal-container bg-primary1 w-auto h-auto my-auto rounded-md border-secondary-1 overflow-auto">
          <div class="modal-header flex justify-end p-1 bg-teal-600">
            <div class="modal-close cursor-pointer z-50 text-gray-600 hover:text-gray-800" id="closeModalBtn">
              <span class="material-symbols-outlined text-primary1 opacity-60 hover:opacity-100 pt-1">close</span>
            </div>
          </div>
          <div id="modalBody">${initialContent}</div>
        </div>
      </div>`;

		document.body.insertAdjacentHTML('beforeend', mainModalBody);
		modalExists = document.getElementById('mainModal');
		attachEventListeners(modalExists);
	}

	return {
		openModal: () => openModal(modalExists),
		closeModal: () => closeModal(modalExists),
		setModalContent: htmlContent => {
			const modalBody = modalExists.querySelector('#modalBody');
			if (modalBody) {
				modalBody.innerHTML = htmlContent;
			}
		},
	};
}
