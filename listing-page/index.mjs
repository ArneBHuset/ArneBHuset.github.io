import {
  displayListingCards,
  validatedNewListing,
  newListingDropdown,
  headerDropdown,
  headerLoginStatus,
  currentActiveFilter,
  currentSearchInput,
  updateFilteredListingCards,
  updateSearchFilterDisplay,
  defaultTimeNewListing,
  searchForListing,
  eventListener,
} from '../src/main.mjs';

//
displayListingCards();

validatedNewListing();

newListingDropdown();

headerDropdown();

headerLoginStatus();

currentActiveFilter();
currentSearchInput();
updateFilteredListingCards();
updateSearchFilterDisplay();

defaultTimeNewListing();

searchForListing();
eventListener();
