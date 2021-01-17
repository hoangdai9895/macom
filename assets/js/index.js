$(".menu-icon").click(function () {
	$(".menu-wrap").toggleClass("close");
	$(".main-button") &&
		$(".main-button").css("background-color", "transparent");
	$(".menu__main ul li ").toggleClass(
		"animate__animated animate__fadeInDown delay-menu-item"
	);
	$(".menu__decor").toggleClass("active");
	for (
		i = 0;
		i < document.querySelectorAll(".menu__main ul li ").length;
		i++
	) {
		console.log(i);
		document
			.querySelectorAll(".menu__main ul li ")
			[i].classList.toggle("delay-menu-item-" + i);
	}
	// }, 500);
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
	});
});
