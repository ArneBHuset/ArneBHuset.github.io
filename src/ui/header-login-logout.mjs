import { checkingAccessToken } from '../local-storage/validate-access-token.mjs';
import { logOutUser } from '../local-storage/logout.mjs';
import { loginModal, registerModal } from '../main.mjs';

export async function headerLoginStatus() {
  const headerSection = document.getElementById('loggedInOrOut');
  const accessToken = await checkingAccessToken();
  if (accessToken) {
    headerSection.innerHTML = `
    <div class="flex items-center gap-4">
    <div class="sm:flex sm:gap-4">
      <button
        id="logOutButton"
        class="block rounded-md bg-secondary2 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
      >
        Log out
      </button>
    </div>
        `;
    logOutUser();
  } else {
    headerSection.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <button
                id="openModalBtn"
                class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
              >
                Log in
              </button>

              <button
                id="openRegisterModalBtn"
                class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
              >
                Register
              </button>
            </div>
        `;
    loginModal();
    registerModal();
  }
}
