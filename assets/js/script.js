$(function() {
  // Handler for .ready() called.
  $('.owl-carousel').owlCarousel({
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause: true,
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          768:{
              items:3
          },
          1200:{
              items:5
          }
      }
  })

  // carousel bootstrap Card
  $('.carousel').carousel({
    interval: 1000
  })
  
 // tooltips
  $('[data-toggle="tooltip"]').tooltip()

});
