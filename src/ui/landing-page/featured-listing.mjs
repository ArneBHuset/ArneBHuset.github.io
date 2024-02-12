import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { mostPopularListing } from '../../filters/jsondata-filter/filter-to-featured.mjs';

export async function displayFeaturedListing() {
  const featuredListing = await mostPopularListing(); // Fetch the featured listing
  //   console.log('This is the featured listing:', featuredListing);

  const featuredBidCount = document.getElementById('featuredBidCount');
  const featuredImg = document.getElementById('featuredImg');

  // Assuming media is an array, ensure to handle it accordingly or adjust if it's just a single URL
  const imageUrl = featuredListing.media[0] || ''; // Use the first image or adjust based on your structure

  featuredBidCount.innerHTML = `Bids ${featuredListing._count.bids}`;
  featuredImg.innerHTML = `<img src="${imageUrl}" class="featuredListingModalButton object-cover width-cover h-96 group-hover:scale-110 transition-transform duration-300" data-listing-id="${featuredListing.id}" />`;

  featuredImg.addEventListener('click', function () {
    listingModal(featuredListing); // Directly call listingModal with featuredListing data
  });
}
