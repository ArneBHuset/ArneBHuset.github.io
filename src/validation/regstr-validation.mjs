import { registrationInputData } from '../forms/registration-form.mjs';
import { registerUser } from '../api-calls/register/register.mjs';

/**
 * Checks if form-data from reistrationInputData is valid and calls registerUser for API call
 */
export async function validateRegistrationData() {
  const registerForm = document.getElementById('registrationForm');
  registerForm.addEventListener('submit', async event => {
    event.preventDefault();
    const registrationUserData = await registrationInputData();
    let errorDispaly = document.getElementById('errorMessageEmail');
    errorDispaly.innerHTML = '';
    console.log(registrationUserData);

    if (
      !registrationUserData.name ||
      !registrationUserData.email ||
      !registrationUserData.password
    ) {
      return;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(registrationUserData.name)) {
      errorDispaly.innerHTML = `<h3 class="error-message">Name must not contain any punctuations apart from underscore (_)</h3>`;
      return;
    }

    const emailPattern = /^[\w.-]+@(stud\.noroff\.no|noroff\.no)$/;
    if (!emailPattern.test(registrationUserData.email)) {
      errorDispaly.innerHTML = `<h3 class="error-message">Email must containt .noroff or stud.noroff</h3>`;
      return;
    }

    if (registrationUserData.password.length < 8) {
      errorDispaly.innerHTML = `<h3 class="error-message">Password must be atleast 8 characters long</h3>`;
      return;
    }

    registerUser(registrationUserData);
  });
}
