export function carousel() {
  const carouselItemsContainer = document.getElementById('carouselItems');
  const items = carouselItemsContainer.children;
  const itemWidth = carouselItemsContainer.clientWidth / 3; // The width for three visible items

  let currentIndex = 0; // Index of the leftmost visible item

  document.getElementById('prevBtn').addEventListener('click', () => {
    // Move to the previous item
    currentIndex = Math.max(currentIndex - 1, 0);
    carouselItemsContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    // Move to the next item
    currentIndex = Math.min(currentIndex + 1, items.length - 3);
    carouselItemsContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  });
}
