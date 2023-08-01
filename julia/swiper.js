
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
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
  // slidesPerView: 4,
  // spaceBetween: 20,   
  // spaceBetween:slide之間的距離
   
  loop: true,  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
});


