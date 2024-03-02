import { createModal } from '../modal-base/modals.mjs';
import { userMakesBid } from '../user-makes-bid.mjs';
import { displayListingMedia } from './media-display.mjs';
import { checkingAccessToken } from '../../local-storage/validate-access-token.mjs';

export async function listingModal(listingData) {
  const accessToken = await checkingAccessToken();

  let sellerInfo = accessToken
    ? `
    <div class="flex items-center">
      <img class="w-20 h-20 rounded-full mr-2 font-thin" src="/assets/img/missing-pic-profile.png" alt="No seller avatar available"/>
      <div>
          <h2>Seller information not available</h2>
      </div>
    </div>`
    : '';

  if (
    accessToken &&
    listingData.seller &&
    listingData.seller.name &&
    listingData.seller.email &&
    listingData.seller.avatar
  ) {
    sellerInfo = `
    <div class="flex items-center ">
      <img class="w-24 h-24 rounded-full mr-4" src="${listingData.seller.avatar}" alt="${listingData.seller.name}'s avatar"/>
      <div>
          <div class="font-secondary uppercase ">${listingData.seller.name}</div>
          <div class="font-secondary ">${listingData.seller.email}</div>
      </div>
    </div>`;
  }

  let bidsDetails = accessToken
    ? `<div class="flex gap-2"><span class="text-teal-600 pb-1 material-symbols-outlined">
  payments
  </span> No bids available... yet 
  </div>`
    : `<div class="flex gap-2"><span class="text-teal-600 pb-1 material-symbols-outlined">
  lock
  </span> Please log in to see bids made 
  </div>`;

  if (accessToken && listingData.bids && listingData.bids.length > 0) {
    bidsDetails = listingData.bids
      .map(
        bid =>
          `
          <div class="flex flex-col border-b mt-2 font-secondary font-light">
            <span class="">
              Bid: ${bid.id}
            </span>
            <span class="bg-gray-200 p-1 rounded flex gap-2"><span class="text-teal-600  material-symbols-outlined">
            payments
            </span>
            ${bid.bidderName} bidded <span class="font-semibold">${bid.amount} credits</span>
             </span>
             <span>
             Created: ${new Date(bid.created).toLocaleDateString()} - ${new Date(bid.created).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}
             </span>
          </div>
          `
      )
      .join('<br>');
  }

  let biddingSection = accessToken
    ? `
  <div class="flex my-4 gap-4">
    <div id="inputArea" class="hidden transform translate-x-full transition-transform ease-out duration-500 b-2">
      <input type="number" id="bidInputAmount" class="max-w-1/2 px-4 py-2 bg-white outline outline-1 shadow-md text-primary2 text-sm rounded-lg focus:shadow-lg focus:outline-teal-600 block w-full pl-8 p-2.5" placeholder="Amount to bid.." autocomplete="off" />
    </div>
    <div class="text-center">
      <button type="button" id="biddingBtn" class="font-primary text-sm border rounded-md border-teal-600 px-4 py-2 font-medium text-primary2 hover:text-white transition hover:bg-teal-600 hover:shadow-lg">Bid</button>
    </div>
  </div>`
    : '';

  const modalContent = `
  <div class="listing-modal-size grid grid-rows-auto gap-2 font-primary text-primary2 overflow-auto lg:max-w-2/3 xl:max-w-1/2 mx-auto">
    <div class="flex flex-row">
      <div id="listingMedia" class="listingMedia mx-auto bg-primary2 flex flex-col items-center"></div>
      <button id="minimizeBtn" class="bg-primary2 flex justify-start pt-2 px-2 ms-[-5px] sm:ms-[0px] ">
        <span class="material-symbols-outlined text-white"></span>
      </button>
      <div id="minimizeSection" class="min-w-50 sm:min-w-80 mx-6 my-4 ">
        <h3 class="block w-full my-1 font-primary text-xl uppercase ">${listingData.title}</h3>
        <div class="block w-11/12 my-2 font-light font-secondary ">${listingData.description}</div>
        <div class="text-sm font-secondary my-4">
          ${
            listingData.tags && listingData.tags.length > 0
              ? `<div class="flex gap-1 text-sm font-secondary">
                  <i class="fa-solid fa-hashtag text-teal-600 text-lg "></i> 
                  ${listingData.tags.join(', ')}
               </div>`
              : ''
          }
        </div>
        <div class="flex items-center gap-2 mt-4 font-primary ">
          <span class="material-symbols-outlined text-secondary2 text-xl m-[-5px]">
            hourglass_top
          </span>
          Ends At: ${new Date(listingData.endsAt).toLocaleDateString()} - ${new Date(listingData.endsAt).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}
        </div>
        <div class="my-4 pb-2 border-b">Bid Count: ${listingData._count.bids}</div>
        <section class="border-b pb-2">
          <label>
            <input class="peer/showLabel absolute scale-0" type="checkbox" />
            <span class="block max-h-8 max-w-xs overflow-hidden rounded-lg py-0 transition-all duration-500 peer-checked/showLabel:max-h-full">
              <h3 class="flex h-8  cursor-pointer items-center text-md uppercase ">See all bids
                <span class="material-symbols-outlined">
                  expand_more
                </span>
              </h3>
              <div class="text-sm listingBidsDetails ">${bidsDetails}</div>
            </span>
          </label>
        </section>

          <div class=" mt-2 py-1">${sellerInfo}</div>
          <div class="my-4">
          ${biddingSection}
            <div>
          <div class="text-sm font-thin listingCreated mt-4">
          <span id="biddingError" class="block w-full error-message"></span>
          Created: ${new Date(listingData.created).toLocaleDateString()} - ${new Date(listingData.created).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}<br/>
          Last Update: ${new Date(listingData.updated).toLocaleDateString()} - ${new Date(listingData.updated).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}
          </div>
          <h3 class="text-sm font-thin listingID">ID: ${listingData.id}</h3>
        </div>
       
        </div>
      </div>
    </div>
  </div>
`;

  const modal = createModal();
  modal.setModalContent(modalContent);
  modal.openModal();
  userMakesBid(listingData.id);

  const minimizeBtn = document.getElementById('minimizeBtn');
  const iconSpan = minimizeBtn.querySelector('.material-symbols-outlined');
  iconSpan.innerHTML = 'arrow_forward_ios'; // Ensure the forward icon is set initially

  minimizeBtn.addEventListener('click', function () {
    if (iconSpan.innerHTML === 'arrow_forward_ios') {
      iconSpan.innerHTML = 'arrow_back_ios';
    } else {
      iconSpan.innerHTML = 'arrow_forward_ios';
    }
    var section = document.getElementById('minimizeSection');
    section.classList.toggle('hidden');
  });
  displayListingMedia(listingData);
}
