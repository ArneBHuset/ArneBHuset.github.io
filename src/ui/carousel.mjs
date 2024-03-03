export function carousel() {
	const carouselItemsContainer = document.getElementById('carouselItems');
	const items = carouselItemsContainer.children;

	let currentIndex = 0;
	let visibleItems;
	let itemWidth;
	let maxIndex;

	const updateCarouselMetrics = () => {
		itemWidth = carouselItemsContainer.clientWidth / (window.innerWidth > 768 ? 5 : 1);
		visibleItems = Math.ceil(carouselItemsContainer.clientWidth / itemWidth);
		maxIndex = items.length - visibleItems;
		carouselItemsContainer.style.transform = `translateX(-${Math.min(currentIndex, maxIndex) * itemWidth}px)`;
	};
	updateCarouselMetrics();
	window.addEventListener('resize', updateCarouselMetrics);
	const prevBtn = document.getElementById('prevBtn');
	const nextBtn = document.getElementById('nextBtn');
	prevBtn.addEventListener('click', () => {
		currentIndex = (currentIndex - 1 + items.length) % items.length;
		carouselItemsContainer.style.transform = `translateX(-${Math.min(currentIndex, maxIndex) * itemWidth}px)`;
	});
	nextBtn.addEventListener('click', () => {
		currentIndex = (currentIndex + 1) % items.length;
		carouselItemsContainer.style.transform = `translateX(-${Math.min(currentIndex, maxIndex) * itemWidth}px)`;
	});
	setInterval(() => {
		currentIndex = (currentIndex + 1) % items.length;
		carouselItemsContainer.style.transform = `translateX(-${Math.min(currentIndex, maxIndex) * itemWidth}px)`;
	}, 5000);
}
