$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  autoplay: true,
  nav: true,
  responsiveClass: true,
     responsive:{
      0:{
          nav: false,
      },
      1000:{
          nav: true,
            }
        },
  navText: ["<span><img src='./img/prev.png'></span>", "<span><img src='./img/next.png'></span>"],
  loop:true,
  items: 1,
  dots: true,
  autoplayTimeout: 4500,
  smartSpeed: 1000,
});
});

$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        protect: true
    });

});
$(function(){
    $('#menu').slicknav();
    prependTo:'.slick-nav-menu'
  });