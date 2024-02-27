/**
 * Takes input data from new listing form
 * @returns {ReturnType} - Object containing new listing data for validation
 */
export async function newListingData() {
  const listingTitle = document.getElementById('listingTitle');
  const listingDescription = document.getElementById('listingDescription');
  const listingTags = document.getElementById('listingTags');
  const listingMedia = document.getElementById('listingMedia');
  const listingEndsAt = document.getElementById('listingEndsAt');

  const localDate = new Date(`${listingEndsAt.value}T23:59:00`);
  const endsAtDateWithTime = localDate.toISOString();

  const userListingData = {
    title: listingTitle.value,
    description: listingDescription.value,
    tags: listingTags.value.split(','),
    media: [listingMedia.value],
    endsAt: endsAtDateWithTime,
  };
  return userListingData;
}
