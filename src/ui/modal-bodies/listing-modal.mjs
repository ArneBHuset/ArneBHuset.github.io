import { createModal } from '../modal-base/modals.mjs';
import { userMakesBid } from '../user-makes-bid.mjs';
import { displayListingMedia } from '../media-display.mjs';

export function listingModal(listingData) {
  let sellerInfo = 'Seller information not available';
  // Corrected from 'listing' to 'listingData'
  if (
    listingData.seller &&
    listingData.seller.name &&
    listingData.seller.email &&
    listingData.seller.avatar
  ) {
    sellerInfo = `
    <h2 class="block w-full mt-1 font-primary text-md font-semibold uppercase ms-3">Sold by</h2>
    <div class="flex items-center p-2">
    <img class="w-20 h-20 rounded-full mr-4" src="${listingData.seller.avatar}" alt="${listingData.seller.name}'s avatar"/>
    <div>
        <div class="font-secondary uppercase ">${listingData.seller.name}</div>
        <div class="font-secondary ">${listingData.seller.email}</div>
    </div>
</div>

    `;
  }

  // Handle missing bids information gracefully
  let bidsDetails = 'No bids available';
  if (listingData.bids && listingData.bids.length > 0) {
    bidsDetails = listingData.bids
      .map(
        bid =>
          `
          <div class="flex flex-col border-b mt-2 font-secondary font-light">
            <span class="">
              Bid: ${bid.id}
            </span>
            <span class="bg-gray-200 p-1 rounded">
            ${bid.bidderName} bidded <span class="font-semibold">${bid.amount} credits</span>
             </span>
             <span>
             Created: ${bid.created}
             </span>
          </div>
          `
      )
      .join('<br>');
  }

  const modalContent = `
  <div class="listing-modal-size grid grid-rows-auto gap-2 font-primary text-primary2 overflow-auto lg:max-w-2/3 xl:max-w-1/2 mx-auto">
    <div class="flex flex-row">
    <div id="listingMedia" class="listingMedia mx-auto bg-primary2 flex flex-col items-center">
    </div>

      <button id="minimizeBtn" class="h-4 p-1">
        <i class="fa-solid fa-minimize"></i>
      </button>
      <div id="minimizeSection" class="min-w-50 sm:min-w-80 mr-1 ">
        <h3 class="block w-full mt-1 font-primary text-lg font-semibold uppercase text-center ">${listingData.title}</h3>
        <div class="block w-full text-center font-secondary ">${listingData.description}</div>
        <div class="text-sm font-secondary text-center">
          <i class="fa-solid fa-hashtag"></i> 
          ${listingData.tags.join(', ')}
        </div>
        <div class="border-y mt-2 py-1">${sellerInfo}</div>
        <div class="bg-secondary2 rounded my-2 text-center p-1 font-primary mr-2">Ends At: ${listingData.endsAt}</div>
        <div class="ps-3">Bid Count: ${listingData._count.bids}</div>
        <section class="ps-3">
          <label>
            <input class="peer/showLabel absolute scale-0" type="checkbox" />
            <span class="block max-h-14 max-w-xs overflow-hidden rounded-lg py-0 transition-all duration-500 peer-checked/showLabel:max-h-full">
              <h3 class="flex h-14 cursor-pointer items-center font-bold uppercase border-b ">See all bids
                <span class="material-symbols-outlined">
                  expand_more
                </span>
              </h3>
              <div class="text-sm listingBidsDetails ">${bidsDetails}</div>
            </span>
          </label>
        </section>
        <div>
          <div class="text-sm listingCreated mt-4">
          Created: ${listingData.created}<br/>
          Last Update:${listingData.updated}
          </div>
          <h3 class="text-sm  listingID">ID: ${listingData.id}</h3>
        </div>
        <div id="inputArea" class="hidden transform translate-x-full transition-transform ease-out duration-10000 mt-2">
          <input type="number" id="bidInputAmount" class="max-w-1/2 px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500" placeholder="Amount to bid.." autocomplete="off" />
        </div>
        <div class="text-center my-2">
          <button type="button" id="biddingBtn" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Bid Now</button>
        </div>
      </div>
    </div>
  </div>
`;

  const modal = createModal();
  modal.setModalContent(modalContent);
  modal.openModal();
  userMakesBid(listingData.id);

  document.getElementById('minimizeBtn').addEventListener('click', function () {
    var section = document.getElementById('minimizeSection');
    section.classList.toggle('hidden');
  });

  displayListingMedia(listingData);
}
