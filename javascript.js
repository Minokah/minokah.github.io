var void1Pos = document.getElementsByClassName("voidbar1")[0];
var void2Pos = document.getElementsByClassName("voidbar2")[0];
void1Pos.style.left = "0px";
void2Pos.style.left = "1920px";

setInterval(() => {
	void1Pos.style.left = parseFloat(void1Pos.style.left) - 0.5 + "px";
	void2Pos.style.left = parseFloat(void2Pos.style.left) - 0.5 + "px";
	if (parseFloat(void1Pos.style.left) <= -1920) void1Pos.style.left = "1920px";
	if (parseFloat(void2Pos.style.left) <= -1920) void2Pos.style.left = "1920px";
}, 1000/144);