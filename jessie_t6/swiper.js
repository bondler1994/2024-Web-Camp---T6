
var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
 
  navigation: {
    nextEl: ".swiper_button_next",
    prevEl: ".swiper_button_prev",
  },
  loop:true,
  breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 2,
    },
    576: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
    },
    992: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
    },
},
});

