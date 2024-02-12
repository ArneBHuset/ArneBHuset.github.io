import { callListings } from '../../api-calls/listings/listing-api.mjs';

export async function newestListings() {
  try {
    const returnedJsonListing = await callListings();
    // Assuming returnedJsonListing is an array of listings

    // Sort listings by "created" date in descending order
    const sortedListings = returnedJsonListing.sort((a, b) => {
      // Convert "created" to Date objects for comparison
      const dateA = new Date(a.created);
      const dateB = new Date(b.created);
      return dateB - dateA; // Sort in descending order
    });

    return sortedListings;
  } catch (error) {
    console.error('Error finding the newest listings:', error);
    return []; // Return an empty array in case of error
  }
}
