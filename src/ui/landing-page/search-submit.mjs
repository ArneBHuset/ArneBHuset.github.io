/**
 *Takes the input data form the search input field, redirects the listings.html and sets it as a search-filter input
 */
export function searchAndSubmit() {
	const form = document.querySelector('form');
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		const searchInput = document.getElementById('listings-search').value.trim();
		window.location.href = `./listing-page/listings.html?search=${encodeURIComponent(searchInput)}`;
	});
}
