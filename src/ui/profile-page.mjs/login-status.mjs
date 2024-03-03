import { checkingAccessToken } from '../../local-storage/validate-access-token.mjs';
import { loginModal } from '../modal-bodies/login-modal.mjs';

/**
 * Hides <main> body if user is logged out, and initz login modal
 */
export async function loginStatusForProfile() {
	const status = await checkingAccessToken();
	const mainContent = document.querySelector('main');
	const loginMessage = document.getElementById('loginMessage');

	if (!status) {
		loginModal(true);
		if (mainContent) mainContent.classList.add('hidden');
		if (loginMessage) loginMessage.classList.remove('hidden');
	} else {
		if (mainContent) mainContent.classList.remove('hidden');
		if (loginMessage) loginMessage.classList.add('hidden');
	}
}
