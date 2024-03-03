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
