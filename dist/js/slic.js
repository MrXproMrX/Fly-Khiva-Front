$(document).ready(function(){

$('.slider__list').slick({
    dots: true,
    arrows:true,
    autoplaySpeed:5000,
    infinite: true,
    speed: 1500,
    autoplay:true,
    fade: true,
});

$('.owl-carousel').owlCarousel({
  loop:false,
  margin:15,
  data:false,
  nav:true,
  autoplaySpeed:2000,
  autoplay:true,
    responsive:{
      0:{
        items:1
      },

      750:{
        items:2
      },

      1250:{
        items:3
      }
  }
});

})
