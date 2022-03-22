//owlcarousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay:true,

        loop:true,

        margin:10,

        responsiveClass:true,

        center:true,

        nav:false,

        navText:[
          " <i class='fa fa-angle-left'></i>",
          " <i class='fa fa-angle-right'></i>"
        ],


        //shows items according to display size
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

        if (height > 80) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });
    


   
   