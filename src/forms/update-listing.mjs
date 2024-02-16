// updateListingData.mjs
export async function updateListingData() {
  const listingTitle = document.getElementById('listingTitle');
  const listingDescription = document.getElementById('listingDescription');
  const listingTags = document.getElementById('listingTags');
  const listingMedia = document.getElementById('listingMedia');

  const updatedListingData = {
    title: listingTitle.value.trim(),
    description: listingDescription.value.trim(),
    tags: listingTags.value.split(',').map(tag => tag.trim()), // Assuming tags are comma-separated
    media: listingMedia.value ? [listingMedia.value] : [], // Assuming media should be an array, even if it's just one URL
  };
  return updatedListingData;
}
