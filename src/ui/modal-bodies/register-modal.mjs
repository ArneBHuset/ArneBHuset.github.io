// register-modal.mjs
import { createModal } from '../modal-base/modals.mjs';
import { validateRegistrationData } from '../../validation/regstr-validation.mjs';

const registrationContent = `
<div class="flex justify-center w-full p-6 sm:p-12 ">
  <div class="flex-col items-center bg-primary1">
    <h3 class="mb-2 font-bold text-3xl text-center font-primary text-primary2">SIGN UP!</h3>
    <form id="registrationForm" class="px-3 flex flex-col items-center gap-3" novalidate>
      <input
        type="text"
        id="registerUserName"
        name="userName"
        placeholder="User name.."
        autocomplete="on"
        class="bg-white outline outline-1 shadow-md text-primary2 text-sm rounded-lg focus:shadow-lg focus:outline-teal-600 block w-full pl-8 p-2.5"
      />
      <input
      type="email"
      id="registerEmail"
      name="email"
      placeholder="Email address.."
      autocomplete="on"
      class="bg-white outline outline-1 shadow-md text-primary2 text-sm rounded-lg focus:shadow-lg focus:outline-teal-600 block w-full pl-8 p-2.5"
    />
    
      <input
        type="password"
        id="registerPswd"
        name="password"
        placeholder="Password.."
        autocomplete="on"
        class="bg-white outline outline-1 shadow-md text-primary2 text-sm rounded-lg focus:shadow-lg focus:outline-teal-600 block w-full pl-8 p-2.5"
      />
     
      <input
        type="url"
        id="registerAvatar"
        name="avatarUrl"
        placeholder="Avatar URL.."
        autocomplete="on"
        class="bg-white outline outline-1 shadow-md text-primary2 text-sm rounded-lg focus:shadow-lg focus:outline-teal-600 block w-full pl-8 p-2.5"
      />
      <span id="errorMessage" class="error-message max-w-1/2"></span>
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
