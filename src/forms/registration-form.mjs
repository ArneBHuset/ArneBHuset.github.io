/**
 * Takes form-data for registration of new user
 * @returns {ReturnType} - Returns array of registration data for registration api-call
 */
export async function registrationInputData() {
	const userEmail = document.getElementById('registerEmail');
	const userPassWord = document.getElementById('registerPswd');
	const userName = document.getElementById('registerUserName');
	const userAvatar = document.getElementById('registerAvatar');

	const userRegistrationDetails = {
		name: userName.value,
		email: userEmail.value,
		password: userPassWord.value,
		avatar: userAvatar.value,
	};
	return userRegistrationDetails;
}
