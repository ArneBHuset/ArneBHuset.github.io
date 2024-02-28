import { listingsUrl } from '../../globalValues/urls.mjs';
import { profileUrl } from '../../globalValues/urls.mjs';
import { currentProfileName } from '../../local-storage/current-user.mjs';
import { currentActiveFilter } from '../../main.mjs';
import { checkingAccessToken } from '../../local-storage/validate-access-token.mjs';

export async function filteredListingUrl() {
  const accessToken = await checkingAccessToken();
  const isIndexPage = document.body.dataset.page === 'index';
  const isProfilePage = document.body.dataset.page === 'profile';
  const userName = await currentProfileName();
  const sellerBoolean = accessToken ? true : false;
  const bidsBoolean = accessToken ? true : false;

  let allQueryParams = `_seller=${sellerBoolean}&_bids=${bidsBoolean}&_active=true`;

  if (isIndexPage) {
    return `${listingsUrl}?${allQueryParams}`;
  }

  if (isProfilePage) {
    return `${profileUrl}/${userName}/listings?${allQueryParams}`;
  }

  const activeBoolean = currentActiveFilter();

  let queryParams = `_seller=${sellerBoolean}&_bids=${bidsBoolean}&_active=${activeBoolean}`;
  // if (tag) {
  // queryParams += `&_tag=${encodeURIComponent(tag)}`;
  // }

  let apiFilter = `${listingsUrl}?${queryParams}`;

  console.log('API Filter URL:', apiFilter);
  return apiFilter;
}
