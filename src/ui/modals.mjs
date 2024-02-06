export function createModal(initialContent = '') {
  let modalExists = document.getElementById('mainModal');
  const mainModalBody = `
  <div id="mainModal" class="main-modal w-11/12 fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 animated fadeIn faster">
  <div class="modal-container bg-white w-11/12 md:w-1/2 lg:max-w-lg  rounded-md overflow-hidden  border-secondary-1  ">
    <div class="modal-header flex justify-end p-2 bg-secondary1">
    <div class="modal-close cursor-pointer z-50 text-gray-600 hover:text-gray-800" id="closeModalBtn">
    <span class="material-symbols-outlined">
      close
    </span>
  </div>  
    </div>
    <div id="modalBody">
      ${initialContent} 
    </div>
    
  </div>
</div>
`;

  if (!modalExists) {
    document.body.insertAdjacentHTML('beforeend', mainModalBody);
    modalExists = document.getElementById('mainModal');
    attachEventListeners(modalExists);
  }

  function openModal() {
    modalExists.style.display = 'flex';
  }

  function closeModal() {
    modalExists.remove(); // Ensures the modal is completely removed for a fresh start next time
  }

  function setModalContent(htmlContent) {
    const modalBody = document.getElementById('modalBody');
    if (modalBody) modalBody.innerHTML = htmlContent;
  }

  function attachEventListeners(modal) {
    modal
      .querySelector('.modal-container')
      .addEventListener('click', event => event.stopPropagation());
    modal.querySelector('#closeModalBtn').addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);
  }

  return { openModal, closeModal, setModalContent };
}
