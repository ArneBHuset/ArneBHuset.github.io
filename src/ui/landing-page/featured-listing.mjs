import { listingModal } from '../modal-bodies/listing-modal.mjs';
import { mostPopularListing } from '../../filters/jsondata-filter/filter-to-featured.mjs';

/**
 * Displays featured listing, using mostPupularListing filter which finds the listing with most bids
 */
export async function displayFeaturedListing() {
  const featuredListing = await mostPopularListing();
  let featuredImg = document.getElementById('featuredImg');
  if (featuredListing) {
    const featuredBidCount = document.getElementById('featuredBidCount');
    const featuredBidCountSmall = document.getElementById(
      'featuredBidCountSmall'
    );

    const imageUrl = featuredListing.media[0] || '';

    featuredBidCount.innerHTML = `${featuredListing.title}, currently holding <span class="text-secondary1 font-bold">${featuredListing._count.bids}</span> bids`;
    featuredImg.innerHTML = `<img src="${imageUrl}" class="w-auto h-64 sm:object-cover rounded sm:h-96 group-hover:scale-110 transition-transform duration-500" data-listing-id="${featuredListing.id}" />`;
    featuredBidCountSmall.innerHTML = `<div class="text-center mb-4">${featuredListing.title}, currently holding <span class="text-secondary1 ">${featuredListing._count.bids}</span> bids</div>`;

    featuredImg.addEventListener('click', function () {
      listingModal(featuredListing);
    });
  }
}
