import { listingsUrl } from '../../globalValues/urls.mjs';
import { validatedHeader } from '../../globalValues/api-header.mjs';

/**
 * Runs API call for updating an existing listing.
 * @param {Object} updateDataForm - Takes validated new form-data for updating a listing.
 * @param {string} listingId - The ID of the listing to be updated.
 */
export async function updateListing(updateDataForm, listingId) {
  const errorDisplay = document.getElementById('updateErrorMessage');
  errorDisplay.textContent = '';
  try {
    const updateApiCall = {
      method: 'PUT',
      headers: validatedHeader,
      body: JSON.stringify(updateDataForm),
    };
    const response = await fetch(`${listingsUrl}/${listingId}`, updateApiCall);

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage = errorBody.message || 'Failed to update listing';
      throw new Error(errorMessage);
    }
    await response.json();

    errorDisplay.innerHTML = `
      <div class="flex items-center justify-center">
        <span class="material-symbols-outlined text-green-600">
          task_alt
        </span>
        <span class="text-green-600 ml-2">Update successful!</span>
      </div>`;
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  } catch (error) {
    errorDisplay.textContent = error.message;
  }
}
