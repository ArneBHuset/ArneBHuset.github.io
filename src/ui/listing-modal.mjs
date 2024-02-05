import { createModal } from './modals.mjs';

export function listingModalContent(listingData) {
  document.getElementById('listingModal').addEventListener('click', () => {
    console.log('Geezzez christ', listingData);
  });
}

export function listingModal() {
  document.getElementById('listingModal').addEventListener('click', () => {
    const modal = createModal(); // Prepare the modal without initial content
    modal.openModal(); // Display the modal
    modal.setModalContent(); // Now set the content
  });
}
