import { bidsMadeData } from '../../api-calls/profile/profile-bids.mjs';

export async function bidsMadeByUser() {
  const bidsMadeByUser = await bidsMadeData(); // Then fetch the URL for bids
  console.log('Data for  profile bids ', bidsMadeByUser);
}

// Call the function to execute the sequence
