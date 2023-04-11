
var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
  breakpoints: {
    320: {
        slidesPerView: 2,
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

// 還在摸索中ＱＱ...js