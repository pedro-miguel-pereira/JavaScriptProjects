const first = document.getElementById("first");
const last = document.getElementById("last");

firstLeft();

function firstLeft() {
	first.style =
		"transition: transform 500ms ease-out; transform: rotate(45deg);";
	window.setTimeout(() => firstRight(), 500);
}

function firstRight() {
	first.style = "transition: transform 500ms ease-in; transform: rotate(0deg)";
	window.setTimeout(() => lastRight(), 500);
}

function lastRight() {
	last.style =
		"transition: transform 500ms ease-out; transform: rotate(-45deg)";
	window.setTimeout(() => lastLeft(), 500);
}

function lastLeft() {
	last.style = "transition: transform 500ms ease-in; transform: rotate(0deg)";
	window.setTimeout(() => firstLeft(), 500);
}
