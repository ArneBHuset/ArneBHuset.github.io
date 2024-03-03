/**
 * Takes form-data for logging in
 * @returns {ReturnType} - Returns array of login-data for login api call
 */
export async function loginInputData() {
	const userEmail = document.getElementById('loginEmail');
	const userPassWord = document.getElementById('loginPswd');

	const userLoginDetails = {
		email: userEmail.value,
		password: userPassWord.value,
	};
	return userLoginDetails;
}
