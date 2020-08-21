var Breadmotes = document.getElementsByClassName("breadmotes")[0];

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
		console.log("ds");
	}
});

setInterval(() => {
	if (easing) {
		adf++;
		if (adf < 400) {
			switch (test) 
			{
				case false:
					Breadmotes.style.left = CubicOut(adf/1000, -610, 1550, 0.4) + "px";
					break;
				case true:
					Breadmotes.style.left = CubicOut(adf/1000, 940, -1550, 0.4) + "px";
					break;
			}
		}
		else easing = false;
	}
}, 1);