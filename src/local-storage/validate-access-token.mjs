/**
 * Will access local storage and check that accesstoken is present.
 * @returns {ReturnType} - Returns accesstoken to be used for access validation
 */
export async function checkingAccessToken() {
	const localAccessToken = localStorage.getItem('accessToken');
	if (localAccessToken) {
		return localAccessToken;
	} else {
		return null;
	}
}
