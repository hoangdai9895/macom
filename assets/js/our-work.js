$(document).ready(function () {
	$(".slides").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		dots: true,
		prevArrow:
			"<img src='./assets/img/arr-left.png' class='slide-arr arr-left'/>",
		nextArrow:
			"<img src='./assets/img/arr-right.png' class='slide-arr arr-right'/>",
	});
});
