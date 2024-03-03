// login-modal.mjs
import { createModal } from '../modal-base/modals.mjs';
import { validateLoginData } from '../../validation/login-validate.mjs';

const loginContent = `
<div class="flex justify-center w-full p-6 sm:p-12">
  <div class="flex-col items-center bg-primary1">
    <h3 class="mb-2 font-bold text-3xl text-center font-primary text-primary2">LOG IN</h3>
    <form id="loginForm" class="flex flex-col justify-center items-center gap-4 py-4" novalidate>
      <input
        type="email"
        id="loginEmail"
        name="email"
        placeholder="Email.."
        autocomplete="on"
        class="bg-white outline outline-1 shadow-md text-primary2 text-sm rounded-lg focus:shadow-lg focus:outline-teal-600 block w-full pl-8 p-2.5"
      />
      <input
        type="password"
        id="loginPswd"
        name="password"
        placeholder="Password.."
        autocomplete="on"
        class="bg-white outline outline-1 shadow-md text-primary2 text-sm rounded-lg focus:shadow-lg focus:outline-teal-600 block w-full pl-8 p-2.5"
      />
      <span id="errorMessageLogIn" class="error-message"></span>

      <button
        id="loginBtn"
        type="submit"
        class="flex justify-center items-center bg-teal-600 opacity-80 hover:opacity-100 text-white focus:outline-none focus:ring rounded px-3 py-1"
      >
        <span class="material-symbols-outlined">login</span>
        <p class="ml-1 text-lg">Login</p>
      </button>
    </form>
  </div>
</div>

`;
/**
 * Calls the base modal and populates it with loginContent
 * @param {object} isDirectCall - will tell if the modal should pop up automatically or be launched by button
 */
export function loginModal(isDirectCall = false) {
  if (isDirectCall) {
    showModalContent();
  } else {
    document
      .getElementById('openModalBtn')
      .addEventListener('click', showModalContent);
  }
}

function showModalContent() {
  const modal = createModal();
  modal.openModal();
  modal.setModalContent(loginContent);
  validateLoginData();
}
