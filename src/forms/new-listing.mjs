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
