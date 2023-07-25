const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 4,
  // spaceBetween:slide之間的距離
  spaceBetween: 20, 
  loop: true,  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
});