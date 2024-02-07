import { listingCardBuild } from '../../listings/listing-card.mjs';

export async function displayListingCards() {
  const listingCardBase = await listingCardBuild();

  const listingsContainer = document.getElementById('listingsContainer');

  listingsContainer.innerHTML = `
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
  <div class="flex justify-center">
  ${listingCardBase}
  </div>
  ${listingCardBase} ${listingCardBase} ${listingCardBase} 
</div>`;
}
