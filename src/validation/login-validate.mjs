import { loginInputData } from '../forms/login-form.mjs';
import { userLogin } from '../api-calls/login/login.mjs';
import { closeModal } from '../ui/modal-base/close-modal.mjs';

/**
 * Checks if form-data from loginInputData is valid and calls function userLogin for API call.
 */
export async function validateLoginData() {
  console.log('TestingTEsting2');
  let loginForm = document.getElementById('loginForm');

  // Corrected to an arrow function for simplicity, but you could also use `async function(event) {...}`
  loginForm.addEventListener('submit', async event => {
    event.preventDefault();

    // Assuming loginInputData is an async function that returns the login data
    const userLoginData = await loginInputData();
    if (!userLoginData.email || !userLoginData.password) {
      console.log('Email and password cannot be empty.');

      return;
    }

    const emailPattern = /^[\w.-]+@(stud\.noroff\.no|noroff\.no)$/;
    if (!emailPattern.test(userLoginData.email)) {
      const errorDispaly = document.getElementById('errorMessageEmail');
      errorDispaly.innerHTML = `<h3 class="error-message">Email must containt .noroff or stud.noroff</h3>`;
      return;
    }

    // Assuming userLogin is another function that handles the login API call
    try {
      await userLogin(userLoginData);
    } catch (error) {
      console.log('Could not log in');
    }
    window.location.reload();
  });
}
