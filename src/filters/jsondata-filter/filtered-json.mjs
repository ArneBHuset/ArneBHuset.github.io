import { newestListings } from './filter-by-creationdate.mjs';
import { filteredProfileListings } from '../api-filter/profile/profile-selected-listings.mjs';

export async function filteredListingData() {
  // THIS SECTION SIMULATES THE UI

  // UI ENDS
  const allApiListingsReturned = await newestListings();

  if (document.body.dataset.page === 'index') {
    const listingsSortedByDate = await newestListings();
    const tenNewestListings = listingsSortedByDate.slice(0, 20);
    // console.log('This is the root index page', tenNewestListings);
    return tenNewestListings;
  }

  if (document.body.dataset.page === 'profile') {
    const listingsSortedForProfile = await filteredProfileListings();
    // console.log('This is the profile page', listingsSortedForProfile);

    return listingsSortedForProfile;
  }

  return allApiListingsReturned;
}
