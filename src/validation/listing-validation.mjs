import { newListingData } from '../forms/new-listing.mjs';

export async function validatedNewListing() {
  const postBtn = document.getElementById('postListingBtn');

  postBtn.addEventListener('click', async () => {
    const userListingData = await newListingData();

    if (!userListingData.title || !userListingData.endsAt) {
      console.log('Required fields missing');
    }

    // Any other validaiton?
  });
}
