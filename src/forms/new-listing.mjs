/**
 * Takes form-data for posting new listing
 * @returns {ReturnType} - Returns array of form-data for creating new listing api call
 */
export async function newListingData() {
  const listingTitle = document.getElementById('listingTitle');
  const listingDescription = document.getElementById('listingDescription');
  const listingTags = document.getElementById('listingTags');
  const listingMedia = document.getElementById('listingMedia');
  const listingEndsAt = document.getElementById('listingEndsAt');

  const userListingData = {
    title: listingTitle.value,
    description: listingDescription.value,
    tags: listingTags.value,
    media: listingMedia.value,
    endsAt: listingEndsAt.value,
  };
  return userListingData;
}
