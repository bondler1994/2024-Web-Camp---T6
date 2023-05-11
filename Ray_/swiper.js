var swiper = new Swiper(".swiper", {

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
      spaceBetween: 32
    },
    1200: {  
      slidesPerView: 4,
      spaceBetween: 32
    }
  },

  loop:"true",

  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection("horizontal");
    },
  },
});

// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

//   return direction;
// }
