/**
 * Monitors the state of the expand button for creating a new listing
 */
export function checkBoxPosition() {
  const container = document.getElementById('filterToggleBoxes');
  const toggleButton = document.getElementById('newPostCollapse');
  let isListVisible = false;
  /**
   * Manipulates the classes for the checkbox layout to change whenever the new listing form list drops down, and expands the container
   */
  function adjustLayoutBasedOnToggleButton() {
    isListVisible = !isListVisible;
    if (isListVisible) {
      container.classList.add(
        'sm:flex-row',
        'sm:justify-end',
        'sm:gap-2',
        'sm:my-2',
        'sm-mr-[-14px]',
        'flex-col',
        'gap-6',
        'my-6',
        'ml-6'
      );
      container.classList.remove(
        'sm:flex-col',
        'sm:pl-0',
        'flex-row',
        'gap-12'
      );
    } else {
      container.classList.add(
        'sm:flex-col',
        'sm:items-center',
        'sm:pl-0',
        'sm:gap-12',
        'sm:ml-0',
        'flex-col'
      );
      container.classList.remove(
        'sm:flex-row',
        'sm:gap-2',
        'flex-row',
        'sm:justify-end'
      );
    }
  }

  toggleButton.addEventListener('click', adjustLayoutBasedOnToggleButton);
  adjustLayoutBasedOnToggleButton();
}
