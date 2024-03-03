import { registerUrl } from '../../globalValues/urls.mjs';
import { UNvalidatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Runs API call for registering a new user. Open login form if successful
 * @param {Object} registrationData - Takes validated form-data for registering new user
 */
export async function registerUser(registrationData) {
  let errorDisplay = document.getElementById('errorMessage');
  errorDisplay.innerHTML = '';
  try {
    const registerPostData = {
      method: 'POST',
      headers: UNvalidatedHeader,
      body: JSON.stringify(registrationData),
    };
    const response = await fetch(registerUrl, registerPostData);
    const json = await response.json();

    if (response.ok) {
      errorDisplay.innerHTML = `<h3 class="text-secondary1">Success!</h3>`;
    } else {
      const errorMessage =
        json.errors && json.errors.length > 0
          ? json.errors[0].message
          : 'Registration failed';
      errorDisplay.innerHTML = `<h3 class="error-message">${errorMessage}</h3>`;
    }
  } catch (error) {
    errorDisplay.innerHTML = `<h3 class="error-message">Registration failed: ${error.message}</h3>`;
  }
}
