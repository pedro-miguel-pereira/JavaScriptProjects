const bands = [
	document.getElementById("b1"),
	document.getElementById("b2"),
	document.getElementById("b3"),
];

const texts = [
	document.getElementById("t1"),
	document.getElementById("t2"),
	document.getElementById("t3"),
	document.getElementById("t4"),
];

function handleMouseOverFirst() {
	bands[0].style = "transform: scaleX(2.2);";
	texts[0].style = "opacity: 1; transform: scale(2.2);";
	bands[1].style = "transform: scaleX(1.4);";
	bands[2].style = "transform: scaleX(1.14);";
}

function handleMouseOverSecond() {
	bands[0].style = "transform: scaleX(0.6);";
	bands[1].style = "transform: scaleX(1.4);";
	texts[1].style = "opacity: 1; transform: scale(2.2);";
	bands[2].style = "transform: scaleX(1.14);";
}

function handleMouseOverThird() {
	bands[0].style = "transform: scaleX(0.6);";
	bands[1].style = "transform: scaleX(0.6);";
	bands[2].style = "transform: scaleX(1.14);";
	texts[2].style = "opacity: 1; transform: scale(2.2);";
}

function handleMouseOverFourth() {
	bands[0].style = "transform: scaleX(0.6);";
	bands[1].style = "transform: scaleX(0.6);";
	bands[2].style = "transform: scaleX(0.6);";
	texts[3].style = "opacity: 1; transform: scale(2.2);";
}

function handleMouseOut() {
	for (let i = 0; i != bands.length; i++)
		bands[i].style = "transform: scaleX(1);";
	for (let i = 0; i != texts.length; i++) texts[i].style = "color:transparent;";
}
