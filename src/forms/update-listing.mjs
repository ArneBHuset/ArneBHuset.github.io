/**
 * Takes the from data from update listing form
 * @returns {ReturnType} - Returns data in a api conformant object for updating listing
 */
export async function updateListingData() {
  const listingTitle = document.getElementById('listingTitle');
  const listingDescription = document.getElementById('listingDescription');
  const listingTags = document.getElementById('listingTags');
  const listingMedia = document.getElementById('listingMedia');

  const updatedListingData = {
    title: listingTitle.value.trim(),
    description: listingDescription.value.trim(),
    tags: listingTags.value.split(',').map(tag => tag.trim()),
    media: listingMedia.value ? [listingMedia.value] : [],
  };
  return updatedListingData;
}
