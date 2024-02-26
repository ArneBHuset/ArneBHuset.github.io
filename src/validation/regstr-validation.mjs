import { registrationInputData } from '../forms/registration-form.mjs';
import { registerUser } from '../api-calls/register/register.mjs';

/**
 * Checks if form-data from registrationInputData is valid and calls registerUser for API call
 */
export async function validateRegistrationData() {
  const registerForm = document.getElementById('registrationForm');
  if (!registerForm) return;

  registerForm.addEventListener('submit', async event => {
    event.preventDefault();
    const registrationUserData = await registrationInputData();
    let errorDisplay = document.getElementById('errorMessage');
    errorDisplay.innerHTML = '';

    if (
      !registrationUserData.name ||
      !registrationUserData.email ||
      !registrationUserData.password
    ) {
      errorDisplay.innerHTML = `<h3 class="error-message">Please fill in all required fields.</h3>`;
      return;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(registrationUserData.name)) {
      errorDisplay.innerHTML = `<h3 class="error-message">Name must not contain any punctuations apart from underscore (_).</h3>`;
      return;
    }

    const emailPattern = /^[\w.-]+@(stud\.noroff\.no|noroff\.no)$/;
    if (!emailPattern.test(registrationUserData.email)) {
      errorDisplay.innerHTML = `<h3 class="error-message">Email must contain .noroff or stud.noroff.</h3>`;
      return;
    }
    if (registrationUserData.password.length < 8) {
      errorDisplay.innerHTML = `<h3 class="error-message">Password must be at least 8 characters long.</h3>`;
      return;
    }

    registerUser(registrationUserData);
  });
}
