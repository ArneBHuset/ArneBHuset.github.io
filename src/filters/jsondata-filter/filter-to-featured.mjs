import { callListings } from '../../api-calls/listings/listing-api.mjs';

/**
 * Takes all listing data and filters the listing with the highest bids
 */
export async function mostPopularListing() {
  try {
    const returnedJsonListing = await callListings();
    console.log('Featured data', returnedJsonListing);
    if (
      !Array.isArray(returnedJsonListing) ||
      returnedJsonListing.length === 0
    ) {
      console.log('No listings found');
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
