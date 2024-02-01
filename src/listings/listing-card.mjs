import { callListings } from './listing-api.mjs';

export async function listingCardBuild() {
  try {
    const listingData = await callListings();

    document.getElementById('listingID').innerHTML = listingData.id;
    document.getElementById('listingTitle').innerHTML = listingData.title;
    document.getElementById('listingDescription').innerHTML =
      listingData.description;
    document.getElementById('listingTags').innerHTML = listingData.tags;
    document.getElementById('listingMedia').innerHTML = listingData.media;
    document.getElementById('listingCrated').innerHTML = listingData.created;
    document.getElementById('listingUpdated').innerHTML = listingData.updated;
    document.getElementById('listingEndsAt').innerHTML = listingData.endsAt;
    document.getElementById('listingBids').innerHTML = listingData._count.bids;
  } catch (error) {
    console.log('Error with getting json data to build listing card', error);
  }
}
