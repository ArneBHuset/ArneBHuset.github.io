import { loginUrl } from '../globalValues/urls.mjs';
import { loginError } from '../error/login-error.mjs';

/**
 * Runs API call for logging user in. if successfull, accesstoken and username will be set in local storage
 * @param {ParameterType} userLoginData - Takes validated form-data for logging in
 */
export async function userLogin(userLoginData) {
  try {
    const loginData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userLoginData),
    };
    const response = await fetch(loginUrl, loginData);
    const json = await response.json();
    console.log('Loginfetch response ->', response, json);

    if (response.ok && json.accessToken) {
      localStorage.setItem('accessToken', json.accessToken);
      localStorage.setItem('userName', json.name);
      //   Forwarding link to be addded
    } else {
      console.log('Your fetch repsonse has failed and accessToken is not set');
    }
  } catch (error) {
    loginError(error);
  }
}
