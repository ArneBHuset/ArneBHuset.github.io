import { callListings } from '../../api-calls/listings/listing-api.mjs';

/**
 * API returns json allready sorted by creation date, this allows for manipulation
 */
export async function newestListings() {
  try {
    const returnedJsonListing = await callListings();
    console.log('This is the data before sorting date', returnedJsonListing);
    const sortedListings = returnedJsonListing.sort((a, b) => {
      const dateA = new Date(a.created);
      const dateB = new Date(b.created);
      return dateB - dateA;
    });
    console.log('filterd by date', sortedListings);
    return sortedListings;
  } catch (error) {
    console.error('Error finding the newest listings:', error);
    return [];
  }
}
