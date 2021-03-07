const left = document.getElementById("e-left");
const right = document.getElementById("e-right");

closeEyes();

function closeEyes() {
	window.setTimeout(() => {
		left.style = " transform: scaleY(0.001)";
		right.style = " transform: scaleY(0.001)";
		openEyes();
	}, 3000);
}

function openEyes() {
	window.setTimeout(() => {
		left.style = " transform: scaleY(1)";
		right.style = " transform: scaleY(1)";
		closeEyes();
	}, 200);
}
