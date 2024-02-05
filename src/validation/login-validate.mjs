import { loginInputData } from '../forms/login-form.mjs';
import { userLogin } from '../login-out/login.mjs';

/**
 * Checks if form-data from loginInputData is valid and calls function userLogin for API call.
 */
export async function validateLoginData() {
  const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', async () => {
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

    //   here the api call for logging in is called
    userLogin(userLoginData);
  });
}
