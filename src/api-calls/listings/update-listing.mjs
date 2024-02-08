import { listingsUrl } from '../../globalValues/urls.mjs';
import { checkingAccessToken } from '../../access-token/validate-access-token.mjs';
let testID = `1d36126e-a74a-4e2a-87b2-26dc2d98309b`;

/**
 * Runs API call for updating and exsiting listing
 * @param {ParameterType} updateDataForm - Takes validated new form-data for updating a listing.
 */
export async function updateListing(updateDataForm) {
  try {
    const accessToken = await checkingAccessToken();

    const updateApiCall = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updateDataForm),
    };
    const response = await fetch(`${listingsUrl}/${testID}`, updateApiCall);
    console.log('Successfull update of post', response, testID);
  } catch (error) {
    console.log(error);
  }
}
