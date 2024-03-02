export function checkBoxPosition() {
  const container = document.getElementById('filterToggleBoxes');
  const toggleButton = document.getElementById('newPostCollapse');
  let isListVisible = false; // Flag to track the list's visibility

  function adjustLayoutBasedOnToggleButton() {
    isListVisible = !isListVisible;
    console.log('Is list visible:', isListVisible);
    if (isListVisible) {
      container.classList.add(
        'sm:flex-row',
        'sm:justify-end',
        'sm:gap-12',
        'flex-col',
        'gap-4'
      );
      container.classList.remove('sm:flex-col', 'sm:pl-4', 'flex-row');
    } else {
      container.classList.add(
        'sm:flex-col',
        'sm:items-center',
        'sm:pl-4',
        'flex-col'
      );
      container.classList.remove(
        'sm:flex-row',
        'sm:gap-4',
        'flex-row',
        'sm:justify-end'
      );
    }
  }

  toggleButton.addEventListener('click', adjustLayoutBasedOnToggleButton);
  adjustLayoutBasedOnToggleButton();
}
