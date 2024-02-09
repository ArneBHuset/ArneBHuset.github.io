import { listingsUrl } from '../../globalValues/urls.mjs';
import { currentActiveFilter } from '../../ui/landing-page/filter-interaction/active.mjs';
import { currentBidsFilter } from '../../ui/landing-page/filter-interaction/bids.mjs';
import { currentSellerFilter } from '../../ui/landing-page/filter-interaction/seller.mjs';
import { currentTagsFilter } from '../../ui/landing-page/filter-interaction/tags.mjs';
import { listingFilterById } from './specific-id-listing.mjs';

export async function filteredListingUrl() {
  const activeBooleon = await currentActiveFilter();
  const bidsBooleon = await currentBidsFilter();
  const sellerBooleon = await currentSellerFilter();
  const tagsValue = await currentTagsFilter();
  const idValue = await listingFilterById();

  let apiFilter = `${listingsUrl}${id}?_seller=${sellerBooleon}&_bids=${bidsBooleon}&_tag=${tagsValue}&_active=${activeBooleon}`;
  console.log('before all harm', apiFilter);

  console.log('filter to be sent', apiFilter);
  return apiFilter;
}
