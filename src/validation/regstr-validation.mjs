import { registrationInputData } from '../forms/registration-form.mjs';
import { registerUser } from '../register/register.mjs';

export async function validateRegistrationData() {
  const registerBtn = document.getElementById('RegisterBtn');

  registerBtn.addEventListener('click', async () => {
    const registrationUserData = await registrationInputData();
    console.log(registrationUserData);

    if (
      !registrationUserData.name ||
      !registrationUserData.email ||
      !registrationUserData.password
    ) {
      console.log('Registration data missing!');
      return;
    }

    // Validate Name: no punctuation except underscores
    if (!/^[a-zA-Z0-9_]+$/.test(registrationUserData.name)) {
      console.log(
        'Name must not contain punctuation symbols apart from underscore (_).'
      );
      return;
    }

    // Validate Email
    const emailPattern = /^[\w.-]+@(stud\.noroff\.no|noroff\.no)$/;
    if (!emailPattern.test(registrationUserData.email)) {
      console.log('Please use a valid Noroff email address.');
      return;
    }

    // Validate Password Length
    if (registrationUserData.password.length < 8) {
      console.log('Password must be at least 8 characters.');
      return;
    }

    // If all validations pass, attempt to register the user
    registerUser(registrationUserData);
  });
}
