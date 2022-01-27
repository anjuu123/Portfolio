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
        nav:false,
        navText:[
          " <i class='fa fa-angle-left'></i>",
          " <i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
               
               
            },
            600:{
                items:1,
                
                
            },
            1000:{
                items:3,
               
            }
        }
    })
    });



    //scroll arrow

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });
    $(document).ready(function() {
        $("#back2Top").click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    
    });