import { loginInputData } from '../forms/login-form.mjs';
import { userLogin } from '../api-calls/login/login.mjs';

/**
 * Checks if form-data from loginInputData is valid and calls function userLogin for API call.
 */
export async function validateLoginData() {
  const loginForm = document.getElementById('loginForm');
  if (!loginForm) return;

  loginForm.addEventListener('submit', async event => {
    event.preventDefault();

    const userLoginData = await loginInputData();
    let errorDisplay = document.getElementById('errorMessageLogIn');
    errorDisplay.innerHTML = '';

    if (!userLoginData.email || !userLoginData.password) {
      errorDisplay.innerHTML = `<h3 class="error-message">Both email and password are required.</h3>`;
      return;
    }
    const emailPattern = /^[\w.-]+@(stud\.noroff\.no|noroff\.no)$/;
    if (!emailPattern.test(userLoginData.email)) {
      errorDisplay.innerHTML = `<h3 class="error-message">Email must contain .noroff or stud.noroff.</h3>`;
      return;
    }
    userLogin(userLoginData);
  });
}
