// register-modal.mjs
import { createModal } from '../modal-base/modals.mjs';
import { validateRegistrationData } from '../../validation/regstr-validation.mjs';

const registrationContent = `
<div class="flex justify-center w-full p-6 sm:p-12 ">
  <div class="flex-col items-center bg-primary1">
    <h3 class="mb-2 font-bold text-3xl text-center font-primary text-primary2">SIGN UP!</h3>
    <form id="registrationForm" class="px-3 flex flex-col items-center gap-3" validate>
      <input
        type="text"
        id="registerUserName"
        name="userName"
        placeholder="User name.."
        autocomplete="on"
        pattern="^[a-zA-Z0-9_]+$"
        title="Name must not contain any punctuations apart from underscore (_)"
        class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
        required
      />
      <span id="errorMessageName" class="error-message"></span>
      <input
        type="email"
        id="registerEmail"
        name="email"
        placeholder="Email address.."
        autocomplete="on"
        pattern="[\w.-]+@(stud\.noroff\.no|noroff\.no)"
        title="Email must contain .noroff or stud.noroff"
        class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
        required
      />
      <span id="errorMessageEmail" class="error-message"></span>
      <input
        type="password"
        id="registerPswd"
        name="password"
        placeholder="Password.."
        autocomplete="on"
        minlength="8"
        title="Password must be at least 8 characters long"
        class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
        required
      />
      <span id="errorMessagePassword" class="error-message"></span>
      <input
        type="url"
        id="registerAvatar"
        name="avatarUrl"
        placeholder="Avatar URL.."
        autocomplete="on"
        class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        id="RegisterBtn"
        class="mt-4 bg-teal-600 opacity-80 hover:opacity-100 text-white focus:outline-none focus:ring rounded px-4 py-2"
      >Register</button>
    </form>
  </div>
</div>
`;

export function registerModal() {
  // Query all buttons with the class and add event listeners to each
  document.querySelectorAll('.registerModalBtn').forEach(button => {
    button.addEventListener('click', () => {
      const modal = createModal();
      modal.openModal();
      modal.setModalContent(registrationContent);
      validateRegistrationData();
    });
  });
}
