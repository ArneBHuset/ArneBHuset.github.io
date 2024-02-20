import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { mostPopularListing } from '../../filters/jsondata-filter/filter-to-featured.mjs';

export async function displayFeaturedListing() {
  const featuredListing = await mostPopularListing(); // Fetch the featured listing
  //   console.log('This is the featured listing:', featuredListing);

  const featuredBidCount = document.getElementById('featuredBidCount');
  const featuredBidCountSmall = document.getElementById(
    'featuredBidCountSmall'
  );
  const featuredImg = document.getElementById('featuredImg');

  // Assuming media is an array, ensure to handle it accordingly or adjust if it's just a single URL
  const imageUrl = featuredListing.media[0] || ''; // Use the first image or adjust based on your structure

  featuredBidCount.innerHTML = `${featuredListing.title}, currently holding <span class="text-secondary1 font-bold">${featuredListing._count.bids}</span> bids`;
  featuredImg.innerHTML = `<img src="${imageUrl}" class=" object-cover rounded h-96 group-hover:scale-110 transition-transform duration-300" data-listing-id="${featuredListing.id}" />`;
  featuredBidCountSmall.innerHTML = `${featuredListing.title} currently with <span class="text-secondary1">${featuredListing._count.bids}</span> bids`;

  featuredImg.addEventListener('click', function () {
    listingModal(featuredListing); // Directly call listingModal with featuredListing data
  });
}
