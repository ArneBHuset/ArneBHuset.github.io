import { checkingAccessToken } from '../local-storage/validate-access-token.mjs';
import { logOutUser } from '../local-storage/logout.mjs';
import { loginModal, registerModal } from '../main.mjs';
/**
 * Displays login/register/logout buttons depending on accessToken status and dynamically updates the UI
 */
export async function headerLoginStatus() {
  const headerSection = document.getElementById('loggedInOrOut');
  const accessToken = await checkingAccessToken();
  if (accessToken) {
    headerSection.innerHTML = `
    <div class="flex items-center gap-4">
    <div class="sm:flex sm:gap-4">
      <button
        id="logOutButton"
        class="block rounded-md bg-secondary2 opacity-80 px-5 py-2.5 text-sm font-primary text-black transition hover:opacity-100 hover:shadow-lg"
      >
        Log out
      </button>
    </div>
        `;
    logOutUser();

    const registerModalBtn = document.getElementById('heroNewHereBtn');
    if (registerModalBtn) {
      registerModalBtn.classList.add('hidden');
    }
  } else {
    headerSection.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <button
                id="openModalBtn"
                class="block font-primary text-sm rounded-md border border-teal-600  px-4 py-2  font-medium text-primary2 transition hover:text-white hover:bg-teal-600 hover:shadow-lg"
              >
                Log in
              </button>
              <button
                class=" registerModalBtn mt-4 sm:mt-0 block font-primary text-sm border rounded-md border-teal-600  px-4 py-2  font-medium text-primary2 hover:text-white transition hover:bg-teal-600 hover:shadow-lg"
              >
                Sign up
              </button>
            </div>
        `;
    loginModal();
    registerModal();
  }
}
