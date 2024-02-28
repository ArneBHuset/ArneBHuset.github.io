import { defaultMedia } from '../../globalValues/general.mjs';

export async function displayListingMedia(listingData) {
  const mediaContainer = document.getElementById('listingMedia');
  let innerHTML = '';
  const mediaUrls =
    listingData.media && listingData.media.length > 0
      ? listingData.media
      : [defaultMedia];
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

  mediaContainer.innerHTML = innerHTML;
}
