// Import necessary functions from other .mjs files
import { bidsMadeData } from '../../../api-calls/profile/profile-bids.mjs';
import { callListings } from '../../../api-calls/listings/listing-api.mjs';
import { fetchProfileData } from '../../../api-calls/profile/profile-data.mjs';
import { callAllListings } from '../../../api-calls/listings/all-listings.mjs';

export async function filteredProfileListings() {
  try {
    // Fetch all necessary data
    // const allListings = await callListings();
    // const allBidsByProfile = await bidsMadeData();
    const profileData = await fetchProfileData();

    // // Console logs for debugging
    // console.log('All listings:', allListings);
    // console.log('All bids by profile:', allBidsByProfile);
    // console.log('Profile data:', profileData);

    // // Extract listing IDs from profile data
    // const userListingIds = profileData.listings.map(listing => listing.id);
    // console.log('User listing IDs:', userListingIds);

    // // Assuming each bid contains a 'listingId' that references the ID of the listing
    // // Extract these listing IDs from all bids made by the profile
    // // Ensure the field used here matches your actual data structure
    // const userBiddingListingIds = allBidsByProfile.map(bid => bid.listingId); // Corrected to use listingId or the correct field from your bids
    // console.log('User bidding on listing IDs:', userBiddingListingIds);

    // // Filter all listings to find those that match the user's listings or the listings the user has bid on
    // const filteredListings = allListings.filter(
    //   listing =>
    //     userListingIds.includes(listing.id) ||
    //     userBiddingListingIds.includes(listing.id)
    // );
    // console.log('Filtered listings:', filteredListings);
  } catch (error) {
    console.error('Error with filtering', error);
    throw error; // Propagate the error for further handling
  }
}
