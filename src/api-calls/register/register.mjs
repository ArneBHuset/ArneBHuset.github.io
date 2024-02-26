import { registerUrl } from '../../globalValues/urls.mjs';
import { registrationError } from '../../error/registration-error.mjs';
import { loginModal } from '../../ui/modal-bodies/login-modal.mjs';
import { UNvalidatedHeader } from '../../globalValues/api-header.mjs';
// import form data

// bear in mind, registerUser should never run if the registrationData validation is not accepted!

/**
 * Runs API call for registering a new user. Open login form if successfull
 * @param {ParameterType} registrationData - Takes validated form-data for registering new user
 */
export async function registerUser(registrationData) {
  try {
    const registerPostData = {
      method: 'POST',
      headers: UNvalidatedHeader,
      body: JSON.stringify(registrationData),
    };
    const response = await fetch(registerUrl, registerPostData);
    console.log(response);
    const json = await response.json();
    console.log(json);

    if (response.ok) {
      loginModal();
    } else {
      console.log('Registration response error', response);
    }
  } catch (error) {}
}
