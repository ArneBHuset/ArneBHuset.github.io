import { listingCardBuild } from '../listings/listing-card.mjs';
import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { carousel } from '../carousel.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';

export async function landingPageListings() {
  try {
    // Attempt to build listing cards and fetch listing data
    const listingCardsHtml = await listingCardBuild();
    let listingData = await callListings();
    // console.log('in the carousel build:', listingCardsHtml, listingData);

    listingData = Array.isArray(listingData) ? listingData : [listingData];

    // Prepare the container for the carousel structure
    const listingsContainer = document.getElementById('listingCards');
    if (!listingsContainer) throw new Error('Listing container not found');

    listingsContainer.innerHTML = `
  <section class="h-full  overflow-hidden relative sm:max-w-screen-xl ps-12 sm:ps-0  mx-auto ">
  <button id="prevBtn" class="absolute left-0 top-1/2 -translate-y-1/2 text-white px-4 py-2 z-10">
        <span class="material-symbols-outlined">
          navigate_before
        </span>
      </button>
      <button id="nextBtn" class="absolute right-0 top-1/2 -translate-y-1/2 text-white px-4 py-2 z-10">
        <span class="material-symbols-outlined">
          arrow_forward_ios
        </span>
      </button>
      <div id="carousel" class="relative ">
        <div id="carouselItems" class="flex gap-10  transition-transform duration-500">
          <!-- Carousel items added here -->
        </div>
      </div>   
    </section>`;

    // Get the carousel items container
    // Convert the string to HTML elements and setup carousel
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = listingCardsHtml;
    const cards = tempDiv.querySelectorAll('.max-w-md');

    // Ensure cards are found
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

    // Initialize the carousel functionality
    carousel();

    // Add event listener for modal functionality
    setupModalInteraction(listingsContainer, listingData);
  } catch (error) {
    console.error('Error in landingPageListings:', error);
    // Optionally, display an error message in the UI
  }
}

function setupModalInteraction(container, listingData) {
  container.addEventListener('click', function (e) {
    const target = e.target.closest('.listingModalButton');
    if (target) {
      const listingId = target.dataset.listingId;
      const listing = listingData.find(listing => listing.id === listingId);
      if (listing) {
        listingModal(listing);
      } else {
        console.error('Listing not found for ID:', listingId);
        // Optionally, inform the user that the listing could not be found
      }
    }
  });
}
