import { filteredListingData } from '../../filters/jsondata-filter/filtered-json.mjs';
import { defaultMedia } from '../../globalValues/general.mjs';
import { defaultProfilePic } from '../../globalValues/general.mjs';

/**
 * Dynamically creates and inserts listing card into the DOM with data from callListings, using template literals for HTML structure.
 * @param {ParameterType} listingsData - Takes the json listing data from the api call
 * @returns {ReturnType} - Returns populated listing card HTML used on all pages
 */
export async function listingCardBuild(listingsData) {
  try {
    if (!listingsData) {
      listingsData = await filteredListingData();
    }
    console.log(
      'This is the filtered data used to build listingcards',
      listingsData
    );
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
          sellerInfo = `<span class="flex items-center text-primary2 font-secondary mx-auto gap-4 uppercase"><img class="w-8 h-8 object-cover rounded-full" src="${listing.seller.avatar || defaultProfilePic}" alt="${listing.seller.name}'s Avatar"/>${listing.seller.name}</span>`;
        }

        let profileListingInteraction = '';
        if (document.body.dataset.page === 'profile') {
          profileListingInteraction = `
              <div class="flex p-4 justify-end">
              <span class="delete-button focus:outline-none cursor-pointer transition-transform duration-300 hover:scale-110 " tabindex="0" role="button" aria-label="delete" data-listing-id="${listing.id}">
                  <span class="material-symbols-outlined text-black bg-secondary1 hover:text-red-400 rounded-full p-1">
                      delete
                  </span>
              </span>
              <span class="update-button focus:outline-none ml-4 cursor-pointer transition-transform duration-300 hover:scale-110 " tabindex="0" role="button" aria-label="edit" data-listing-id="${listing.id}">
                  <span class="material-symbols-outlined text-black bg-secondary1 hover:animate-spin rounded-full p-1">
                      edit
                  </span>
              </span>
          </div>
          `;
        }
        // console.log(
        //   'This is the filtered data used to build listingcards',
        //   listing.created
        // );
        return `
              <div class="flex items-center justify-center">
          <div class="max-w-md antialiased">
              <button type="button" data-listing-id="${listing.id}" class="listingModalButton group block h-72 sm:h-80 w-72 relative">
                  <div class="relative h-full rounded border-primary2 shadow-md bg-primary1 transition-all ease-in-out duration-100 group-hover:scale-105">
                      <div class="overflow-hidden h-3/5 w-full rounded-t-md">
                          <img class="listingMedia h-full w-full object-cover p-1 rounded-lg" src="${listing.media[0] || defaultMedia}" alt="Listing Image"/>
                      </div>
                      <div class="flex flex-col p-2">
                      <span class="listingTitle block w-full font-primary text-lg text-primary2 uppercase overflow-hidden whitespace-nowrap">${listing.title}</span>
                      <span class="block w-full text-primary2 font-secondary opacity-100 transition-opacity ease-in-out duration-500 group-hover:opacity-0 ${new Date(listing.endsAt) < new Date() ? 'line-through' : ''}">
                          ${
                            new Date(listing.endsAt) > new Date() &&
                            new Date(listing.endsAt) <=
                              new Date(
                                new Date().getTime() + 2 * 24 * 60 * 60 * 1000
                              )
                              ? `<span class="relative mr-2 mb-0.5 h-2 w-2 bg-red-500 rounded-full animate-ping inline-block"></span>`
                              : ''
                          }
                          Ends At: ${new Date(listing.endsAt).toLocaleDateString()} - ${new Date(listing.endsAt).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}
                      </span>
                      
                    
                          <span class="listingBids block w-full mt-2 text-primary2 font-secondary opacity-100 transition-opacity ease-in-out duration-400 group-hover:opacity-0">Bid's: ${listing._count.bids}</span>
                      </div>
                  </div>
                  <div class="absolute inset-0 p-4 opacity-0 transition-opacity ease-in-out duration-800 group-hover:opacity-100 sm:p-6 lg:p-8 scroll-smooth overflow-hidden">
                  <div class="h-2/3"></div>  
                  <div  
                  <h3 class="mt-4 text-xl font-medium sm:text-2xl"></h3>
                  <div class="text-sm sm:text-base">
                      <div class=""></div>
                      <div class="flex w-full items-center text-center gap-4 pt-3 ">
                          ${sellerInfo}
                      </div>
                      <span class="block w-full text-center text-primary2 font-secondary">${listing.description}</span>
                      </div>
                      </div>
                  </div>
              </button>
              ${profileListingInteraction}
          </div>
      </div>

    `;
      })
      .join('');

    return listingCardsHtml;
  } catch (error) {
    console.error('Error with getting json data to build listing card', error);
    return '<p>Failed to load listings. Please try again later.</p>';
  }
}
