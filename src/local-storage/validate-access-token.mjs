/**
 * Will access local storage and check that accesstoken is present.
 * @returns {ReturnType} - Returns accesstoken to be used for access validation
 */
export async function checkingAccessToken() {
  const localAccessToken = localStorage.getItem('accessToken');
  if (localAccessToken) {
    console.log('Access-token available');
    return localAccessToken;
  } else {
    console.log('Access-token unavailable');
    return null;
  }
}
