export function carousel() {
  const carouselItemsContainer = document.getElementById('carouselItems');
  const items = carouselItemsContainer.children;
  const itemWidth = carouselItemsContainer.clientWidth / 4; // Assuming three items should be visible
  let currentIndex = 0; // Index of the leftmost visible item

  const visibleItems = Math.ceil(
    carouselItemsContainer.clientWidth / itemWidth
  );
  const maxIndex = items.length - visibleItems; // Maximum index to prevent empty space

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

  // Start auto-sliding the carousel
  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    carouselItemsContainer.style.transform = `translateX(-${Math.min(currentIndex, maxIndex) * itemWidth}px)`;
  }, 5000); // Change slide every 10 seconds
}
