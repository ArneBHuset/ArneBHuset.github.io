// register-modal.mjs
import { createModal } from '../modal-base/modals.mjs';
import { validateRegistrationData } from '../../validation/regstr-validation.mjs';

const registrationContent = `
<div class="flex justify-center w-full p-6 sm:p-12 ">
  <div class=" flex-col items-center bg-primary1 ">
  <h3 class="mb-2 font-bold text-3xl text-center font-primary text-primary2">
    SIGN UP!
  </h3>
    <form id="registrationForm" class="px-3 flex flex-col items-center gap-3">
      <input
        type="text"
        id="registerUserName"
        placeholder="User name.."
        autocomplete="on"
        class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <input
        type="email"
        id="registerEmail"
        placeholder="Email address.."
        autocomplete="on"
        class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <input
        type="password"
        id="registerPswd"
        placeholder="Password.."
        autocomplete="on"
        class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <input
        type="url"
        id="registerAvatar"
        placeholder="Avatar URL.."
        autocomplete="on"
        class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <button
        type="button"
        id="RegisterBtn"
        class="flex justify-center items-center bg-teal-600 opacity-80 hover:opacity-100 text-white focus:outline-none focus:ring rounded px-3 py-1"
      >Register</button>
    </form>
  </div>
</div>
`;

export function registerModal() {
  document
    .getElementById('openRegisterModalBtn')
    .addEventListener('click', () => {
      const modal = createModal();
      modal.openModal();
      modal.setModalContent(registrationContent);
      validateRegistrationData();
    });
}
