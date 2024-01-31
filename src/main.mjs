import { userLogin } from './login-out/login.mjs';

userLogin({
  //   email: 'first.last@stud.noroff.no',
  //   password: 'UzI1NiIsInR5cCI',
});

import { contrastSwitch } from './ui/high-contrast.mjs';
contrastSwitch();

import { registerUser } from './register/register.mjs';

registerUser({
  name: 'my_username', // Required
  email: 'first.last@stud.noroff.no', // Required
  password: 'UzI1NiIsInR5cCI', // Required
  avatar: 'https://img.service.com/avatar.jpg', // Optional
});

import { displayListings } from './listings/listings.mjs';

displayListings();
