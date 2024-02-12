import { newestListings } from './filter-by-creationdate.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';

export async function filteredListingData() {
  // THIS SECTION SIMULATES THE UI

  // UI ENDS
  const allApiListingsReturned = await callListings();

  if (document.body.dataset.page === 'index') {
    const listingsSortedByDate = await newestListings();
    const tenNewestListings = listingsSortedByDate.slice(0, 10);
    // console.log('This is the root index page');
    return tenNewestListings;
  }

  return allApiListingsReturned;
}
