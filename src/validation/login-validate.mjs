import { loginInputData } from '../forms/login-form.mjs';
import { userLogin } from '../api-calls/login/login.mjs';

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
      console.log('Please use a valid Noroff email address.');
      return;
    }

    // Assuming userLogin is another function that handles the login API call
    userLogin(userLoginData);
  });
}
