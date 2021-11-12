
$('.slide_container').slick({
 
    arrows: true,
     dots: false,
  infinite: false,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
          dots: false,
        arrows:true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
          slidesToScroll: 2,
        arrows:true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
        arrows:true
      }
    }
   
  ]
});