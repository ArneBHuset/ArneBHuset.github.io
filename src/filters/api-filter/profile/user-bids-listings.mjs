import { bidsMadeData } from '../../../api-calls/profile/profile-bids.mjs';
import { callAllListings } from '../../../api-calls/listings/all-listings.mjs';

export async function filterListingsByUserBids() {
  try {
    const allBidsByProfile = await bidsMadeData(); // Assuming this returns an array of bids
    const allListings = await callAllListings(); // Assuming this returns an array of listings
    console.log('This is the current profile-bids api data', allBidsByProfile);

    // // Extract the IDs of all bids made by the profile
    // const bidIds = allBidsByProfile.map(bid => bid.id);

    // // Filter listings to include only those that have a matching bid ID
    // const filteredListings = allListings.filter(
    //   listing =>
    //     Array.isArray(listing.bids) &&
    //     listing.bids.some(bid => bidIds.includes(bid.id))
    // );

    // console.log('Filtered Listings:', filteredListings);
    // return filteredListings;
  } catch (error) {
    console.log('Error with filtering', error);
  }
}
