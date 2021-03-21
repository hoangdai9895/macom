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



$(".intro__main-content__wrap").hover(function () {
	if (window.innerWidth >= 1024) {
		$(".intro__main-detail").toggleClass("hover");
	}
});

// $(".screen-3__list li").each(function () {
// 	$(this).click(function () {
// 		$(".screen-3-right__img.test1").removeClass("animate__slideInDown");
// 		$(".screen-3-right__img.test1").addClass("animate__slideOutDown");
// 		$(".screen-3-right__img.test1").on("animationend", function () {
// 			$(".screen-3-right__img.test1").removeClass(" animate__slideOutDown");
// 			$(".screen-3-right__img.test1").addClass(" animate__slideInDown");
// 		});
// 	});
// });
let screen1 = $(".screen-3-right__img.test1")
let screen2 = $(".screen-3-right__img.test2")
let screen3 = $(".screen-3-right__img.test3")
let screen4 = $(".screen-3-right__img.test4")
let screen5 = $(".screen-3-right__img.test5")
let check1 = $(".screen-3-right__list-wrap.check1")
let check2 = $(".screen-3-right__list-wrap.check2")
let check3 = $(".screen-3-right__list-wrap.check3")
let check4 = $(".screen-3-right__list-wrap.check4")
let check5 = $(".screen-3-right__list-wrap.check5")
	$(".screen-3__list li.test1").click(function () {
		screen1.css('display','block')
		screen2.css('display','none')
		screen3.css('display','none')
		screen4.css('display','none')
		screen5.css('display','none')
		check1.css('display','block')
		check2.css('display','none')
		check3.css('display','none')
		check4.css('display','none')
		check5.css('display','none')
		// screen1.removeClass("animate__slideInDown");
		// screen1.addClass("animate__slideOutDown");
		screen1.on("animationend", function () {
			screen1.removeClass(" animate__slideOutDown");
			screen1.addClass(" animate__slideInDown");
		});
	});

$(".screen-3__list li.test2").click(function () {
	screen1.css('display','none')
	screen2.css('display','block')
	screen3.css('display','none')
	screen4.css('display','none')
	screen5.css('display','none')
	check1.css('display','none')
	check2.css('display','block')
	check3.css('display','none')
	check4.css('display','none')
	check5.css('display','none')
	// screen2.removeClass("animate__slideInDown");
	// screen2.addClass("animate__slideOutDown");
	screen2.on("animationend", function () {
		screen2.removeClass(" animate__slideOutDown");
		screen2.addClass(" animate__slideInDown");
	});
});

$(".screen-3__list li.test3").click(function () {
	screen1.css('display','none')
	screen2.css('display','none')
	screen3.css('display','block')
	screen4.css('display','none')
	screen5.css('display','none')
	check1.css('display','none')
	check2.css('display','none')
	check3.css('display','block')
	check4.css('display','none')
	check5.css('display','none')

	// screen3.removeClass("animate__slideInDown");
	// screen3.addClass("animate__slideOutDown");
	screen3.on("animationend", function () {
		screen3.removeClass(" animate__slideOutDown");
		screen3.addClass(" animate__slideInDown");
	});
});

$(".screen-3__list li.test4").click(function () {
	screen1.css('display','none')
	screen3.css('display','none')
	screen2.css('display','none')
	screen4.css('display','block')
	screen5.css('display','none')

	check1.css('display','none')
	check2.css('display','none')
	check3.css('display','none')
	check4.css('display','block')
	check5.css('display','none')
	// screen4.removeClass("animate__slideInDown");
	// screen4.addClass("animate__slideOutDown");
	screen4.on("animationend", function () {
		screen4.removeClass(" animate__slideOutDown");
		screen4.addClass(" animate__slideInDown");
	});
});

$(".screen-3__list li.test5").click(function () {
	screen1.css('display','none')
	screen3.css('display','none')
	screen2.css('display','none')
	screen4.css('display','none')
	screen5.css('display','block')

	check1.css('display','none')
	check2.css('display','none')
	check3.css('display','none')
	check4.css('display','none')
	check5.css('display','block')
	// screen5.removeClass("animate__slideInDown");
	// screen5.addClass("animate__slideOutDown");
	screen5.on("animationend", function () {
		screen5.removeClass(" animate__slideOutDown");
		screen5.addClass(" animate__slideInDown");
	});
});