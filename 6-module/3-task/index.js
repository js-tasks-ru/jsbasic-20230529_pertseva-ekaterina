import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this._container = document.querySelector(".container");
    this.render();
  }

  get elem() {
    this._container = this._container.appendChild(this.carousel);
    return this._container;
  }

  render() {
    //  не доделано
    this.carousel = document.createElement("div");
    this.carousel.classList.add("carousel");
    this.carouselInner = document.createElement("div");
    this.carouselInner.classList.add("carousel__inner");
    this.carouselInner.innerHTML = this.slides.map(function ({ image, price, name, id }) {
      createElement(`
    <div class="carousel__slide" data-id="${id}">
  <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${price.toFixed(2)}</span>
    <div class="carousel__title">${name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>
    `);
    }).join("");
    this.carousel.appendChild(this.carouselInner);
    return this.carousel;
  }
}
