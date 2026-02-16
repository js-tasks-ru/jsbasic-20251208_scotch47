export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;

    this.elem = document.createElement("div");
    this.elem.className = "slider";

    this.elem.innerHTML = `
      <div class="slider__thumb">
        <span class="slider__value">${this.value}</span>
      </div>
      <div class="slider__progress"></div>
      <div class="slider__steps">
        ${"<span></span>".repeat(this.steps)}
      </div>
    `;

    this.thumb = this.elem.querySelector(".slider__thumb");
    this.progress = this.elem.querySelector(".slider__progress");
    this.valueElem = this.elem.querySelector(".slider__value");
    this.stepsElem = this.elem.querySelector(".slider__steps");

    this.stepsElem.children[this.value].classList.add("slider__step-active");

    this.updateUI();

    this.elem.addEventListener("click", (event) => {
      const rect = this.elem.getBoundingClientRect();
      const left = event.clientX - rect.left;
      const leftRelative = left / this.elem.offsetWidth;

      const segments = this.steps - 1;
      const approximateValue = leftRelative * segments;
      const newValue = Math.round(approximateValue);

      this.value = newValue;
      this.updateUI();

      this.elem.dispatchEvent(
        new CustomEvent("slider-change", {
          detail: this.value,
          bubbles: true,
        }),
      );
    });
  }

  updateUI() {
    const segments = this.steps - 1;
    const valuePercents = (this.value / segments) * 100;

    this.thumb.style.left = `${valuePercents}%`;
    this.progress.style.width = `${valuePercents}%`;
    this.valueElem.textContent = this.value;

    const active = this.stepsElem.querySelector(".slider__step-active");
    if (active) {
      active.classList.remove("slider__step-active");
    }
    this.stepsElem.children[this.value].classList.add("slider__step-active");
  }
}
