setTimeout(() => {
	let div = document.querySelectorAll(".intro__main-content");
	for (let i = 0; i < div.length; i++) {
		div[i].classList.add("remove-fill-color");
	}
}, 7000);

// screen 2
let windowWidth = window.innerWidth;
onResize();
document.addEventListener("resize", function () {
	onResize();
});

function onResize() {
	document.getElementById("screen-2__big-cricle").style.width =
		(windowWidth * 8) / 10 + "px";
	document.getElementById("screen-2__big-cricle").style.height =
		(windowWidth * 8) / 10 + "px";
}

//document.getElementsByTagName("body")[0].style.backgroundColor = "green";
