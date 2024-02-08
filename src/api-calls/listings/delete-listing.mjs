import { listingsUrl } from '../../globalValues/urls.mjs';
import { checkingAccessToken } from '../../access-token/validate-access-token.mjs';

// Id finner man?
let testID = `1d36126e-a74a-4e2a-87b2-26dc2d98309b`;

// Skal kjøres vist en knapp trykkes

/**
 * Runs API call which deletes listing based on a given ID
 */
export async function deleteListing() {
  try {
    const accessToken = await checkingAccessToken();

    const deleteCall = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(`${listingsUrl}/${testID}`, deleteCall);
    console.log(response);
    // Repons til bruker om at posten er slettet, dynamisk hide eller automatisk reload
  } catch (error) {
    console.log(error);
  }
}
