const swiper = new Swiper('.swiperMain', {
  // Optional parameters
  loop: true,

  slidesPerView: 1,
  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {  
    '640': {
      slidesPerView: 3,
      spaceBetween: 50, },
  },
});