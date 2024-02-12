import { fetchProfileData } from '../../api-calls/profile/profile-data.mjs';

export async function displayProfileData() {
  const filteredProfileData = await fetchProfileData();

  const normalizedProfileData = Array.isArray(filteredProfileData)
    ? filteredProfileData
    : [filteredProfileData];

  const profileSection = document.getElementById('profileSection');

  // Map through normalizedProfileData to generate HTML for each profile
  const profileCardsHtml = normalizedProfileData
    .map(profile => {
      // Handle wins and listings to display them properly
      const winsHtml = profile.wins.map(win => `<li>${win}</li>`).join('');
      const listingsHtml =
        profile.listings && profile.listings.length > 0
          ? profile.listings
              .map(
                listing =>
                  `<div>
          <p>Title: ${listing.title}</p>
          <p>Description: ${listing.description}</p>
          <img src="${listing.media}" width="200" height="auto" alt="${listing.title} image">
          <p>Created At: ${listing.created}</p>
        </div>`
              )
              .join('')
          : '<p>No listings available</p>';

      return `
      <div class="profile-card">
        <img src="${profile.avatar}" width="200" height="auto" alt="${profile.name}'s avatar" class="">
        <div>Name: ${profile.name}</div>
        <div>Email: ${profile.email}</div>
        <div>Credits: ${profile.credits}</div>
        <div>Wins: <ul>${winsHtml}</ul></div>
        <div>Listings: ${listingsHtml}</div>
        <div>Total Listings: ${profile._count ? profile._count.listings : 0}</div>
      </div>
    `;
    })
    .join('');

  // Set the innerHTML of the profile section to the generated profileCardsHtml
  profileSection.innerHTML = profileCardsHtml;
}
