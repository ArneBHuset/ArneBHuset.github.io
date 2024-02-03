export async function registrationInputData() {
  const userEmail = document.getElementById('loginEmail');
  const userPassWord = document.getElementById('loginPswd');
  const userName = document.getElementById('userName');
  const userAvatar = document.getElementById('userAvatar');

  const userRegistrationDetails = {
    name: userName.value,
    email: userEmail.value,
    password: userPassWord.value,
    avatar: userAvatar.value,
  };
  return userRegistrationDetails;
}
