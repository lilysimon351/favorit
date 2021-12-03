const swiper = new Swiper('.cert_swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
  
    // If we need pagination
    pagination: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.cert__next',
      prevEl: '.cert__prev',
    },

});