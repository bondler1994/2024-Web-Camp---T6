const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 4,
  // spaceBetween沒反應待研究
  spaceBetween: 20, 
  slidesPerGroup: 4, 
  loop: true,  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
});