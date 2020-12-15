let flag = false;
const HEIGHT = window.innerHeight;
const BLACK_SRC = "/assets/img/menu_icon.png";
const WHITE_SRC = "/assets/img/menu_icon_white.png";

const WHITE_SRC_LG = "/assets/img/Type-white.png";
const BLACK_SRC_LG = "/assets/img/Type.png";

$("#menu-icon-main").attr("src", WHITE_SRC);
$(document).scroll(function () {
	console.log(window.pageYOffset);
	if (window.pageYOffset >= HEIGHT && window.pageYOffset <= 4 * HEIGHT) {
		$("#menu-icon-main").attr("src", BLACK_SRC);
		$(".logo").attr("src", BLACK_SRC_LG);
	} else {
		$("#menu-icon-main").attr("src", WHITE_SRC);
		$(".logo").attr("src", WHITE_SRC_LG);
	}
	if ($(window).scrollTop() + $(window).height() == $(document).height()) {
		$(".mouse-icon-wrap").addClass("hidden");
	} else {
		$(".mouse-icon-wrap").removeClass("hidden");
	}
});
