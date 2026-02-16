export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.elem = document.createElement("div");
    this.elem.className = "ribbon";

    this.elem.innerHTML = `
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <nav class="ribbon__inner">
        ${categories
          .map(
            (c, i) => `
          <a href="#" class="ribbon__item ${i === 0 ? "ribbon__item_active" : ""}" data-id="${c.id}">
            ${c.name}
          </a>
        `,
          )
          .join("")}
      </nav>

      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `;

    this.ribbonInner = this.elem.querySelector(".ribbon__inner");
    this.arrowLeft = this.elem.querySelector(".ribbon__arrow_left");
    this.arrowRight = this.elem.querySelector(".ribbon__arrow_right");

    this.arrowLeft.classList.remove("ribbon__arrow_visible");

    this.arrowRight.addEventListener("click", () => {
      this.ribbonInner.scrollBy(350, 0);
    });

    this.arrowLeft.addEventListener("click", () => {
      this.ribbonInner.scrollBy(-350, 0);
    });

    this.ribbonInner.addEventListener("scroll", () => {
      const scrollLeft = this.ribbonInner.scrollLeft;
      const scrollRight =
        this.ribbonInner.scrollWidth -
        scrollLeft -
        this.ribbonInner.clientWidth;

      if (scrollLeft === 0) {
        this.arrowLeft.classList.remove("ribbon__arrow_visible");
      } else {
        this.arrowLeft.classList.add("ribbon__arrow_visible");
      }

      if (scrollRight < 1) {
        this.arrowRight.classList.remove("ribbon__arrow_visible");
      } else {
        this.arrowRight.classList.add("ribbon__arrow_visible");
      }
    });

    this.ribbonInner.addEventListener("click", (e) => {
      const item = e.target.closest(".ribbon__item");
      if (!item) {
        return;
      }

      e.preventDefault();

      const current = this.ribbonInner.querySelector(".ribbon__item_active");
      if (current) {
        current.classList.remove("ribbon__item_active");
      }
      item.classList.add("ribbon__item_active");

      this.elem.dispatchEvent(
        new CustomEvent("ribbon-select", {
          detail: item.dataset.id,
          bubbles: true,
        }),
      );
    });
  }
}
