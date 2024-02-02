export async function checkingAccessToken() {
  const localAccessToken = localStorage.getItem('accessToken');
  if (localAccessToken) {
    console.log('Accesstoken has beeen found by cool function');
    return localAccessToken;
  } else {
    console.log('Access token unavailable');
  }
}
