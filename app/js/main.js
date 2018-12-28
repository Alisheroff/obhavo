new WOW().init();


var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 5,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: false
      },

    navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
  	},

});

