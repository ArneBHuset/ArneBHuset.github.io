import { bidsMadeData } from '../../../api-calls/profile/profile-bids.mjs';
import { callListings } from '../../../api-calls/listings/listing-api.mjs';
import { fetchProfileData } from '../../../api-calls/profile/profile-data.mjs';
import { newestListings } from '../../jsondata-filter/filter-by-creationdate.mjs';

export async function filteredProfileListings() {
  try {
    // Fetch all necessary data
    const allListings = await newestListings();
    const allListings2 = await callListings();
    const allBidsByProfile = await bidsMadeData();
    const profileData = await fetchProfileData();

    console.log('from filter', allListings, allListings2);
    // Log the raw data to debug
    // console.log('All listings:', allListings);
    // console.log('All bids by profile:', allBidsByProfile);
    // console.log('Profile data:', profileData);

    // Extract listing IDs from profile data
    const userListingIds = profileData.listings.map(listing => listing.id);

    const userBiddingIds = allBidsByProfile.map(bid => bid.correctFieldName); // Update 'correctFieldName' accordingly

    // Log IDs for debugging
    console.log('User listing ids:', userListingIds);
    console.log('User bidding ids:', userBiddingIds);

    // Filter all listings to find those that match the user's listings or bids
    const filteredListings = allListings.filter(
      listing =>
        userListingIds.includes(listing.id) ||
        userBiddingIds.includes(listing.id)
    );

    // Log the filtered listings
    console.log('Filtered listings:', filteredListings);
    return filteredListings;
  } catch (error) {
    console.log('Error with filtering', error);
  }
}
