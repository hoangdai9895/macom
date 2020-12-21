setTimeout(() => {
	let div = document.querySelectorAll(".intro__main-content");
	for (let i = 0; i < div.length; i++) {
		div[i].classList.add("remove-fill-color");
	}
}, 7000);

// screen 2
let windowWidth = window.innerWidth;

$(".menu-icon").click(function () {
	$(".menu-wrap").toggleClass("close");
});

document.addEventListener("scroll", function () {
	console.log(window.pageYOffset);
	if (window.pageYOffset >= 1) {
		window.location.href = nextHref;
	}
});
