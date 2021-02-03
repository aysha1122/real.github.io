const nextIcon = '<img src="./images/union1.svg" alt="right">';
const prevIcon = '<img src="./images/union2.svg" alt="left" >';


$('.owl-carousel1').owlCarousel({
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

const nextIcon1 = '<img src="./images/union11.svg" alt="right">';
const prevIcon1 = '<img src="./images/union12.svg" alt="left" >';


$('.owl-carousel2').owlCarousel({
    loop:true,
    nav:true,
    // items:5,
   // responsiveClass:true,
    navText: [
        prevIcon1,
        nextIcon1
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
$('.owl-carousel3').owlCarousel({
    loop:true,
    nav:true,
    // items:5,
   // responsiveClass:true,
   autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        },
        1016:{
            items:2
        },
        1199:{
            items:3
        },
        1280:{
            items:3.5
        },
        1300:{
            items:3.3
        }
        
    }
})