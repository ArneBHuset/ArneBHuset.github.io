import { newestListings } from './filter-by-creationdate.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';
import { filteredProfileListings } from '../api-filter/profile/profile-selected-listings.mjs';

export async function filteredListingData() {
  // THIS SECTION SIMULATES THE UI

  // UI ENDS
  const allApiListingsReturned = await callListings();

  if (document.body.dataset.page === 'index') {
    const listingsSortedByDate = await newestListings();
    const tenNewestListings = listingsSortedByDate.slice(0, 10);
    console.log('This is the root index page', listingsSortedByDate);
    return tenNewestListings;
  }

  if (document.body.dataset.page === 'profile') {
    const listingsSortedForProfile = await filteredProfileListings();
    console.log('This is the root index page', listingsSortedForProfile);

    return listingsSortedForProfile;
  }

  return allApiListingsReturned;
}
