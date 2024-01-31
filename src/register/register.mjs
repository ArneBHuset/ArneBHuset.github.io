import { API_BASE_URL } from '../globalValues/base-url.mjs';
import { registrationError } from '../error/registration-error.mjs';
// import form data

// bear in mind, registerUser should never run if the registrationData validation is not accepted!
export async function registerUser(registrationData) {
  const registerUrl = `${API_BASE_URL}/auction/auth/register`;
  try {
    const registerPostData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    };
    const response = await fetch(registerUrl, registerPostData);
    console.log(response);
    const json = await response.json();
    console.log(json);

    if (response.ok) {
      // Open login form
      // Give user feedback about successfull login
    } else {
      console.log('Registration response error', response);
      // Import or??
    }
  } catch (error) {
    registrationError(error);
  }
}
