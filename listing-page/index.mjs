import {
  displayListingCards,
  validatedNewListing,
  newListingDropdown,
  headerDropdown,
  headerLoginStatus,
  currentActiveFilter,
  currentBidsFilter,
  currentSearchInput,
  currentSellerFilter,
  updateFilteredListingCards,
  updateSearchFilterDisplay,
  defaultTimeNewListing,
} from '../src/main.mjs';

//
displayListingCards();

validatedNewListing();

newListingDropdown();

headerDropdown();

headerLoginStatus();

currentActiveFilter();
currentBidsFilter();
currentSearchInput();
currentSellerFilter();
updateFilteredListingCards();
updateSearchFilterDisplay();

defaultTimeNewListing();
