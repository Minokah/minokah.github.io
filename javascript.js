var ListFrame = document.getElementById("ListFrame");
var ProjectsButton = document.getElementById("ProjectsButton");
var GalleryButton = document.getElementById("GalleryButton");
var ListEmptyText = document.getElementById("ListEmptyText");

function CubicOut(t, b, c, d) {
	return c*((t=t/d-1)*t*t + 1) + b;
}

var DiscordSmallFrame = document.getElementById("DiscordSmallFrame");
var DiscordSmallArrow = document.getElementById("DiscordSmallArrow");
var DiscordSmallState = document.getElementById("DiscordSmallState");
var DiscordSmallActive = false;

DiscordSmallArrow.onclick = function() {
	DiscordSmallActive = !DiscordSmallActive;
	
	if (DiscordSmallActive) {
		DiscordSmallFrame.style.height = "100px";
		DiscordSmallState.style.opacity = 1;
	}
	else {
		DiscordSmallFrame.style.height = "50px";
		DiscordSmallState.style.opacity = 0;
	}
}

var ListActive = false;
var CurrentActive = 0;
// 0 projects
// 1 gallery

var ProjectsContainer = document.getElementById("ProjectsContainer");

ProjectsButton.onmouseover = function() { ProjectsButtonHandler(true); }
ProjectsButton.onmouseout = function() { ProjectsButtonHandler(false); }

ProjectsButton.onclick = function() { ToggleList(0); }
GalleryButton.onclick = function() { ToggleList(1); }

GalleryButton.onmouseover = function() { GalleryButtonHandler(true) };
GalleryButton.onmouseout = function() { GalleryButtonHandler(false) };

function ProjectsButtonHandler(toggle) {
	if (toggle || ListActive && CurrentActive == 0) ProjectsButton.style.height = "65px";
	else ProjectsButton.style.height = "0px";
}

function GalleryButtonHandler(toggle) {
	if (toggle || ListActive && CurrentActive == 1) GalleryButton.style.height = "65px";
	else GalleryButton.style.height = "0px";
}

function ToggleList(num) {
	if (num == CurrentActive || !ListActive) ListActive = !ListActive;
	CurrentActive = num;

	if (num == 0) {
		GalleryButton.style.height = "0px";
		ListEmptyText.innerHTML = "Projects is empty";
		ListEmptyText.style.opacity = 1;

		GalleryContainer.style.opacity = 0;
	}
	else if (num == 1) {
		ProjectsButton.style.height = "0px";
		/*ListEmptyText.innerHTML = "Gallery is empty";*/
		ListEmptyText.style.opacity = 0;

		GalleryContainer.style.opacity = 1;
	}

	if (ListActive) {
		ListFrame.style.opacity = 1;
		ListFrame.style.height = "350px";
	}
	else {
		ListFrame.style.opacity = 0;
		ListFrame.style.height = "0px";
		ListEmptyText.style.opacity = 0;

		GalleryContainer.style.opacity = 0;
		ProjectsContainer.style.opacity = 0;
	}
}

var TwitterButton = document.getElementById("TwitterButton");
var YouTubeButton = document.getElementById("YouTubeButton");
var SteamButton = document.getElementById("SteamButton");

TwitterButton.onclick = function() { window.open("http://twitter.com/minokah_"); }
YouTubeButton.onclick = function() { window.open("https://www.youtube.com/channel/UCyQkTJLpfR0PEMvDQQH14cw"); }
SteamButton.onclick = function() { window.open("https://steamcommunity.com/id/minokah/"); }