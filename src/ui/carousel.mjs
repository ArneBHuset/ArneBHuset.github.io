export function carousel() {
  document.addEventListener('DOMContentLoaded', function () {
    const carouselItemsContainer = document.getElementById('carouselItems');
    const items = Array.from(
      carouselItemsContainer.getElementsByClassName('carousel-item')
    );

    function moveItemToEnd(item) {
      carouselItemsContainer.appendChild(item);
    }

    function moveItemToStart(item) {
      carouselItemsContainer.insertBefore(
        item,
        carouselItemsContainer.firstChild
      );
    }

    document.getElementById('prevBtn').addEventListener('click', function () {
      const firstItem = carouselItemsContainer.firstElementChild;
      moveItemToEnd(firstItem);
    });

    document.getElementById('nextBtn').addEventListener('click', function () {
      const lastItem = carouselItemsContainer.lastElementChild;
      moveItemToStart(lastItem);
    });
  });
}

// <section class="h-52">
//         <div id="carousel" class="overflow-hidden relative">
//           <div
//             id="carouselItems"
//             class="flex transition-transform duration-500"
//           >
//             <div class="carousel-item inline-block w-1/3 text-center">
//               Item 1
//             </div>
//             <div class="carousel-item inline-block w-1/3 text-center">
//               Item 2
//             </div>
//             <div class="carousel-item inline-block w-1/3 text-center">
//               Item 3
//             </div>
//             <div class="carousel-item inline-block w-1/3 text-center">
//               Item 4
//             </div>
//             <!-- Additional items as needed -->
//           </div>
//         </div>
//         <button id="prevBtn" class="absolute left-0">Prev</button>
//         <button id="nextBtn" class="absolute right-0">Next</button>
//       </section>
