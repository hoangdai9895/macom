$(".menu-icon").click(function () {
	$(".menu-wrap").toggleClass("close");
});

$(window).scrollTop(1);

// document.addEventListener("scroll", function () {
// 	if (window.innerWidth > 1024) {
// 		if (window.pageYOffset === 0 && prevHref) {
// 			window.location.href = prevHref;
// 		}
// 		if (window.pageYOffset >= 2 && nextHref) {
// 			window.location.href = nextHref;
// 		}
// 	}
// });

$(".intro__main-content__wrap").hover(function () {
	if (window.innerWidth >= 1024) {
		$(".intro__main-detail").toggleClass("hover");
	}
});
function getPosition(element) {
    var xPosition = 0,
        yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft + element.clientLeft);
        yPosition += (element.offsetTop + element.clientTop);
        element = element.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}

function getScroll() {
    return {
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    };
}

function getWindowOffset(element) {
    var pos = getPosition(element),
    scroll = getScroll();

    return {
            x: (pos.x - scroll.x),
            y: (pos.y - scroll.y)
    };
}

$("body").mousemove(function(e) {
	// console.log(e.pageX, e.pageY)
	var element = document.querySelector('.dot-fill.dot-3 .dot .circle');
	var topPos = element.getBoundingClientRect().top 
	var leftPos = element.getBoundingClientRect().left 
	$(".dot__info__3").css("top", topPos - 38 + "px")
	$(".dot__info__3").css("left", leftPos + 0 + "px")
});

$(".dot-3 .dot").hover(function(){
	$(".dot__info__3").toggleClass("active")
})


