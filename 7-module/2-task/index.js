import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    this.elem = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>

        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>

            <h3 class="modal__title"></h3>
          </div>

          <div class="modal__body"></div>
        </div>
      </div>
    `);

    this.titleElem = this.elem.querySelector(".modal__title");
    this.bodyElem = this.elem.querySelector(".modal__body");

    this.onKeyDown = (event) => {
      if (event.code === "Escape") {
        this.close();
      }
    };

    this.elem.addEventListener("click", (event) => {
      if (event.target.closest(".modal__close")) {
        this.close();
      }
    });
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add("is-modal-open");
    document.addEventListener("keydown", this.onKeyDown);
  }

  close() {
    this.elem.remove();
    document.body.classList.remove("is-modal-open");
    document.removeEventListener("keydown", this.onKeyDown);
  }

  setTitle(title) {
    this.titleElem.textContent = title;
  }

  setBody(node) {
    this.bodyElem.innerHTML = "";
    this.bodyElem.append(node);
  }
}
