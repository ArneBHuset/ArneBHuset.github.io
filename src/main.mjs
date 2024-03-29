// ?

import { validatedNewListing } from './validation/listing-validation.mjs';
import { updateFilteredListingCards } from './filters/api-filter/checkbox-filters.mjs';
// Globals
import { headerLoginStatus } from './ui/header-login-logout.mjs';
import { headerDropdown } from './ui/header-dropdown.mjs';
import { loginModal } from './ui/modal-bodies/login-modal.mjs';
import { registerModal } from './ui/modal-bodies/register-modal.mjs';

export { loginModal, registerModal, headerLoginStatus, headerDropdown };

// Landing page
import { displayFeaturedListing } from './ui/landing-page/featured-listing.mjs';
import { landingPageListings } from './ui/landing-page/display-listing-carousel.mjs';
import { userWelcomeMessage } from './ui/landing-page/welcome-message.mjs';
import { searchAndSubmit } from './ui/landing-page/search-submit.mjs';
export { displayFeaturedListing, landingPageListings, userWelcomeMessage, searchAndSubmit };

// Listing page
import { displayListingCards } from './ui/listing-page/display-listing.mjs';
import { newListingDropdown } from './ui/listing-page/new-listing-dropdown.mjs';
import { currentActiveFilter } from './ui/listing-page/filter-interaction/active-filter.mjs';
import { currentSearchInput } from './ui/listing-page/filter-interaction/search-bar.mjs';
import { defaultTimeNewListing } from './ui/listing-page/default-time.mjs';
import { searchForListing } from './filters/jsondata-filter/search.mjs';
import { eventListener } from './filters/jsondata-filter/search.mjs';
import { checkBoxPosition } from './ui/listing-page/checkbox-position.mjs';
checkForSearchInput;
export {
	displayListingCards,
	newListingDropdown,
	currentActiveFilter,
	currentSearchInput,
	updateFilteredListingCards,
	validatedNewListing,
	defaultTimeNewListing,
	searchForListing,
	eventListener,
	checkBoxPosition,
	checkForSearchInput,
};

// Profile Page
import { displayProfileData } from './ui/profile-page.mjs/display-profile.mjs';
import { displayProfileListing } from './ui/profile-page.mjs/display-profile-listings.mjs';
import { bidsMadeByUser } from './ui/profile-page.mjs/display-bids-made.mjs';
import { loginStatusForProfile } from './ui/profile-page.mjs/login-status.mjs';
import { checkForSearchInput } from './ui/listing-page/check-search-value.mjs';

export { displayProfileData, displayProfileListing, bidsMadeByUser, loginStatusForProfile };
