import { listingCardBuild } from '../listings/listing-card.mjs';
import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { carousel } from '../carousel.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';

export async function landingPageListings() {
  // Get the HTML string with all listing cards
  const listingCardsHtml = await listingCardBuild();
  const listingData = await callListings();

  // Convert the string to HTML elements
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = listingCardsHtml;

  // Extract individual cards from the temporary div
  const cards = tempDiv.querySelectorAll('.max-w-md');

  // Prepare the container for the carousel structure
  const listingsContainer = document.getElementById('listingCards');
  listingsContainer.innerHTML = `
  <section class="h-full overflow-hidden relative ">
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
        <div id="carouselItems" class="flex transition-transform duration-500">
          <!-- Carousel items will be added here -->
        </div>
      </div>   
    </section>`;

  // Get the carousel items container
  const carouselItemsContainer = document.getElementById('carouselItems');

  // Add each card to the carousel as an individual item
  // Add each card to the carousel as an individual item
  cards.forEach(card => {
    const carouselItem = document.createElement('div');
    // Tailwind classes for carousel item
    carouselItem.className =
      'carousel-item  flex-none w-full ms-10 md:mx-auto sm:w-6/12  md:w-5/12 lg:w-4/12 lg:max-w-96'; // flex-none prevents shrinking, w-1/3 sets the width to one-third
    carouselItem.appendChild(card); // Add the card to the carousel item
    carouselItemsContainer.appendChild(carouselItem); // Add the carousel item to the container
  });

  // Initialize the carousel functionality
  carousel();

  // Add event listener for modal functionality
  listingsContainer.addEventListener('click', function (e) {
    // Check if the clicked element or its parent has the 'listingModalButton' class
    const target = e.target.closest('.listingModalButton');
    if (target) {
      const listingId = target.dataset.listingId; // Get the data-listing-id attribute
      const listing = listingData.find(listing => listing.id === listingId); // Find the corresponding listing data
      if (listing) {
        listingModal(listing); // Open the modal with the specific listing data
      }
    }
  });
}

// Call the function to set up the carousel
landingPageListings();
