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



var stickyOffset = $('#home').position().top + $('#home').outerHeight() - 20;

$(window).scroll(function(){
  var sticky = $('#header'),
      scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) {
    sticky.addClass('header-fixed');
  } else {
    sticky.removeClass('header-fixed');
  }
});

$(".footer-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1200);
  return false;
});

$(".home-next").click(function() {
  $("html, body").animate({ scrollTop: $('#home').offset().top + $('#home').outerHeight() }, 1200);
  return false;
});


var dataToCounter = 0;
$("[data-to]").click(function(e) {

    $("html, body").animate({ scrollTop: $(e.target.getAttribute('data-to')).position().top - $('#header').outerHeight() - 20}, 1200, function () {
  
    });
    return false;
  
});




