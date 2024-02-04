// Kjører når man trykker login
export async function loginInputData() {
  const userEmail = document.getElementById('loginEmail');
  const userPassWord = document.getElementById('loginPswd');

  const userLoginDetails = {
    email: userEmail.value,
    password: userPassWord.value,
  };
  return userLoginDetails;
}
