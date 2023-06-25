function initCarousel() {

  let carouselList = document.querySelectorAll(".carousel__slide");
  let carousel = document.querySelector(".carousel__inner");
  let buttons = document.querySelector(".carousel");
  let carouselLength = carousel.offsetWidth;
  let maximumCounts = carouselLength * (carouselList.length - 1);

  console.log("maximum counts: ", maximumCounts);

  console.log("carousel length: ", carouselLength);

  carousel.style.transform = `translateX(0px)`
  let style = window.getComputedStyle(carousel).transform;
  let matrix = new WebKitCSSMatrix(style);
  let currentTranslate = matrix.m41;
  let calculated = currentTranslate;



  buttons.addEventListener("click", ({ target }) => {

    if (target.classList.contains("carousel__arrow_right")) {
      calculated = calculated - carouselLength;
      carousel.style.transform = `translateX(${calculated}px)`;
      (calculated === (-maximumCounts)) ? target.style.display = 'none' : target.style.display = "";
      buttons.querySelector(".carousel__arrow_left").style.display = "";
    }
    if (target.classList.contains("carousel__arrow_left")) {
      calculated = calculated + carouselLength;
      carousel.style.transform = `translateX(${calculated}px)`;
      (calculated === 0) ? target.style.display = 'none' : target.style.display = "";
      buttons.querySelector(".carousel__arrow_right").style.display = "";
    }

  });


  if (calculated === 0) {
    buttons.querySelector(".carousel__arrow_left").style.display = 'none';
  }
}

