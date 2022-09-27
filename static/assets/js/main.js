(function ($) {
	"use strict";

/*=============================================
	=    		 Preloader			      =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
	mainSlider();
	easyPieChart();
	wowAnimation();
});


/*=============================================
	=          One page Menu               =
=============================================*/
$(document).ready(function () {
	$("html").css('scroll-behavior', 'auto');
});
var scrollLink = $('.section-link');
// Active link switching
$(window).scroll(function () {
	var scrollbarLocation = $(this).scrollTop();

	scrollLink.each(function () {

		var sectionOffset = $(this.hash).offset().top - 90;

		if (sectionOffset <= scrollbarLocation) {
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
		}
	});
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
	$('a.section-link[href*="#"]:not([href="#"])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - 80)
				}, 1200, "easeInOutExpo");
				return false;
			}
		}
	});
});


/*=============================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.menu-area li.menu-item-has-children ul').length) {
	$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

}
//Mobile Nav Hide Show
if ($('.mobile-menu').length) {

	var mobileMenuContent = $('.menu-area .main-menu').html();
	$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(500);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.menu-backdrop, .mobile-menu .close-btn, .mobile-menu .navigation li a').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
};


/*=============================================
	=          Data Background               =
=============================================*/
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})


/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}


/*=============================================
	=            Header Search            =
=============================================*/
$(".header-search > a").on('click', function () {
	$(".search-popup-wrap").slideToggle();
	return false;
});
$(".search-close").on('click', function () {
	$(".search-popup-wrap").slideUp(500);
});


/*=============================================
	=            Custom Scroll            =
=============================================*/
$(window).on("load", function () {
	if ($(".navigation .scroll, .off-canvas-widget.scroll").length) {
		$(".navigation .scroll, .off-canvas-widget.scroll").mCustomScrollbar({
			mouseWheelPixels: 50,
			scrollInertia: 0,
		});
	}
});


/*=============================================
	=    		 Main Slider		      =
=============================================*/
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}


/*=============================================
	=         Tooltip Active 	        =
=============================================*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*=============================================
	=    		Cart Active 	        =
=============================================*/
$('.qtybutton-box span').on("click", function () {
	var $input = $(this).parents('.num-block').find('input.in-num');
	if ($(this).hasClass('minus')) {
		var count = parseFloat($input.val()) - 1;
		count = count < 1 ? 1 : count;
		if (count < 2) {
			$(this).addClass('dis');
		}
		else {
			$(this).removeClass('dis');
		}
		$input.val(count);
	}
	else {
		var count = parseFloat($input.val()) + 1
		$input.val(count);
		if (count > 1) {
			$(this).parents('.num-block').find(('.minus')).removeClass('dis');
		}
	}
	$input.change();
	return false;
});


/*=============================================
	=          Active Class               =
=============================================*/
$('.features-item').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.features-item').removeClass('active');
})


/*=============================================
	=    		Brand Active		      =
=============================================*/
$('.brand-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});


/*=============================================
	=           Video Active             =
=============================================*/
$('.video-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	fade: true,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<span class="slick-prev"><i class="fal fa-long-arrow-left"></i></span>',
	nextArrow: '<span class="slick-next"><i class="fal fa-long-arrow-right"></i></span>',
	appendArrows: ".slider-nav",
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 2,
				centerMode: true,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
			}
		},
	]
});


/*=============================================
	=           Testimonial Active        =
=============================================*/
$('.testimonial-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	centerPadding: 0,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});


/*=============================================
	=           Product Active             =
=============================================*/
$('.related-product-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});


/*=============================================
	=            Blog Active               =
=============================================*/
$('.blog-thumb-active').slick({
	dots: false,
	infinite: true,
	arrows: true,
	speed: 1500,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
});


/*=============================================
	=         Cart Active Two            =
=============================================*/
$(".quickview-cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
$(".qtybutton").on("click", function () {
	var $button = $(this);
	var oldValue = $button.parent().find("input").val();
	if ($button.text() == "+") {
		var newVal = parseFloat(oldValue) + 1;
	} else {
		// Don't allow decrementing below zero
		if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
		} else {
			newVal = 0;
		}
	}
	$button.parent().find("input").val(newVal);
});


/*=============================================
	=    	 Slider Range Active  	         =
=============================================*/
$("#slider-range").slider({
	range: true,
	min: 20,
	max: 400,
	values: [120, 280],
	slide: function (event, ui) {
		$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
	}
});
$("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));


/*=============================================
	=    		Magnific Popup		      =
=============================================*/
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	},
});
/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/*=============================================
	=          easyPieChart Active          =
=============================================*/
function easyPieChart() {
	$('.fact-item').on('inview', function (event, isInView) {
		if (isInView) {
			$('.chart').easyPieChart({
				scaleLength: 0,
				lineWidth: 7,
				trackWidth: 3,
				size: 70,
				lineCap: 'round',
				rotate: 360,
				trackColor: '#f4f4f4',
				barColor: function () {
					var ctx = this.renderer.getCtx();
					var canvas = this.renderer.getCanvas();
					var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
					gradient.addColorStop(0, "#ff5600");
					gradient.addColorStop(1, "#ffa705");
					return gradient;
				}
			});
		}
	});
	$('.fact-item-two').on('inview', function (event, isInView) {
		if (isInView) {
			$('.chart-two').easyPieChart({
				scaleLength: 0,
				lineWidth: 7,
				trackWidth: 3,
				size: 70,
				lineCap: 'round',
				rotate: 360,
				trackColor: '#f4f4f4',
				barColor: function () {
					var ctx = this.renderer.getCtx();
					var canvas = this.renderer.getCanvas();
					var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
					gradient.addColorStop(0, "#00b0d5");
					gradient.addColorStop(1, "#00b0d5");
					return gradient;
				}
			});
		}
	});
	$('.fact-item-three').on('inview', function (event, isInView) {
		if (isInView) {
			$('.chart-two').easyPieChart({
				scaleLength: 0,
				lineWidth: 7,
				trackWidth: 3,
				size: 70,
				lineCap: 'round',
				rotate: 360,
				trackColor: '#f4f4f4',
				barColor: function () {
					var ctx = this.renderer.getCtx();
					var canvas = this.renderer.getCanvas();
					var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
					gradient.addColorStop(0, "#8BCD2B");
					gradient.addColorStop(1, "#8BCD2B");
					return gradient;
				}
			});
		}
	});
}


/*=============================================
	=    		Isotope	Active  	      =
=============================================*/
$('.gallery-product-active').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.gallery-product-active').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: 1,
		}
	});
	// filter items on button click
	$('.product-menu').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

});
//for menu active class
$('.product-menu button').on('click', function (event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


/*=============================================
	=    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}


})(jQuery);