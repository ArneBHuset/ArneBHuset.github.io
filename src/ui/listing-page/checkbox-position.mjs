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
				'flex-col',
				'gap-6',
				'my-6',
				'ml-6',
				'sm:flex-row',
				'sm:justify-center',
				'sm:gap-4',
				'sm:my-2',
				'sm:ml-0'
			);
			container.classList.remove('flex-row', 'sm:flex-col', 'sm:ps-44', 'sm:gap-8');
		} else {
			container.classList.add('flex-col', 'sm:ps-44', 'sm:gap-8', 'sm:ml-0');
			container.classList.remove(
				'flex-row',
				'sm:flex-row',
				'sm:justify-center',
				'gap-6',
				'my-6',
				'ml-6',
				'sm:gap-4',
				'sm:my-2'
			);
		}
	}

	toggleButton.addEventListener('click', adjustLayoutBasedOnToggleButton);
	adjustLayoutBasedOnToggleButton();
}
