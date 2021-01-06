function changeVisibility() {
	
	var taggedElement = document.getElementById("info"),
		style = window.getComputedStyle(taggedElement).getPropertyValue("display");
	
	console.log(style);
	if (style == "none") {
		taggedElement.style.display = "block";
	} else {
		taggedElement.style.display = "none";
	}
}