import { callListings } from './listing-api.mjs';
// import { listingModal } from '../ui/modal-bodies/listing-modal.mjs';
/**
 * Dynamically creates and inserts listing card into the DOM with data from callListings, using template literals for HTML structure.
 */
export async function listingCardBuild() {
  try {
    const listingData = await callListings();
    // Construct HTML content with template literals
    const htmlContent = `
      <div class="bg-gray-100 flex items-center justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="max-w-md font-sans antialiased">
            <button type="button" id="listingModal" class="group block min-h-full sm:h-80 lg:h-96 relative">
              <span class="absolute inset-0 border-2 border-dashed border-black"></span>
              <div class="relative flex h-full border-2 border-secondary1 bg-white transition-all ease-in-out duration-500 group-hover:scale-110">
  <div class="max-w-xs max-h-full min-w-80 p-1 ">
    <div id="listingMedia" class="h-3/5 w-full">${listingData.media.map(url => `<img class="h-full w-full rounded-md" src="${url}" width="100" height="100">`).join('')}</div>
    <span id="listingTitle" class="font-primary text-xl font-semibold">${listingData.title}</span><br />
    <span id="listingDescription" class="mt-16 opacity-100 transition-opacity ease-in-out duration-500 group-hover:opacity-0">${listingData.description}</span><br />
    <span id="listingBids" class="opacity-100 transition-opacity ease-in-out duration-400 group-hover:opacity-0">Bid Count: ${listingData._count.bids}</span><br />
  </div>
  <div class="absolute inset-0 p-4 opacity-0 transition-opacity ease-in-out duration-800 group-hover:opacity-100 sm:p-6 lg:p-8">
    <h3 class="mt-4 text-xl font-medium sm:text-2xl"></h3>
    <span class="text-sm sm:text-base">
      <div class="h-3/5 mb-4"></div>
      <span id="listingEndsAt" class="">Ends At: ${listingData.endsAt}</span><br />
      <span id="listingSeller">Seller: ${listingData.seller.name}, Email: ${listingData.seller.email}</span><br />
    </span>
    <p class="mt-8 font-bold"></p>
  </div>
</div>

            </button>
          </div>
        </div>
      </div>
    `;

    // Insert the HTML content into the DOM
    // Ensure there's a container element in your HTML with an id where this content should be appended
    // const container = document.getElementById('listingCards'); // Replace 'yourContainerElementId' with the actual ID of your container element
    // container.innerHTML = htmlContent;
    // document.getElementById('listingModal').addEventListener('click', () => {
    //   listingModal(listingData);
    return htmlContent;
    // });
  } catch (error) {
    console.error('Error with getting json data to build listing card', error);
    return ``;
  }
}
