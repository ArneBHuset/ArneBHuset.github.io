import { currentSearchInput } from '../../main.mjs';

export function determineSearchType() {
  const userInput = currentSearchInput();
  let listingId = '';
  let tag = '';

  // Here, add your logic to determine if the userInput is an ID or a tag
  // For example, assume IDs are strictly numeric (adjust based on your actual ID format)
  if (userInput) {
    // This is just an example, adjust regex based on your ID format
    listingId = userInput;
  } else {
    tag = userInput;
  }

  return { listingId, tag };
}
