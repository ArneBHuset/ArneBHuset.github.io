import { defaultMedia } from '../globalValues/general.mjs';

export async function displayListingMedia(listingData) {
  const mediaContainer = document.getElementById('listingMedia');
  let innerHTML = '';
  // Simplify the assignment using the logical OR operator
  // This assumes listingData.media is defined; if it's not, it defaults to [defaultMedia]
  const mediaUrls =
    listingData.media && listingData.media.length > 0
      ? listingData.media
      : [defaultMedia];
  // Construct innerHTML based on the number of media URLs
  if (mediaUrls.length === 1) {
    innerHTML = `<img src="${mediaUrls[0]}" alt="Listing Image" class="max-w-full p-2 rounded-md my-auto">`;
  } else {
    innerHTML = mediaUrls
      .map(
        url => `
          <div class="inline-block">
              <img src="${url}" alt="Listing Image" class="w-full max-h-64 p-2 rounded-md">
          </div>
      `
      )
      .join('');
  }
  // Set the inner HTML of the media container
  mediaContainer.innerHTML = innerHTML;
}
