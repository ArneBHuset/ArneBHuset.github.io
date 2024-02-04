// import { userLogin } from './login-out/login.mjs';

// userLogin({
//   email: 'first.last@stud.noroff.no',
//   password: 'UzI1NiIsInR5cCI',
// });

// import { contrastSwitch } from './ui/high-contrast.mjs';
// contrastSwitch();

// import { registerUser } from './register/register.mjs';

// registerUser({
//   name: 'my_username', // Required
//   email: 'first.last@stud.noroff.no', // Required
//   password: 'UzI1NiIsInR5cCI', // Required
//   avatar: 'https://img.service.com/avatar.jpg', // Optional
// });

// import { callListings } from './listings/listing-api.mjs';

// callListings();

// import { listingCardBuild } from './listings/listing-card.mjs';

// listingCardBuild();

// import { fetchProfileData } from './profile/profile.mjs';

// fetchProfileData();

// import { createNewListing } from './listings/create-listing.mjs';

// createNewListing({
//   title: 'string', // Required
//   description: 'string', // Optional
//   tags: ['string'], // Optional
//   media: [
//     'https://images.unsplash.com/photo-1683009427660-b38dea9e8488?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   ], // Optional
//   endsAt: '2025-01-01T00:00:00.000Z', // Required - Instance of new Date()
// });

// import { updateListing } from './listings/update-listing.mjs';

// updateListing({
//   title: 'gfdg', // Required
//   description: 'fgdgd', // Optional
//   tags: ['string'], // Optional
//   media: [
//     'https://images.unsplash.com/photo-1683009427660-b38dea9e8488?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   ], // Optional
// });

// import { deleteListing } from './listings/delete-listing.mjs';

// deleteListing();

// import { bidOnListing } from './listings/bidon-listing.mjs';

// bidOnListing(10);

import { validateLoginData } from './validation/login-validate.mjs';

validateLoginData();

import { validateRegistrationData } from './validation/regstr-validation.mjs';

validateRegistrationData();

import { logInModal } from './ui/login-modal.mjs';

logInModal();
