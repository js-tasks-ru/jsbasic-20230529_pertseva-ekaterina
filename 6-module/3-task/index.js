import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.counter = 0;
    this.render();
  }


  render() {
    //  не доделано
    this.elem = createElement(`<div class="carousel">`);
    this.buttonRight = createElement(` 
   <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>
`);
  this.buttonLeft = createElement(` 
 <div class="carousel__arrow carousel__arrow_left">
   <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
 </div>`);
    this.elem.append(this.buttonRight, this.buttonLeft);
    this.carouselInner = createElement(`<div class="carousel__inner">`);
    this.carouselInner.innerHTML = this.slides.map(function ({ image, price, name, id }) {
      return `<div class="carousel__slide" data-id="${id}">
  <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${price.toFixed(2)}</span>
    <div class="carousel__title">${name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>
    `
    }).join("");
     this.elem.append(this.carouselInner);
  
     this.elem.querySelector('.carousel__arrow_left').style.display = "none";
     this.elem.addEventListener('click', this.Onclick);

     return this.elem;

  }

  Onclick = ({ target }) => {
    if (target.closest('.carousel__button')) {
      this.elem.dispatchEvent(
        new CustomEvent('product-add', {
          detail: target.closest('[data-id]').dataset.id,
          bubbles: true,
        })
      );
    }
    if (target.classList.contains("carousel__arrow_right")) {
      this.counter++;
      let slideMove = -(this.elem.offsetWidth * this.counter)
      this.elem.querySelector('.carousel__inner').style.transform = `translateX(${slideMove}px)`;
      (this.counter == this.slides.length - 1) ? target.style.display = 'none' : target.style.display = "";
      this.elem.querySelector('.carousel__arrow_left').style.display = '';

    } else if (target.classList.contains("carousel__arrow_left")) {
      this.counter--;
      let slideMove = -(this.elem.offsetWidth * this.counter);
      this.elem.querySelector('.carousel__inner').style.transform = `translateX(${slideMove}px)`;
      (this.counter === 0) ? target.style.display = 'none' : target.style.display = "";
      this.elem.querySelector('.carousel__arrow_right').style.display = '';

    }
  }
}
