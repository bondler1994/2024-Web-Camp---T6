const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 4,
  // spaceBetween:slide之間的距離 沒反應待研究
  spaceBetween: 20, 
  loop: true,  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
});