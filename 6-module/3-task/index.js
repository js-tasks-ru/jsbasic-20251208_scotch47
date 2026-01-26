import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.position = 0;

    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
          ${slides
            .map(
              (slide) => `
            <div class="carousel__slide" data-id="${slide.id}">
              <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                <div class="carousel__title">${slide.name}</div>
                <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `);

    this.inner = this.elem.querySelector(".carousel__inner");
    this.arrowLeft = this.elem.querySelector(".carousel__arrow_left");
    this.arrowRight = this.elem.querySelector(".carousel__arrow_right");

    this.update();

    this.arrowLeft.addEventListener("click", () => {
      if (this.position === 0) {
        return;
      }
      this.position -= 1;
      this.update();
    });

    this.arrowRight.addEventListener("click", () => {
      if (this.position === this.slides.length - 1) {
        return;
      }
      this.position += 1;
      this.update();
    });

    this.elem.addEventListener("click", (event) => {
      const button = event.target.closest(".carousel__button");
      if (!button) {
        return;
      }

      const slideElem = button.closest(".carousel__slide");
      const id = slideElem.dataset.id;

      this.elem.dispatchEvent(
        new CustomEvent("product-add", {
          detail: id,
          bubbles: true,
        }),
      );
    });
  }

  update() {
    const slide = this.elem.querySelector(".carousel__slide");
    const slideWidth = slide.offsetWidth;

    this.inner.style.transform = `translateX(-${this.position * slideWidth}px)`;

    this.arrowLeft.style.display = this.position === 0 ? "none" : "";
    this.arrowRight.style.display =
      this.position === this.slides.length - 1 ? "none" : "";
  }
}
