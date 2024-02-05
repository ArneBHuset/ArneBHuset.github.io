// register-modal.mjs
import { createModal } from './modals.mjs';
import { validateRegistrationData } from '../validation/regstr-validation.mjs';

const registrationContent = `
  <h3 class="mb-4 font-bold text-3xl text-blue-500">Sign up!</h3>
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
      class="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 focus:outline-none"
    >Register</button>
  </form>
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
