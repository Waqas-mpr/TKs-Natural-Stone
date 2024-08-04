let menuList = document.getElementById("menuList");
let categoryMenuList = document.getElementById("categoryMenuList");

menuList.style.maxHeight = "0px";
categoryMenuList.style.maxHeight = "0px";

function toggleMainMenu() {
	if (menuList.style.maxHeight == "0px") {
		menuList.style.maxHeight = "300px";
	} else {
		menuList.style.maxHeight = "0px";
	}
}

function toggleCategoryMenu() {
	if (categoryMenuList.style.maxHeight == "0px") {
		categoryMenuList.style.maxHeight = "300px";
	} else {
		categoryMenuList.style.maxHeight = "0px";
	}
}
