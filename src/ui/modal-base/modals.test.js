import { createModal } from './modals.mjs';

describe('createModal', () => {
  let modal;
  beforeEach(() => {
    modal = createModal();
  });
  afterEach(() => {
    document.body.removeChild(document.getElementById('mainModal'));
  });
  test('modal is created with correct initial structure', () => {
    expect(document.getElementById('mainModal')).toBeTruthy();
    expect(document.getElementById('modalBody')).toBeTruthy();
    expect(document.getElementById('closeModalBtn')).toBeTruthy();
  });
  test('openModal opens the modal', () => {
    modal.closeModal();
    modal.openModal();
    expect(document.getElementById('mainModal').style.display).toBe('flex');
  });
  test('closeModal closes the modal', () => {
    modal.closeModal();
    expect(document.getElementById('mainModal').style.display).toBe('none');
  });
  test('setModalContent sets innerHTML correctly', () => {
    const htmlContent = '<p>This is some test content.</p>';
    modal.setModalContent(htmlContent);
    expect(document.getElementById('modalBody').innerHTML).toBe(htmlContent);
  });
});
