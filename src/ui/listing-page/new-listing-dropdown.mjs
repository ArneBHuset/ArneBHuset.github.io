/**
 * expands the form for creating a new listing and adds animation
 */
export function newListingDropdown() {
	const toggleButton = document.getElementById('newPostCollapse');
	const form = document.getElementById('newListingForm');
	const bidsSection = document.getElementById('bidsSection');
	const filterToggleBoxes = document.getElementById('filterToggleBoxes');

	toggleButton.addEventListener('click', function () {
		if (form && form.classList.contains('hidden')) {
			form.classList.remove('hidden');
			form.classList.add('flex-col', 'items-center', 'gap-3');
			form.offsetWidth;
			form.classList.add('animated-form');

			if (window.innerWidth < 540) {
				if (filterToggleBoxes) filterToggleBoxes.classList.add('hidden');
			}
		} else if (form) {
			form.classList.add('hidden');
			form.classList.remove('animated-form');

			if (window.innerWidth < 540) {
				if (filterToggleBoxes) filterToggleBoxes.classList.remove('hidden');
			}
		}

		if (bidsSection && bidsSection.classList.contains('hidden')) {
			bidsSection.classList.remove('hidden');
			bidsSection.offsetWidth;
			bidsSection.classList.add('animated-form');
		} else if (bidsSection) {
			bidsSection.classList.add('hidden');
			bidsSection.classList.remove('animated-form');
		}

		const addMediaButton = document.getElementById('addMediaButton');
		addMediaButton.addEventListener('click', function () {
			const newInput = document.createElement('input');
			newInput.type = 'url';
			newInput.classList.add(
				'px-4',
				'py-2',
				'w-full',
				'rounded-l',
				'border',
				'border-gray-300',
				'shadow-sm',
				'text-base',
				'placeholder-gray-500',
				'focus:outline-none',
				'focus:border-blue-500',
				'mt-2'
			);
			newInput.placeholder = 'Add another picture link..';
			newInput.autocomplete = 'off';

			const parentDiv = addMediaButton.parentNode;
			parentDiv.insertBefore(newInput, addMediaButton);
		});
	});
}
