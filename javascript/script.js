let menuList = document.getElementById("menuList");
let menuIcon = document.getElementById("menu-icon");
let closedIcon = document.getElementById("closed-icon");

menuList.style.maxHeight = "0px";

function toggleMenu() {
	if (menuList.style.maxHeight == "0px") {
		menuList.style.maxHeight = "300px";
	} else {
		menuList.style.maxHeight = "0px";
	}
	// if (menuList.classList.contains("display-none")) {
	//     menuList.add
	// } else alert("added");
}
