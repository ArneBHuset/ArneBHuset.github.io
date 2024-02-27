import { validatedHeader } from '../../globalValues/api-header.mjs';
import { listingsUrl } from '../../globalValues/urls.mjs';

/**
 * Runs API call to delete listing
 * @param {string} listingId - function is called with id of the listing to be deleted
 */
export async function deleteListing(listingId) {
  const errorMessageProfile = document.getElementById(
    'errorMessageProfileListings'
  );
  errorMessageProfile.textContent = '';

  try {
    const deleteCall = {
      method: 'DELETE',
      headers: validatedHeader,
    };
    const response = await fetch(`${listingsUrl}/${listingId}`, deleteCall);

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData.message ||
        'There was a problem deleting the listing. Please try again.';
      errorMessageProfile.textContent = errorMessage;
      throw new Error(errorMessage);
    }
    window.location.reload();
  } catch (error) {
    errorMessageProfile.innerHTML = `<span class="error-message">Error with deletion: ${error.message || 'Network or server issue, please try again later.'}</span>`;
  }
}
