let flag = false;
const HEIGHT = window.innerHeight;
const BLACK_SRC = "./assets/img/menu_icon.png";
const WHITE_SRC = "./assets/img/menu_icon_white.png";

const WHITE_SRC_LG = "./assets/img/Type-white.png";
const BLACK_SRC_LG = "./assets/img/Type.png";

$("#menu-icon-main").attr("src", BLACK_SRC);
$(document).scroll(function () {
	if (window.pageYOffset >= 0 && window.pageYOffset <= 1 * HEIGHT) {
		$("#menu-icon-main").attr("src", BLACK_SRC);
		$(".logo").attr("src", BLACK_SRC_LG);
		$(".main-button").css("background-color", "#fff");
		clearHandleAnimationCurvedLine();
	} else {
		$("#menu-icon-main").attr("src", WHITE_SRC);
		$(".logo").attr("src", WHITE_SRC_LG);
		$(".main-button").css("background-color", "transparent");
		handleAnimationCurvedLine();
	}
	if (
		Math.floor($(window).scrollTop() + $(window).height()) ===
		$(document).height() - 1
	) {
		$(".mouse-icon-wrap").addClass("hidden");
	} else {
		$(".mouse-icon-wrap").removeClass("hidden");
	}
});

$(".items-wrap").scroll(function () {
	const top = $("#item4").offset().top;
	const list = document.querySelectorAll(".box ul li");
	if (top <= 190 && top > -400) {
		removeClass(list, 1);
		if (!$(".wwd__item .wwd__item-right .box").hasClass("box--2")) {
			$(".wwd__item .wwd__item-right .box").addClass("box--2");
		}
	} else if (top <= -400) {
		$(".wwd__item .wwd__item-right .box").removeClass("box--2");
		removeClass(list, 2);
	} else {
		removeClass(list, 0);
	}
});

function removeClass(list, idx) {
	list.forEach(function (e, index) {
		e.classList.remove("active");
		if (index === idx) {
			e.classList.add("active");
		}
	});
}

function handleAnimationCurvedLine() {
	$(".overlay").removeClass("w-0").addClass("active");
	$(".wwd__intro--wave").addClass("active");
	timeout1 = setTimeout(function () {
		$(".dot-1").addClass("active");
	}, 1000);

	timeout2 = setTimeout(function () {
		$(".dot-2").addClass("active");
	}, 1700);

	timeout3 = setTimeout(function () {
		$(".dot-3").addClass("active");
	}, 2400);

	timeout4 = setTimeout(function () {
		$(".dot-4").addClass("active");
	}, 3100);
}

function clearHandleAnimationCurvedLine() {
	$(".overlay").removeClass("active").addClass("w-0");
	$(".dot").removeClass("active");
	$(".wwd__intro--wave").removeClass("active");
}
