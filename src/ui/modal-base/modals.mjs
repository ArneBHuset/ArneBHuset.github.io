import { openModal } from './open-modal.mjs';
import { closeModal } from './close-modal.mjs';
import { setModalContent } from './modal-content.mjs';

// Assuming openModal, closeModal, and setModalContent are properly defined in their respective modules

export function createModal(initialContent = '') {
  let modalExists = document.getElementById('mainModal');

  // Function to attach event listeners to the modal
  function attachEventListeners(modal) {
    modal
      .querySelector('.modal-container')
      .addEventListener('click', event => event.stopPropagation());
    modal
      .querySelector('#closeModalBtn')
      .addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', () => closeModal(modal));
  }

  // Ensure a modal exists in the DOM, if not, create it
  if (!modalExists) {
    const mainModalBody = `
      <div id="mainModal" class="main-modal w-full fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 animated fadeIn faster">
        <div class="modal-container bg-white w-auto h-auto my-auto rounded-md border-secondary-1 overflow-auto">
          <div class="modal-header flex justify-end p-2 bg-secondary1">
            <div class="modal-close cursor-pointer z-50 text-gray-600 hover:text-gray-800" id="closeModalBtn">
              <span class="material-symbols-outlined">close</span>
            </div>
          </div>
          <div id="modalBody">${initialContent}</div>
        </div>
      </div>`;

    document.body.insertAdjacentHTML('beforeend', mainModalBody);
    modalExists = document.getElementById('mainModal');
    attachEventListeners(modalExists);
  }

  // Expose functionalities to manipulate the modal
  return {
    openModal: () => openModal(modalExists),
    closeModal: () => closeModal(modalExists),
    setModalContent: htmlContent => {
      // Directly access the modal's body to set its content
      const modalBody = modalExists.querySelector('#modalBody');
      if (modalBody) {
        modalBody.innerHTML = htmlContent;
      }
    },
  };
}
