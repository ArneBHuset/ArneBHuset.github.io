import { listingCardBuild } from '../listings/listing-card.mjs';
import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { callListings } from '../../api-calls/listings/listing-api.mjs';
import { carousel } from '../carousel.mjs'; // Function to set up carousel functionality


export async function landingPageListings() {
  const listingCardsHtml = await listingCardBuild(); // Generates HTML for all listings
  const listingData = await  callListings(); // Gets data on each listing

  // Prepare the container for the carousel structure
  const listingsContainer = document.getElementById('listingCards');
  listingsContainer.innerHTML = `
  <section class="relative overflow-hidden w-full" style="height: 52rem;"> <!-- Set a fixed height for the carousel -->
  <div id="carousel" class="relative w-full h-full">
    <div id="carouselItems" class="flex transition-transform duration-500">
      <!-- Individual listing cards will be inserted here -->
    </div>
  </div>
  <button id="prevBtn" class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 z-10">Prev</button>
  <button id="nextBtn" class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 z-10">Next</button>
</section>
    <button id="prevBtn" class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 z-10">Prev</button>
    <button id="nextBtn" class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 z-10">Next</button>
  `;

  // Convert the single HTML string into individual carousel items
  const carouselItemsContainer = document.getElementById('carouselItems');
  carouselItemsContainer.innerHTML = listingCardsHtml;

  carousel(); // Initialize the carousel functionality

  // Event listener for modal functionality
  listingsContainer.addEventListener('click', function(e) {
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

// Ensure this function is called to set up the carousel
landingPageListings();
