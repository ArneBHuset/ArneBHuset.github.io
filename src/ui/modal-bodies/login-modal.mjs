// login-modal.mjs
import { createModal } from '../modal-base/modals.mjs';
import { validateLoginData } from '../../validation/login-validate.mjs';

const loginContent = `
<div class="flex justify-center w-full p-4 ">
<div
  class=" flex-col items-center bg-primary1 "
>
  <h3 class="mb-4 font-bold text-3xl text-center font-primary text-secondary1">
    LOG IN
  </h3>
  <form
    action="#"
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
    />
    <button
      id="loginBtn"
      tyoe="button"
      class="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring rounded px-3 py-1"
    >
      <svg
        class="w-5 h-5 inline"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        ></path>
      </svg>
      <p class="ml-1 text-lg">Login</p>
    </button>
  </form>
  <p class="text-gray-700 text-sm mt-2 text-center">
    don't have an account?
    <a
      href="#"
      class="text-green-500 hover:text-green-600 mt-3 focus:outline-none font-bold underline"
    >
      register
    </a>
  </p>
</div>
</div>
`;

export function loginModal() {
  document.getElementById('openModalBtn').addEventListener('click', () => {
    console.log('TestingTEsting');
    const modal = createModal(); // Prepare the modal without initial content
    modal.openModal(); // Display the modal
    modal.setModalContent(loginContent); // Now set the content
    validateLoginData();
  });
}
