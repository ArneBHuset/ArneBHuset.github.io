import { profileUrl } from '../../../globalValues/urls.mjs';
import { showProfileListingsData } from '../../../ui/profile-page.mjs/filter-interaction/show-listings.mjs';
import { currentProfileName } from '../../../local-storage/current-user.mjs';

export async function filteredProfileUrl() {
  const listingsBoolean = await showProfileListingsData();
  const profileNameValue = await currentProfileName();

  let profileApiFilter = profileUrl;

  // Conditionally append the profile name if specified
  if (profileNameValue) {
    profileApiFilter += `/${profileNameValue}`;
  }

  // Construct query parameters string
  // Note: Adjust query parameters based on actual API documentation for profile filtering
  const queryParams = [
    `_listings=${listingsBoolean}`,
    // Add any other filters here
  ]
    .filter(Boolean)
    .join('&');

  // Append the query parameters to the URL, if any
  if (queryParams) {
    profileApiFilter += `?${queryParams}`;
  }

  console.log('API Filter URL for Profiles:', profileApiFilter);
  return profileApiFilter;
}
