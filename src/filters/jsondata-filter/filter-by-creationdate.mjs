import { callListings } from '../../api-calls/listings/listing-api.mjs';
import { currentDateSort } from '../../ui/listing-page/filter-interaction/date-sort.mjs';

/**
 * Takes raw json listing data and sorts it based on creation date
 * @returns {ReturnType} - Returns new json listing data, sorted eiter new-old or old-new
 */
export async function newestListings() {
  try {
    const returnedJsonListing = await callListings();
    const isSortByNewest = currentDateSort();
    const sortedListings = returnedJsonListing.sort((a, b) => {
      const dateA = new Date(a.created);
      const dateB = new Date(b.created);
      return isSortByNewest ? dateB - dateA : dateA - dateB;
    });
    return sortedListings;
  } catch (error) {
    return [];
  }
}
