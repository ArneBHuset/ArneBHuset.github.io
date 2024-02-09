export function carousel() {
  const carouselItemsContainer = document.getElementById('carouselItems');
  const items = carouselItemsContainer.children;
  const itemWidth = carouselItemsContainer.clientWidth / 3; // The width for three visible items

  let currentIndex = 0; // Index of the leftmost visible item

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', () => {
    // Move to the previous item
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    carouselItemsContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  });

  nextBtn.addEventListener('click', () => {
    // Move to the next item
    currentIndex = (currentIndex + 1) % items.length;
    carouselItemsContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  });

  // Start auto-sliding the carousel
  setInterval(() => {
    nextBtn.click(); // Simulate a click on the "Next" button
  }, 10000); // Change slide every 3 seconds
}
