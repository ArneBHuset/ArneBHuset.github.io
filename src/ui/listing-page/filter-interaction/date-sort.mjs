export function currentDateSort() {
	const sortFilterInput = document.getElementById('dateSortInput');
	if (sortFilterInput) {
		return sortFilterInput.checked;
	} else {
		return true;
	}
}
