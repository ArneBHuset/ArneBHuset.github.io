import { callListings } from '../../api-calls/listings/listing-api.mjs';

export async function mostPopularListing() {
  try {
    const returnedJsonListing = await callListings();

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
    console.error('Error finding the listing with the most bids:', error);
  }
}
