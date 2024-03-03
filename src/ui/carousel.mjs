export function carousel() {
  const carouselItemsContainer = document.getElementById('carouselItems');
  const items = carouselItemsContainer.children;
  const itemWidth = carouselItemsContainer.clientWidth / 5;
  let currentIndex = 0;

  const visibleItems = Math.ceil(
    carouselItemsContainer.clientWidth / itemWidth
  );
  const maxIndex = items.length - visibleItems;

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
