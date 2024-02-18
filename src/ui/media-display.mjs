// import { callListings } from '../api-calls/listings/listing-api.mjs';

export async function displayListingMedia(listingData) {
  //   const listingData = await callListings();
  const mediaContainer = document.getElementById('listingMedia');
  let innerHTML = '';

  if (listingData.media.length === 1) {
    innerHTML = `<img src="${listingData.media[0]}" alt="Listing Image" class="max-w-full p-2 rounded-md my-auto">`;
  } else {
    innerHTML = listingData.media
      .map(
        url => `
            <div class="inline-block ">
                <img src="${url}" alt="Listing Image" class="w-full max-h-64 p-2 rounded-md">
            </div>
        `
      )
      .join('');
  }

  mediaContainer.innerHTML = innerHTML;
}
