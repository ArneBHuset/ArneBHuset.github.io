import { createModal } from '../modal-base/modals.mjs';
import { userMakesBid } from '../user-makes-bid.mjs';

export function listingModal(listingData) {
  let sellerInfo = 'Seller information not available';
  // Corrected from 'listing' to 'listingData'
  if (
    listingData.seller &&
    listingData.seller.name &&
    listingData.seller.email &&
    listingData.seller.avatar
  ) {
    sellerInfo = `Seller: ${listingData.seller.name}, Email: ${listingData.seller.email}, Avatar: ${listingData.seller.avatar}`;
  }

  // Handle missing bids information gracefully
  let bidsDetails = 'No bids available';
  if (listingData.bids && listingData.bids.length > 0) {
    bidsDetails = listingData.bids
      .map(
        bid =>
          `Bid ID: ${bid.id}, Amount: ${bid.amount}, Bidder Name: ${bid.bidderName}, Created: ${bid.created}`
      )
      .join('<br>');
  }

  const modalContent = `<div class="listing-modal-size grid grid-rows-auto gap-2 font-primary text-primary2 overflow-auto lg:max-w-2/3 xl:max-w-1/2 mx-auto">
  <div class="listingMedia flex justify-center items-center bg-primary2">
    ${listingData.media.map(url => `<img src="${url}" alt="Listing Image" class="max-w-full p-2 rounded-md">`).join('')}
  </div>
  <h3 class="text-xl font-semibold text-center listingTitle">${listingData.title}</h3>
  <div class="text-md text-center font-secondary listingDescription">${listingData.description}</div>
  <div class="text-sm listingSeller">Seller: ${sellerInfo}</div>
  <div class="text-sm listingEndsAt">Ends At: ${listingData.endsAt}</div>
  <div class="text-sm listingBids">Bid Count: ${listingData._count.bids}</div>
  <div class="text-sm listingBidsDetails">${bidsDetails}</div>
  <div class="text-sm listingTags">Tags: ${listingData.tags.join(', ')}</div>
  <div>
    <div class="text-sm listingCreated">Created: ${listingData.created} ----- Last Updated:${listingData.updated}</div>
    <h3 class="text-sm text-gray-900 listingID">ID: ${listingData.id}</h3>
  </div>
  <div id="inputArea" class="hidden transform translate-x-full transition-transform ease-out duration-10000">
    <input type="number" id="bidInputAmount" class="max-w-1/2 px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500" placeholder="Amount to bid.." autocomplete="off" />
  </div>
  <div class="text-center">
    <button type="button" id="biddingBtn" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Bid Now</button>
  </div>
</div>

`;

  const modal = createModal();
  modal.setModalContent(modalContent);
  modal.openModal();
  userMakesBid();
}
