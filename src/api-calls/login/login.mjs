import { loginUrl } from '../../globalValues/urls.mjs';
import { UNvalidatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Runs API call for logging user in. if successfull, accesstoken and username will be set in local storage
 * @param {ParameterType} userLoginData - Takes validated form-data for logging in
 */

export async function userLogin(userLoginData) {
  let errorDisplay = document.getElementById('errorMessageLogIn');
  errorDisplay.innerHTML = '';

  try {
    const loginData = {
      method: 'POST',
      headers: UNvalidatedHeader,
      body: JSON.stringify(userLoginData),
    };
    const response = await fetch(loginUrl, loginData);
    const json = await response.json();
    console.log('Loginfetch response ->', response, json);

    if (response.ok && json.accessToken) {
      localStorage.setItem('accessToken', json.accessToken);
      localStorage.setItem('userName', json.name);
      window.location.reload();
    } else {
      const errorMessage =
        json.errors && json.errors.length > 0
          ? json.errors[0].message
          : 'Login failed';
      errorDisplay.innerHTML = `<h3 class="error-message">${errorMessage}</h3>`;
    }
  } catch (error) {
    errorDisplay.innerHTML = `<h3 class="error-message">Login failed: ${error.message}</h3>`;
  }
}
