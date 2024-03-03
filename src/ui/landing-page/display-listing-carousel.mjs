import { listingCardBuild } from '../listings/listing-card.mjs';
import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { carousel } from '../carousel.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';

/**
 * Sets up the carousel layout with buttons, and populates with standard listing cards.
 * Initalizes listing modal and carousel logick
 */
export async function landingPageListings() {
  try {
    const listingCardsHtml = await listingCardBuild();
    let listingData = await callListings();
    listingData = Array.isArray(listingData) ? listingData : [listingData];
    const listingsContainer = document.getElementById('listingCards');
    if (!listingsContainer) throw new Error('Listing container not found');

    listingsContainer.innerHTML = `
    <section class="h-full overflow-hidden relative sm:max-w-screen-xl ps-12 p-4 sm:ps-0  mx-auto ">
    <button id="prevBtn" class="absolute left-0 top-1/2 -translate-y-1/2 text-black px-4 py-2 z-10">
          <span class="material-symbols-outlined pr-10">
          arrow_back_ios
          </span>
        </button>
        <button id="nextBtn" class="absolute right-0 top-1/2 -translate-y-1/2 text-black px-4 py-2 z-10">
          <span class="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </button>
        <div id="carousel" class="relative ">
          <div id="carouselItems" class="flex gap-10  transition-transform duration-500">
          </div>
        </div>   
      </section>`;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = listingCardsHtml;
    const cards = tempDiv.querySelectorAll('.max-w-md');

    if (cards.length === 0) throw new Error('No listing cards were generated');

    const carouselItemsContainer = document.getElementById('carouselItems');
    if (!carouselItemsContainer)
      throw new Error('Carousel items container not found');

    cards.forEach(card => {
      const carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item ...'; // Your class names here
      carouselItem.appendChild(card);
      carouselItemsContainer.appendChild(carouselItem);
    });

    carousel();
    setupModalInteraction(listingsContainer, listingData);
  } catch (error) {
    displayListingCarouselError();
  }
}
/**
 * UI error dispaly for listing carousels
 */
function displayListingCarouselError() {
  const errorElement = document.getElementById('listingCarouselError');
  if (errorElement) {
    errorElement.innerHTML = `
    <div class="flex gap-2 text-red-400">
      <span class="material-symbols-outlined">
      priority_high
      </span>
      Error with displaying listing carousel
    </div>
    `;
  }
}
/**
 * Intializing the modal for each listing card
 */
function setupModalInteraction(container, listingData) {
  container.addEventListener('click', function (e) {
    const target = e.target.closest('.listingModalButton');
    if (target) {
      const listingId = target.dataset.listingId;
      const listing = listingData.find(listing => listing.id === listingId);
      if (listing) {
        listingModal(listing);
      } else {
        displayListingCarouselError();
      }
    }
  });
}
