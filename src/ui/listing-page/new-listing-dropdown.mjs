export function newListingDropdown() {
  const toggleButton = document.getElementById('newPostCollapse');
  const form = document.getElementById('newListingForm');
  const filterToggleBoxes = document.getElementById('filterToggleBoxes');

  // Add an event listener to the button
  toggleButton.addEventListener('click', function () {
    // Check if the form is currently hidden
    if (form.classList.contains('hidden')) {
      form.classList.remove('hidden'); // Remove the hidden class to display the form
      form.classList.add('flex-col', 'items-center', 'gap-3'); // Ensure the form structure is correct
      form.offsetWidth; // Trigger a reflow in between removing 'hidden' and adding the animation
      form.classList.add('animated-form'); // Add the animation class to trigger the animation

      // Check if the window width is greater than the 'sm:' breakpoint (640px by default)
      if (window.innerWidth < 540) {
        filterToggleBoxes.classList.add('hidden'); // Hide filter boxes on larger screens
      }
    } else {
      form.classList.add('hidden'); // Add the hidden class to hide the form
      form.classList.remove('animated-form'); // Remove the animation class so it can be re-added later

      // Again, check the window size before removing 'hidden' class
      if (window.innerWidth < 540) {
        filterToggleBoxes.classList.remove('hidden'); // Show filter boxes again when form is hidden
      }
    }
  });
}
