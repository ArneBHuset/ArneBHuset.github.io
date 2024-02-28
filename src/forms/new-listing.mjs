export async function newListingData() {
  const listingTitle = document.getElementById('listingTitle');
  const listingDescription = document.getElementById('listingDescription');
  const listingTags = document.getElementById('listingTags');
  const listingMedia = document.getElementById('listingMedia');
  const listingEndsAt = document.getElementById('listingEndsAt');

  const localDate = new Date(`${listingEndsAt.value}T23:59:00`);
  const endsAtDateWithTime = localDate.toISOString();

  const media = listingMedia.value.trim() ? [listingMedia.value.trim()] : null;

  const userListingData = {
    title: listingTitle.value.trim(),
    description: listingDescription.value.trim(),
    tags: listingTags.value
      .trim()
      .split(',')
      .map(tag => tag.trim()),
    media,
    endsAt: endsAtDateWithTime,
  };
  return userListingData;
}
