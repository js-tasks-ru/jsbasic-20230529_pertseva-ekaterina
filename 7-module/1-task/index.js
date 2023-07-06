import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.scrollWidth = 350;
    this.counter = 0;
    this.render();
  }

  render() {
    this.elem = createElement(`<div class="ribbon"></div>`);
    this.buttonLeft = createElement(`<button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>`);
    this.elem.append(this.buttonLeft);
    this.navigation = createElement(`<nav class="ribbon__inner">`);
    this.categories.forEach(({ id, name }) => {
      let categoryEl = createElement(`<a href="#" class="ribbon__item" data-id="${id}"></a>`);
      categoryEl.textContent = name;
      this.navigation.append(categoryEl);
    });
    this.elem.append(this.navigation);
    this.buttonRight = createElement(`<button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>`);
    this.elem.append(this.buttonRight);

    this.navigation.addEventListener("scroll", this.OnScroll);
    this.elem.addEventListener("click", this.OnClick);

    return this.elem;
  }

  OnClick = (event) => {

    if (event.target.classList.contains("ribbon__arrow_right")) {
      this.navigation.scrollBy(this.scrollWidth, 0);
    }
    if (event.target.classList.contains("ribbon__arrow_left")) {
      this.navigation.scrollBy(-this.scrollWidth, 0);
    }
    if (event.target.classList.contains("ribbon__item")) {

      event.preventDefault();
      console.log("target ", event.target.tagName);
      let previousElement = this.elem.querySelector(".ribbon__item_active");
      if (previousElement != null) {
        previousElement.classList.remove("ribbon__item_active");
      }
      event.target.classList.add("ribbon__item_active");
      this.elem.dispatchEvent(
        new CustomEvent('ribbon-select', {
          detail: event.target.dataset.id,
          bubbles: true,
        })
      );

    }
  }

  isLeftButtonShouldBeHiden() {
    console.log("isLeftButtonShouldBeHiden", this.navigation.scrollLeft);
    console.log("isLeftButtonShouldBeHiden", Boolean(this.navigation.scrollLeft));
    return this.navigation.scrollLeft == 0;
  }

  isRightButtonShouldBeHiden() {
    let scrollWidth = this.navigation.scrollWidth;
    let scrollLeft = this.navigation.scrollLeft;
    let clientWidth = this.navigation.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;
    return Boolean(scrollRight);
  }

  OnScroll = () => {
    if (!this.isLeftButtonShouldBeHiden()) {
      this.elem.querySelector(".ribbon__arrow_left").classList.add("ribbon__arrow_visible");
    }
    else {
      this.elem.querySelector(".ribbon__arrow_left").classList.remove("ribbon__arrow_visible");
    }
    if (!this.isRightButtonShouldBeHiden()) {
      this.elem.querySelector(".ribbon__arrow_right").classList.add("ribbon__arrow_visible");
    }
    else {
      this.elem.querySelector(".ribbon__arrow_left").classList.remove("ribbon__arrow_visible");
    }
  }

}
