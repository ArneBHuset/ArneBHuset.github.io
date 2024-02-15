import { deleteListing } from '../../api-calls/listings/delete-listing.mjs';

export async function deleteListingInteraction() {
  const deleteBtn = document.getElementById('deleteButton');

  deleteBtn.addEventListener('click', () => {
    console.log('You killed me!');
  });
}
