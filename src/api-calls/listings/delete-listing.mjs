import { validatedHeader } from '../../globalValues/api-header.mjs';
import { listingsUrl } from '../../globalValues/urls.mjs';

// Skal kjøres vist en knapp trykkes

/**
 * Runs API call which deletes listing based on a given ID
 */
export async function deleteListing(listingId) {
  try {
    const deleteCall = {
      method: 'DELETE',
      headers: validatedHeader,
    };
    const response = await fetch(`${listingsUrl}/${listingId}`, deleteCall);
    console.log(response);
    // Repons til bruker om at posten er slettet, dynamisk hide eller automatisk reload
  } catch (error) {
    console.log(error);
  }
}
