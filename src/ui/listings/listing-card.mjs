import { filteredListingData } from '../../filters/jsondata-filter/filtered-json.mjs';
// import { listingModal } from '../ui/modal-bodies/listing-modal.mjs';
/**
 * Dynamically creates and inserts listing card into the DOM with data from callListings, using template literals for HTML structure.
 */
export async function listingCardBuild() {
  try {
    // Fetch the listings data
    const listingsData = await filteredListingData();
    // console.log('This is now the data used to create card', listingsData);
    // Check if listingsData is not an array, wrap it in an array
    const normalizedListingsData = Array.isArray(listingsData)
      ? listingsData
      : [listingsData];

    // Map each listingData item to an HTML string representing a listing card
    const listingCardsHtml = normalizedListingsData
      .map(listing => {
        let sellerInfo = 'Seller information not available';
        if (
          listing.seller &&
          listing.seller.name &&
          listing.seller.email &&
          listing.seller.avatar
        ) {
          sellerInfo = `Seller: ${listing.seller.name}, Email: ${listing.seller.email}, Avatar ${listing.seller.avatar}`;
        }

        return `<div class="bg-gray-100 flex items-center justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="max-w-md font-sans antialiased">
          <button type="button" data-listing-id="${listing.id}" class="listingModalButton group block min-h-full sm:h-80 lg:h-96 relative">
            <span class="absolute inset-0 border-2 border-dashed border-black"></span>
            <div class="relative flex h-full border-2 border-secondary1 bg-white transition-all ease-in-out duration-100 group-hover:scale-110">
              <div class="max-w-xs max-h-full min-w-80 p-1 ">
                <div class="listingMedia h-3/5 w-full">${listing.media.map(url => `<img class="h-full w-full rounded-md" src="${url}" alt="Listing Image" width="100" height="100">`).join('')}</div>
                <span class="listingTitle font-primary text-xl font-semibold">${listing.title}</span><br />
                <span class="listingDescription mt-16 opacity-100 transition-opacity ease-in-out duration-500 group-hover:opacity-0">${listing.description}</span><br />
                <span class="listingBids opacity-100 transition-opacity ease-in-out duration-400 group-hover:opacity-0">Bid Count: ${listing._count.bids}</span><br />
              </div>
              <div class="absolute inset-0 p-4 opacity-0 transition-opacity ease-in-out duration-800 group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 class="mt-4 text-xl font-medium sm:text-2xl"></h3>
                <span class="text-sm sm:text-base">
                  <div class="h-3/5 mb-4"></div>
                  <span class="listingEndsAt">Ends At: ${listing.endsAt}</span><br />
                  <span class="listingSeller">Seller:${sellerInfo}</span><br />
                </span>
                <p class="mt-8 font-bold"></p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    
    `;
      })
      .join('');

    return listingCardsHtml;
    // });
  } catch (error) {
    console.error('Error with getting json data to build listing card', error);
    return '<p>Failed to load listings. Please try again later.</p>';
  }
}
