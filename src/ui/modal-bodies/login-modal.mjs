// login-modal.mjs
import { createModal } from '../modal-base/modals.mjs';
import { validateLoginData } from '../../validation/login-validate.mjs';

const loginContent = `
<div class="flex justify-center w-full p-6 sm:p-12 ">
<div class=" flex-col items-center bg-primary1 ">
  <h3 class="mb-2 font-bold text-3xl text-center font-primary text-primary2">
    LOG IN
  </h3>
  <form
    action="#"
    id="loginForm"
    class=" flex flex-col justify-center items-center gap-4 py-4"
  >
    <input
      type="email"
      id="loginEmail"
      placeholder="email.."
      autocomplete="on"
      class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
      
    />
    <input
      type="password"
      id="loginPswd"
      placeholder="password.."
      autocomplete="on"
      class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
      required
    />
    <button
      id="loginBtn"
      tyoe="button"
      class="flex justify-center items-center bg-teal-600 opacity-80 hover:opacity-100 text-white focus:outline-none focus:ring rounded px-3 py-1"
    >
    <span class="material-symbols-outlined">
    login
    </span>
      <p class="ml-1 text-lg">Login</p>
    </button>
  </form>
  <p class="text-gray-700 text-sm mt-2 text-center">
    don't have an account?
    <a
      href="#"
      class="text-teal-500 hover:text-teal-600 mt-3 focus:outline-none font-bold underline"
    >
      register
    </a>
  </p>
</div>
</div>
`;

export function loginModal() {
  document.getElementById('openModalBtn').addEventListener('click', () => {
    const modal = createModal(); // Prepare the modal without initial content
    modal.openModal(); // Display the modal
    modal.setModalContent(loginContent); // Now set the content
    validateLoginData();
  });
}
