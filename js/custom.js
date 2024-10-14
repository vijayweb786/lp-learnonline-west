

$("#mca-slider, #mba-slider, #jmc-slider, #mcom-slider, #bca-slider, #bba-slider, #bcom-slider, #ba-slider, #bajmc-slider, #msc-slider").owlCarousel({
    //autoPlay: 5000, //Set AutoPlay to 5 seconds
    autoplay: true,
    autoplayTimeout: 1000,
    //smartSpeed: 2000, // Default is 250
    items: 4, //Set Testimonial items
    loop: false,
    margin: 0,
    singleItem: false,
    touchDrag: true,
    mouseDrag: true,
    pagination: false,
    nav: false,
    dots: true,
    navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
responsiveClass:true,
responsive:{
    0:{
        items:1,
        loop: true,
    },
    480:{
        items:1,
        loop: true,
    },
    568:{
        items:1,
        loop: true,
    },
    600:{
        items:2,
    },
    667:{
        items:2,
    },
    1000:{
        items:4
    }
}   
    
});

$("#amen-slider, #process-slider").owlCarousel({
    autoplay: true,
    items: 4, //Set Testimonial items
    loop: false,
    margin: 0,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    pagination: true,
    nav: false,
    dots: true,
    navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
responsiveClass:true,
responsive:{
    0:{
        items:2,
        
    },
    480:{
        items:2,
        
    },
    568:{
        items:2,
    },
    600:{
        items:3,
    },
    667:{
        items:3,
    },
    1000:{
        items:4
    }
}   
    
});

$("#eligi-slider").owlCarousel({
    //autoPlay: 5000, //Set AutoPlay to 5 seconds
    autoplay: true,
    //smartSpeed: 2000, // Default is 250
    items: 4, //Set Testimonial items
    loop: false,
    margin: 0,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    pagination: true,
    nav: false,
    dots: true,
    navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
    0:{
    items:1,
    autoplayTimeout: 2000,
    loop: true,
    },
    480:{
    items:1,
    autoplayTimeout: 2000,
    loop: true,
    },
    568:{
    items:1,
    autoplayTimeout: 2000,
    },
    600:{
    items:2,
    },
    667:{
    items:2,
    },
    1000:{
    items:4
    }
    }
    });

    
$("#persure-slider").owlCarousel({
    //autoPlay: 5000, //Set AutoPlay to 5 seconds
    autoplay: true,
    //smartSpeed: 2000, // Default is 250
    items: 3, //Set Testimonial items
    loop: false,
    margin: 15,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    pagination: true,
    nav: false,
    dots: true,
    navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
    0:{
    items:1,
    autoplayTimeout: 2000,
    loop: true,
    },
    480:{
    items:1,
    autoplayTimeout: 2000,
    loop: true,
    },
    568:{
    items:1,
    autoplayTimeout: 2000,
    },
    600:{
    items:2,
    },
    667:{
    items:2,
    },
    1000:{
    items:3
    }
    }
    });

(function ($){
	$.fn.responsiveTabs = function() {
	this.addClass('responsive-tabs'),
	this.append($('<span class="dropdown-arrow"></span>')),

	this.on("click", "li > a.active, span.dropdown-arrow", function (){
			this.toggleClass('open');
		}.bind(this)), this.on("click", "li > a:not(.active)", function() {
	        this.removeClass("open")
	    }.bind(this)); 
	}
})(jQuery);

/**
     * ======================================
     * 37. title animation
     * ======================================
     */
    if ($(".title-anim").length > 0) {
      let char_come = gsap.utils.toArray(".title-anim");
      char_come.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
          type: "chars, words",
          lineThreshold: 0.5,
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char_come,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });
        tl2.from(split_char.chars, {
          duration: 0.8,
          x: 70,
          autoAlpha: 0,
          stagger: 0.03,
        });
      });
    }


    if ($(".odometer").length) {
        var odo = $(".odometer");
        odo.each(function () {
          $(this).appear(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
          });
        });
      }
/* -------------------------------  
         WOW ANIMATED JS START
/* ----------------------------- */
// Elements Animation
    if($('.wow').length){
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true       // act on asynchronously loaded content (default is true)
          }
        );
        wow.init();
    }



/* -------------------------------	
		INPUT PLACEHOLDER
/* ----------------------------- */

$('input,textarea').focus(function(){

   $(this).data('placeholder',$(this).attr('placeholder'))

          .attr('placeholder','');

}).blur(function(){

   $(this).attr('placeholder',$(this).data('placeholder'));

});

/* ---------------------	
		back-top
/* --------------------- */

if ($('#back-top').length) {

    var scrollTrigger = 100, // px

        backToTop = function () {

            var scrollTop = $(window).scrollTop();

            if (scrollTop > scrollTrigger) {

                $('#back-top').addClass('show');

            } else {

                $('#back-top').removeClass('show');

            }

        };

    backToTop();

    $(window).on('scroll', function () {

        backToTop();

    });

    $('#back-top').on('click', function (e) {

        e.preventDefault();

        $('html,body').animate({

            scrollTop: 0

        }, 700);

    });

}

var stickyNavTop = $('#header').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
if (scrollTop > stickyNavTop) { 

    $('#header').addClass('sticky');

} else {

    $('#header').removeClass('sticky'); 

}

};

stickyNav();

 

$(window).scroll(function() {

    stickyNav();

});

$('a[href^="#applyBox"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 100);
    }
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('#sideNavi').fadeIn();
    } else {
        $('#sideNavi').fadeOut();
    }

});