function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const carouselInner = carousel.querySelector(".carousel__inner");
  const arrowLeft = carousel.querySelector(".carousel__arrow_left");
  const arrowRight = carousel.querySelector(".carousel__arrow_right");
  const slides = carouselInner.querySelectorAll(".carousel__slide");

  const sliderWidth = slides[0].offsetWidth;
  const maxPosition = slides.length - 1;

  let position = 0;

  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${position * sliderWidth}px)`;

    arrowLeft.style.display = position === 0 ? "none" : "";
    arrowRight.style.display = position === maxPosition ? "none" : "";
  }

  arrowLeft.addEventListener("click", function () {
    position--;
    updateCarousel();
  });
  arrowRight.addEventListener("click", function () {
    position++;
    updateCarousel();
  });
  updateCarousel();
}
