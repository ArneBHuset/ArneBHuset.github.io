import { loginUrl } from '../globalValues/urls.mjs';
import { loginError } from '../error/login-error.mjs';

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
