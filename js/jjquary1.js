const nextIcon = '<img src="./images/union11.svg" alt="right">';
const prevIcon = '<img src="./images/union12.svg" alt="left" >';


$('.owl-carousel2').owlCarousel({
    loop:true,
    nav:true,
    // items:5,
   // responsiveClass:true,
    navText: [
        prevIcon,
        nextIcon
      ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1016:{
            items:1
        },
        1199:{
            items:1
        },
        1200:{
            items:1
        }
        
    }
})