$(".career__content .career__item").click(function () {
	console.log('1')
	$(".career__popup").addClass("show");
});

$(".career__item img").click(function () {
	$(".career__popup").removeClass("show");
});


$(".overlay").click(function () {
	$(".career__popup").removeClass("show");
});

