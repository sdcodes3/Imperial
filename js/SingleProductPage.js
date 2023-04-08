const swiperSimilar = new Swiper('.swiperSimilar', {
    // Optional parameters
    loop: true,
  
    slidesPerView: 4,
    spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const swiperMoreImg = new Swiper('.swiperMoreImg', {
  // Optional parameters
  loop: true,

  slidesPerView: 3,
  spaceBetween: 0,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
