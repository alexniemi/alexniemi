$(document).ready(function(){
	

	//=================================== Sticky nav ===================================//
	$("nav").sticky({topSpacing:0});


 	//=================================== Nav Responsive ===================================//
    $('#menu').tinyNav({
       active: 'selected'
    });

    //=================================== carousel ===================================//
	$(".carousel .testimonial-carousel").jcarousel({
		visible: 2,
		scroll: 1,
		auto: false,
		wrap: "both"
	});

	//=================================== carousel ===================================//
	$(".carousel .twitter-carousel").jcarousel({
		visible: 1,
		scroll: 1,
		auto: 3,
		wrap: "both"
	});

	//=================================== Subtmit Form  =================================//

	$('#form').submit(function(event) {  
	  event.preventDefault();  
	  var url = $(this).attr('action');  
	  var datos = $(this).serialize();  
	  $.get(url, datos, function(resultado) {  
	    $('#result').html(resultado);  
	  });  
	});  

	//=================================== Ligbox  ===================================//
	
	jQuery("a[class*=html_portfolio]").fancybox({		
        'autoScale'     	: true,
        'overlayOpacity'	:	0.7,
		'overlayColor'		:	'#000000',	
		'easingIn'      	: 'easeOutBack',
		'easingOut'     	: 'easeInBack',
		'speedIn' 			: '700',
		'centerOnScroll'	: true,
		'type'				: 'iframe'
	});

	jQuery("a[class*=html_blog]").fancybox({
		'width'				: '65',
		'height'			: '110',		
        'autoScale'     	: true,
        'overlayOpacity'	:	0.7,
		'overlayColor'		:	'#000000',	
		'easingIn'      	: 'easeOutBack',
		'easingOut'     	: 'easeInBack',
		'speedIn' 			: '700',
		'centerOnScroll'	: true,
		'type'				: 'iframe'
	});

	    jQuery("a[class*=fancybox]").fancybox({
		'overlayOpacity'	:	0.7,
		'overlayColor'		:	'#000000',
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'easingIn'      	: 'easeOutBack',
		'easingOut'     	: 'easeInBack',
		'speedIn' 			: '700',
		'centerOnScroll'	: true
	});
	
	jQuery("a[class*='video_lightbox']").click(function(){
		var et_video_href = jQuery(this).attr('href'),
			et_video_link;

		et_vimeo = et_video_href.match(/vimeo.com\/(.*)/i);
		if ( et_vimeo != null )	et_video_link = 'http://player.vimeo.com/video/' + et_vimeo[1];
		else {
			et_youtube = et_video_href.match(/watch\?v=([^&]*)/i);
			if ( et_youtube != null ) et_video_link = 'http://youtube.com/embed/' + et_youtube[1];
		}
		
		jQuery.fancybox({
			'overlayOpacity'	:	0.7,
			'overlayColor'		:	'#000000',
			'autoScale'		: true,
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic',
			'easingIn'      : 'easeOutBack',
			'easingOut'     : 'easeInBack',
			'type'			: 'iframe',
			'centerOnScroll'	: true,
			'speedIn' 			: '700',
			'href'			: et_video_link
		});
		return false;
	});

	
	//=================================== Tooltips =====================================//

		if( $.fn.tooltip() ) {
			$('[class="tooltip_hover"]').tooltip();
		}
    
    //=================================== Slide =====================================//
		
	$('#slide').camera({
		height: '42%',
	    pagination: false     
	});

	//=================================== Scroll =====================================//

 	function scrollTo(target){
          var targetPosition = $(target).offset().top;
          $('html,body').animate({ scrollTop: targetPosition}, 'slow');
        }

    //=================================== Carousel Services =====================================//

    $('.flexslider').flexslider({
	   	animation: "slide",
	   	animationLoop: false,
	   	itemWidth: 200,
	   	itemMargin: 1,
	   	minItems: 2,
	   	maxItems: 4
  	});
        
});
	
	//===================================Skills =====================================//

	$(function() {
      $(".meter > span").each(function() {
        $(this)
          .data("origWidth", $(this).width())
          .width(0)
          .animate({
            width: $(this).data("origWidth")
          }, 1200);
      });
    });

	//=================================== Windy =====================================//


	var $el = $( '#wi-el' ),
		windy = $el.windy( {
			// rotation and translation boundaries for the items transitions
			boundaries : {
				rotateX : { min : 40 , max : 90 },
				rotateY : { min : -15 , max : 15 },
				rotateZ : { min : -5 , max : 5 },
				translateX : { min : -200 , max : 200 },
				translateY : { min : -300 , max : -200 },
				translateZ : { min : 50 , max : 100 }
			}
		});

		$( '#slider' ).slider( {
				animate : true,
				min: 0,
				max: windy.getItemsCount() - 1,
				slide: function( event, ui ) {
				windy.navigate( ui.value );
				}
		});