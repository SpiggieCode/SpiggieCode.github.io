/*function changeVisibility() {
	
	var taggedElement = document.getElementById("info"),
		style = window.getComputedStyle(taggedElement).getPropertyValue("display");
	
	console.log(style);
	if (style == "none") {
		taggedElement.style.display = "block";
	} else {
		taggedElement.style.display = "none";
	}
}*/

function toggleCandle() {
	let candle = document.activeElement;
	//candle.style.backgroundImage = "url('background/candleOut.gif')";
	candle.style.backgroundImage = "url('https://spiggiecode.github.io/background/candleOut.gif')";
}