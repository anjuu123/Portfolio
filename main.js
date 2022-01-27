//owlcarousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayhoverpause:true,
        autoplaytimeout:100,
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        nav:true,
        navText:[
          " <i class='fa fa-angle-left'></i>",
          " <i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
               
               
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
               
            }
        }
    })
    });