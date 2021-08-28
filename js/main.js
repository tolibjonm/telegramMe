$(function () {
	$('.left__slider').slick({
		// dots: true,
		autoplay: true,
		infinite: true,
		speed: 300,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		// prevArrow:
		// '<button type="button" class="artical-slider__arrow artical-slider__arrowleft"><i class="fa fas fa-angle-left" aria-hidden="true"></i></button>',
		// nextArrow:
		// '<button type="button" class="artical-slider__arrow artical-slider__arrowright"><i class="fa fas fa-angle-right" aria-hidden="true"></i></button>',
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });
			  
	// $(".header__slider").slick({
	// 	// dots: true,
	// 	infinite: false,
	// 	// autoplay: true,
	// 	// autoplaySpeed: 2000,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: true,
    //     speed: 500,
	// 	fade: true,
	// 	cssEase: "linear",
	// 	prevArrow:
	// 		'<button type="button" class="artical-slider__arrow artical-slider__arrowleft"><i class="fa fas fa-angle-left" aria-hidden="true"></i></button>',
	// 	nextArrow:
	// 		'<button type="button" class="artical-slider__arrow artical-slider__arrowright"><i class="fa fas fa-angle-right" aria-hidden="true"></i></button>',
	// 	responsive: [
	// 		{
	// 			breakpoint: 1024,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 				infinite: false,
	// 				dots: false,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 600,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				arrows: false,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				arrows: false,
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 	],
	// })

	// $(".categores__slider").slick({
	// 	// dots: true,
	// 	infinite: false,
	// 	// autoplay: true,
	// 	// autoplaySpeed: 2000,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: true,
    //     speed: 500,
	// 	fade: true,
	// 	cssEase: "linear",
	// 	prevArrow:
	// 		'<button type="button" class="artical-slider__arrow filter__arrowleft artical-slider__arrowleft"><i class="fa fas slic__filter fa-angle-left" aria-hidden="true"></i></button>',
	// 	nextArrow:
	// 		'<button type="button" class="artical-slider__arrow filter__arrowright artical-slider__arrowright"><i class="fa fas slic__filter fa-angle-right" aria-hidden="true"></i></button>',
	// 	responsive: [
	// 		{
	// 			breakpoint: 1024,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 				infinite: false,
	// 				dots: false,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 600,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 	],
	// })

	// $(".user__item-slider").slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	speed: 500,
    //     arrows: false,
	// 	fade: true,
	// 	cssEase: "linear",
	// 	asNavFor: ".user__comment-liner",
	// })
	// $(".user__comment-liner").slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	// arrows: false,
    //     prevArrow:
	// 		'<button type="button" class="artical-slider__arrow filter__arrowleft user__arrow user__left artical-slider__arrowleft"><i class="fa fas slic__filter fa-angle-left" aria-hidden="true"></i></button>',
	// 	nextArrow:
	// 		'<button type="button" class="artical-slider__arrow filter__arrowright user__arrow user__right artical-slider__arrowright"><i class="fa fas slic__filter fa-angle-right" aria-hidden="true"></i></button>',
	// 	asNavFor: ".user__item-slider",
	// 	speed: 500,
	// 	fade: true,
	// 	cssEase: "linear"
	// })

	// $("p").slick({})

	// var mixer = mixitup(".categores__slider")

	// let cgrysBtn = document.querySelector(".categorys__btn")

	// cgrysBtn.addEventListener("click", function () {
	// 	this.addEventListener("color", "red")
	// })
})
