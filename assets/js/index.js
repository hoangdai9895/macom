$(".menu-icon").click(function () {
	$(".menu-wrap").toggleClass("close");
});

$(window).scrollTop(1);

document.addEventListener("scroll", function () {
	if (window.innerWidth > 1024) {
		if (window.pageYOffset === 0 && prevHref) {
			window.location.href = prevHref;
		}
		if (window.pageYOffset >= 2 && nextHref) {
			window.location.href = nextHref;
		}
	}
});

$(".intro__main-content__wrap").hover(function () {
	if (window.innerWidth >= 1024) {
		$(".intro__main-detail").toggleClass("hover");
	}
});

$(".screen-4__block").hover(function () {
	setInterval(function () {
		$(".screen-4__block__wraper").animate(
			{
				scrollLeft: "+=153",
			},
			1000
		);
	}, 1000);
});
