import { callListings } from '../../api-calls/listings/listing-api.mjs';
import { currentDateSort } from '../../ui/listing-page/filter-interaction/date-sort.mjs';

/**
 * API returns json allready sorted by creation date, this allows for manipulation
 */
export async function newestListings() {
  try {
    const returnedJsonListing = await callListings();
    const isSortByNewest = currentDateSort(); // true for newest first, false for oldest first

    console.log('This is the data before sorting date', returnedJsonListing);
    const sortedListings = returnedJsonListing.sort((a, b) => {
      const dateA = new Date(a.created);
      const dateB = new Date(b.created);
      return isSortByNewest ? dateB - dateA : dateA - dateB; // Sort based on the checkbox
    });
    console.log('Filtered by date', sortedListings);
    return sortedListings;
  } catch (error) {
    console.error('Error finding the newest listings:', error);
    return []; // Return an empty array in case of error
  }
}
