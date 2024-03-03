import { callListings } from '../../api-calls/listings/listing-api.mjs';

/**
 * Takes raw json listing data and sorts it based on _count bids
 * @returns {ReturnType} - Returns one single post, with the most amount of bids.
 */
export async function mostPopularListing() {
  try {
    const returnedJsonListing = await callListings();
    if (
      !Array.isArray(returnedJsonListing) ||
      returnedJsonListing.length === 0
    ) {
      return;
    }
    let listingWithMostBids = returnedJsonListing[0];

    returnedJsonListing.forEach(listing => {
      if (
        listing._count &&
        listing._count.bids > listingWithMostBids._count.bids
      ) {
        listingWithMostBids = listing;
      }
    });

    return listingWithMostBids;
  } catch (error) {
    const featuredSpan = document.getElementById('featuredImg');
    featuredSpan.innerHTML = `<img src="/assets/img/missing-pic.png" class="object-cover rounded h-96" />`;
  }
}
