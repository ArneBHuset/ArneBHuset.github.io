import { filteredListingData } from '../../filters/jsondata-filter/filtered-json.mjs';
import { defaultMedia } from '../../globalValues/general.mjs';
import { defaultProfilePic } from '../../globalValues/general.mjs';

/**
 * Dynamically creates and inserts listing card into the DOM with data from callListings, using template literals for HTML structure.
 */
export async function listingCardBuild(listingsData) {
  try {
    if (!listingsData) {
      listingsData = await filteredListingData();
    }
    const normalizedListingsData = Array.isArray(listingsData)
      ? listingsData
      : [listingsData];

    const listingCardsHtml = normalizedListingsData
      .map(listing => {
        let sellerInfo = '';
        if (
          listing.seller &&
          listing.seller.name &&
          listing.seller.email &&
          listing.seller.avatar
        ) {
          sellerInfo = `<img class="w-10 h-10 object-cover rounded-full" src="${listing.seller.avatar || defaultProfilePic}" alt="${listing.seller.name}'s Avatar"/>`;
        }

        let profileListingInteraction = '';
        if (document.body.dataset.page === 'profile') {
          profileListingInteraction = `
            <div class="flex p-4 justify-end">
              <span class="delete-button focus:outline-none cursor-pointer" tabindex="0" role="button" aria-label="delete" data-listing-id="${listing.id}">
                  <span class="material-symbols-outlined text-black bg-secondary1 rounded-full p-1 hover:outline-black">
                      delete
                  </span>
              </span>
              <span class="update-button focus:outline-none ml-4 cursor-pointer" tabindex="0" role="button" aria-label="edit" data-listing-id="${listing.id}">
                  <span class="material-symbols-outlined text-black bg-secondary1 rounded-full p-1 hover:shadow-md">
                      edit
                  </span>
              </span>
            </div>`;
        }

        return `
          <div class="flex items-center justify-center">
            <div class="max-w-md antialiased">
              <button type="button" data-listing-id="${listing.id}" class="listingModalButton group  block h-72 sm:h-80  w-72  relative">
                <div class="relative flex h-full rounded border-primary2 shadow-md shadow-primary2  bg-primary1 transition-all ease-in-out duration-100 group-hover:scale-105">
                  <div class="min-w-fit p-1 max-h-fit mx-auto">
                    <div class="h-3/5 w-full">
                      <img class="listingMedia h-full w-full rounded-md" src="${listing.media[0] || defaultMedia}" alt="Listing Image"/>
                    </div>
                    <div class="flex flex-col">
                      <span class="listingTitle block w-full mt-1 font-primary text-lg font-semibold uppercase">${listing.title}</span>
                      <span class="listingDescription block w-full font-secondary opacity-100 transition-opacity ease-in-out duration-500 group-hover:opacity-0">
                        Ends At: ${new Date(listing.endsAt).toLocaleDateString()} - ${new Date(listing.endsAt).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}
                      </span>
                  
                      <span class="listingBids block w-full mt-2 font-secondary opacity-100 transition-opacity ease-in-out duration-400 group-hover:opacity-0">Bid's: ${listing._count.bids}</span>
                    </div>
                  </div>
                </div>
                <div class="absolute inset-0 p-4 opacity-0 transition-opacity ease-in-out duration-800 group-hover:opacity-100 sm:p-6 lg:p-8 scroll-smooth overflow-hidden">
                  <h3 class="mt-4 text-xl font-medium sm:text-2xl"></h3>
                  <span class="text-sm sm:text-base pb-6">
                    <div class="h-3/5 mb-4"></div>
                    <span class="flex w-full items-center text-center gap-4 pt-4">${sellerInfo}<span class="font-semibold font-primary text-center"> Description:</span></span><br>
                    <span class="block w-full text-center font-secondary">${listing.description}</span>
                  </span>
                </div>
              </button>
             ${profileListingInteraction}
            </div>
          </div>`;
      })
      .join('');

    return listingCardsHtml;
  } catch (error) {
    console.error('Error with getting json data to build listing card', error);
    return '<p>Failed to load listings. Please try again later.</p>';
  }
}
