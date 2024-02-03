import { callListings } from './listing-api.mjs';

export async function listingCardBuild() {
  try {
    const listingData = await callListings();

    document.getElementById('listingID').innerHTML = `ID: ${listingData.id}`;
    document.getElementById('listingTitle').innerHTML =
      `Title: ${listingData.title}`;
    document.getElementById('listingDescription').innerHTML =
      `Description: ${listingData.description}`;
    document.getElementById('listingTags').innerHTML =
      `Tags: ${listingData.tags.join(', ')}`;
    document.getElementById('listingMedia').innerHTML = listingData.media
      .map(
        url =>
          `<img class="border-1 border-black" src="${url}" width="100" height="100">`
      )
      .join('');
    document.getElementById('listingCreated').innerHTML =
      `Created: ${listingData.created}`;
    document.getElementById('listingUpdated').innerHTML =
      `Updated: ${listingData.updated}`;
    document.getElementById('listingEndsAt').innerHTML =
      `Ends At: ${listingData.endsAt}`;
    document.getElementById('listingSeller').innerHTML =
      `Seller: ${listingData.seller.name}, Email: ${listingData.seller.email}`;
    document.getElementById('listingBids').innerHTML =
      `Bid Count: ${listingData._count.bids}`;

    const bidsField = document.getElementById('listingBidsDetails');
    bidsField.innerHTML = '';
    listingData.bids.forEach(bid => {
      bidsField.innerHTML += `Bid ID: ${bid.id}, Amount: ${bid.amount}, Bidder Name: ${bid.bidderName}, Created: ${bid.created}<br>`;
    });

    if (listingData.bids.length === 0) {
      bidsField.innerHTML = 'No bids available';
    }
  } catch (error) {
    console.error('Error with getting json data to build listing card', error);
  }
}
