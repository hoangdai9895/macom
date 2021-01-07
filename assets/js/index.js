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

$(".screen-3__list li").each(function () {
	$(this).click(function () {
		$(".screen-3-right__img").removeClass("animate__slideInDown");
		$(".screen-3-right__img").addClass("animate__slideOutDown");
		$(".screen-3-right__img").on("animationend", function () {
			$(".screen-3-right__img").removeClass(" animate__slideOutDown");
			$(".screen-3-right__img").addClass(" animate__slideInDown");
		});

		// setTimeout(function () {
		// 	$(".screen-3-right__img").addClass(" animate__slideInDown");
		// }, 250);
		// setTimeout(function () {
		// 	$(".screen-3-right__img").removeClass(" animate__slideOutDown");
		// });
	});
});
