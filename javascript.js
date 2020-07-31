var void1Pos = document.getElementsByClassName("voidbar1")[0];
var void2Pos = document.getElementsByClassName("voidbar2")[0];
var Breadmotes = document.getElementsByClassName("breadmotes")[0];
var Background = document.getElementsByClassName("background")[0];
var MinokahText = document.getElementById("minokahtext");
var MoodText = document.getElementById("moodtext");
var SecondScrText = document.getElementById("secondscrtext");

void1Pos.style.left = "0px";
void2Pos.style.left = "1920px";

var test = false;
var easing = false;
var adf = 0;

function CubicOut(t, b, c, d) {
	return c*((t=t/d-1)*t*t + 1) + b;
}

document.addEventListener('keydown', function(event) {
	if(event.keyCode == 89 && adf >= 400) {
		test = !test;
		easing = true;
		adf = 0;
	}
});

setInterval(() => {
	void1Pos.style.left = parseFloat(void1Pos.style.left) - 0.5 + "px";
	void2Pos.style.left = parseFloat(void2Pos.style.left) - 0.5 + "px";
	if (parseFloat(void1Pos.style.left) <= -1920) void1Pos.style.left = "1920px";
	if (parseFloat(void2Pos.style.left) <= -1920) void2Pos.style.left = "1920px";
	
	if (easing) {
		if (adf < 400) {
			switch (test) 
			{
				case false:
					if (adf < 300) Background.style.left = CubicOut(adf, -1920, 1920, 300) + "px";
					Breadmotes.style.left = CubicOut(adf, -610, 1550, 400) + "px";
					MinokahText.style.left = CubicOut(adf, -1435, 1550, 400) + "px";
					MoodText.style.left = CubicOut(adf, -1055, 1550, 400) + "px";
					SecondScrText.style.left = CubicOut(adf, 950, 1550, 400) + "px";
					break;
				case true:
					if (adf < 300) Background.style.left = CubicOut(adf, 0, -1920, 300) + "px";
					Breadmotes.style.left = CubicOut(adf, 940, -1550, 400) + "px";
					MinokahText.style.left = CubicOut(adf, 120, -1550, 400) + "px";
					MoodText.style.left = CubicOut(adf, -495, -1550, 400) + "px";
					SecondScrText.style.left = CubicOut(adf, 2500, -1550, 400) + "px";
					break;
			}
		}
		else easing = false;
	}
}, 1000/144);

setInterval(() => {
	adf++;
}, 1);