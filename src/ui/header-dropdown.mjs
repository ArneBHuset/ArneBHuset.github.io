export function headerDropdown() {
  const toggleMenuButton = document.getElementById('headerDropdownBtn'); // Button for toggling the menu
  const navMenu = document.getElementById('navMenu'); // Navigation menu to toggle

  // Check if elements exist
  if (toggleMenuButton && navMenu) {
    navMenu.classList.toggle('sm:block');
    toggleMenuButton.addEventListener('click', () => {
      // Toggle classes that control visibility and layout using Tailwind CSS
      navMenu.classList.toggle('hidden');
      navMenu.classList.toggle('h-100');
      navMenu.classList.toggle('flex-col'); // Stack the items vertically
      navMenu.classList.toggle('absolute'); // Position it absolutely to float over content
      navMenu.classList.toggle('w-full'); // Full width
      navMenu.classList.toggle('top-full'); // Position right below the toggle button
      navMenu.classList.toggle('h-auto'); // Adjust height automatically based on content
      navMenu.classList.toggle('mt-2'); // Add a little margin top for spacing from the button
      navMenu.classList.toggle('z-50'); // High z-index to ensure it's above other content
      navMenu.classList.toggle('bg-primary-1'); // Background color from your header for consistency
    });
  }
}
