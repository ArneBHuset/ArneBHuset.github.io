import { profileUrl } from '../../globalValues/urls.mjs';
import { showProfileListingsData } from '../../ui/profile-page.mjs/filter-interaction/show-listings.mjs';
import { currentProfileName } from '../../local-storage/current-user.mjs';

/**
 * Sets the correct url for the profile api call based on profile name from local storage
 */
export async function filteredProfileUrl() {
  const listingsBoolean = await showProfileListingsData();
  const profileNameValue = await currentProfileName();

  let profileApiFilter = profileUrl;

  if (profileNameValue) {
    profileApiFilter += `/${profileNameValue}`;
  }
  const queryParams = [`_listings=${listingsBoolean}`]
    .filter(Boolean)
    .join('&');

  if (queryParams) {
    profileApiFilter += `?${queryParams}`;
  }
  return profileApiFilter;
}
