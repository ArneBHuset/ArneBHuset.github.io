// import { contrastSwitch } from './ui/high-contrast.mjs';
// contrastSwitch();

import { fetchProfileData } from './api-calls/profile/profile.mjs';

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

import { landingPageListings } from './ui/landing-page/display-listing-carousel.mjs';

landingPageListings();

import { loginModal } from './ui/modal-bodies/login-modal.mjs';

loginModal();

import { registerModal } from './ui/modal-bodies/register-modal.mjs';

// registerModal();

import { displayListingCards } from './ui/listing-page/display-listing.mjs';

displayListingCards();
