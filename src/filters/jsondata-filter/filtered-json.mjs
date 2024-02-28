import { newestListings } from './filter-by-creationdate.mjs';
import { callUserListings } from '../../api-calls/profile/profile-listings.mjs';
export async function filteredListingData() {
  // THIS SECTION SIMULATES THE UI

  // UI ENDS

  if (document.body.dataset.page === 'index') {
    const listingsSortedByDate = await newestListings();
    const tenNewestListings = listingsSortedByDate.slice(0, 20);
    // console.log('This is the root index page', tenNewestListings);
    return tenNewestListings;
  }

  if (document.body.dataset.page === 'profile') {
    const listingsSortedForProfile = await callUserListings();
    // console.log('This is the profile page', listingsSortedForProfile);

    return listingsSortedForProfile;
  }

  if (document.body.dataset.page === 'listings') {
    const listingsSortedForListingPage = await newestListings();

    return listingsSortedForListingPage;
  }
}
