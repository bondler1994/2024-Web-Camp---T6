var swiper = new Swiper(".swiper", {
  loop: true,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 24
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  }
});