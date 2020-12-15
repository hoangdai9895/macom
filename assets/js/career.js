$(".career__item__view").click(function () {
	$(".career__popup").addClass("show");
});

$(".career__item img").click(function () {
	console.log("2");
	$(".career__popup").removeClass("show");
});
