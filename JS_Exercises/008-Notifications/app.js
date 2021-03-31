var isSearchBarVisible = false;
var isSubMenuVisible = false;

function showSearchBar() {
	const searchBar = document.querySelector(".search-input");
	if (isSearchBarVisible) {
		isSearchBarVisible = false;
		searchBar.style = "opacity:0;pointer-events: none;";
	} else {
		isSearchBarVisible = true;
		searchBar.style = "opacity:1; transform: none;pointer-events: initial;";
	}
}

function showSubMenu() {
	const subMenu = document.querySelector(".sub-menu");
	if (isSubMenuVisible) {
		subMenu.style = "transform: none;";
		isSubMenuVisible = false;
	} else {
		subMenu.style = "transform: translateX(-340px);";
		isSubMenuVisible = true;
	}
}

function iconChangeColor(color) {
	const linetop = document.querySelector(".line-top");
	const linebottom = document.querySelector(".line-bottom");
	const circle = document.querySelector(".circle");
	console.log(color);

	linetop.style = `background-color:${color}`;
	linebottom.style = `background-color:${color}`;
	circle.style = `background-color:${color}`;
}
