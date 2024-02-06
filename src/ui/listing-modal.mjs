import { createModal } from './modals.mjs';

export function listingModal(listingData) {
  // console.log('Geezzez christ', listingData);

  const modalContent = `<div>${listingData.created}</div`;

  const modal = createModal(); // Prepare the modal without initial content
  modal.openModal(); // Display the modal
  modal.setModalContent(modalContent); // Now set the content
}

// export function listingModal(listingData) {
//   document.getElementById('listingModal').addEventListener('click', () => {
//     const modal = createModal(); // Prepare the modal without initial content
//     modal.openModal(); // Display the modal
//     modal.setModalContent(); // Now set the content
//   });
// }
