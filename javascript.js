// edit quote in center
var QuoteText = document.getElementById("QuoteText");
var QuoteAuthor = document.getElementById("QuoteAuthor");
var ChangeQuoteLabel = document.getElementById("ChangeQuoteLabel");

var MinokahQuotes = [
	{quote:"Gentlemen.", from:"BLU Spy (Team Fortress 2)", url:"gentlemen.ogg"},
	{quote:"See? Red! Oh, wait... that's blood.", from:"Soldier (Team Fortress 2)", url:"seered.ogg"},
	{quote:"Right behind you.", from:"RED Spy (Team Fortress 2)", url:"rightbehindyou.ogg"},
	{quote:"Mmph mphna mprh.", from:"Pyro (Team Fortress 2)", url:"mmph.ogg"},	
	{quote:"Kept you waiting, huh?", from:"Snake (METAL GEAR SOLID)", url:"keptyouwaiting.ogg"},
	{quote:"V has come to.", from:"iDroid (METAL GEAR SOLID V: TPP)", url:"vhascometo.ogg"},
	{quote:"They played us like a damn fiddle!", from:"Kazuhira Miller (METAL GEAR SOLID V: GZ)", url:"damnfiddle.ogg"}
]

// fisher-yates shuffle
function shuffle(array) {
	var m = array.length, t, i;

	while (m) {
	  i = Math.floor(Math.random() * m--);

	  t = array[m];
	  array[m] = array[i];
	  array[i] = t;
	}
  
	return array;
  }

MinokahQuotes = shuffle(MinokahQuotes);

var CurrentQuote = Math.floor(Math.random() * MinokahQuotes.length);
var QuoteSound = new Audio();

function ChangeQuote() {
	CurrentQuote++;
	if (CurrentQuote > MinokahQuotes.length - 1) CurrentQuote = 0;
	QuoteText.innerHTML = MinokahQuotes[CurrentQuote].quote;
	QuoteAuthor.innerHTML = MinokahQuotes[CurrentQuote].from;
}

ChangeQuoteLabel.onclick = function() { ChangeQuote() };

QuoteText.onclick = function PlayQuote() {
	QuoteSound.src = "Assets/Sounds/" + MinokahQuotes[CurrentQuote].url;
	QuoteSound.play();
}

ChangeQuote();

// list handler
var ProjectsButton = document.getElementById("ProjectsButton");
var GalleryButton = document.getElementById("GalleryButton");
var VideosButton = document.getElementById("VideosButton");

var ProjectsContainer = document.getElementById("ProjectsContainer");
var VideosContainer = document.getElementById("VideosContainer");
var GalleryContainer = document.getElementById("GalleryContainer");

var ListFrame = document.getElementById("ListFrame");
var ListEmptyText = document.getElementById("ListEmptyText");

var ListActive = false;
var CurrentActive = 0;
// 0 projects
// 1 videos
// 2 gallery

ProjectsButton.onmouseover = function() { ButtonHandler(ProjectsButton, true, 0); }
ProjectsButton.onmouseout = function() { ButtonHandler(ProjectsButton, false, 0); }

VideosButton.onmouseover = function() { ButtonHandler(VideosButton, true, 1); }
VideosButton.onmouseout = function() { ButtonHandler(VideosButton, false, 1); }

GalleryButton.onmouseover = function() { ButtonHandler(GalleryButton, true, 2); }
GalleryButton.onmouseout = function() { ButtonHandler(GalleryButton, false, 2); }

ProjectsButton.onclick = function() { ToggleList(0); }
VideosButton.onclick = function() { ToggleList(1); }
GalleryButton.onclick = function() { ToggleList(2); }

function ButtonHandler(obj, toggle, num) {
	if (toggle || ListActive && CurrentActive == num) obj.style.height = "55px";
	else obj.style.height = "0px";
}

function ResetMenus() {
	ProjectsButton.style.height = "0px";
	ProjectsContainer.style.opacity = 0;
	ProjectsContainer.style.pointerEvents = "none";

	VideosButton.style.height = "0px";
	VideosContainer.style.opacity = 0;
	VideosContainer.style.pointerEvents = "none";

	GalleryButton.style.height = "0px";
	GalleryContainer.style.opacity = 0;
	GalleryContainer.style.pointerEvents = "none";
}

function ToggleList(num) {
	if (num == CurrentActive || !ListActive) ListActive = !ListActive;
	CurrentActive = num;

	// reset everything
	ResetMenus();

	switch (CurrentActive) {
		case 0: // Projects
			ProjectsButton.style.height = "55px";
			ProjectsContainer.style.opacity = 1;
			ProjectsContainer.style.pointerEvents = "initial";

			ListFrame.style.background = "linear-gradient(180deg, rgba(54,194,255,1) 0%, rgba(8, 0, 33, 1) 100%)"

			RefreshListContent(CurrentActive, "Projects");
			break;
		case 1: // Videos
			VideosButton.style.height = "55px";
			VideosContainer.style.opacity = 1;
			VideosContainer.style.pointerEvents = "initial";

			ListFrame.style.background = "linear-gradient(180deg,rgba(232,0,73,1) 0%, rgba(8, 0, 33, 1) 100%)"

			RefreshListContent(CurrentActive, "Videos");
			break;
		case 2: // Gallery
			GalleryButton.style.height = "55px";
			GalleryContainer.style.opacity = 1;
			GalleryContainer.style.pointerEvents = "initial";

			ListFrame.style.background = "linear-gradient(180deg, rgba(255,133,58,1) 0%, rgba(8, 0, 33, 1) 100%)"

			RefreshListContent(CurrentActive, "Gallery");
			break;
	}

	if (ListActive) {
		ListFrame.style.opacity = 1;
		ListFrame.style.height = "294px";
	}
	else {
		ListFrame.style.opacity = 0;
		ListFrame.style.height = "0px";
		ListEmptyText.style.opacity = 0;

		ResetMenus();
		RefreshListContent(3, "");
	}
}

// handle list entries
var ProjectsListContents = [
	{title:"DESOCRETE", img:"DESOCRETE.png", url:"https://github.com/minokah/DESOCRETE", date:"C++ - January 26, 2020"},
	{title:"Brickbreaker", img:"Brickbreaker.png", url:"https://github.com/minokah/Brickbreaker", date:"C++ - November 7, 2019"},
	{title:"Untitled RPG Game", img:"UntitledRPGGame.png", url:"https://github.com/minokah/UntitledRPGGame", date:"C++ - January 19, 2019"},
	{title:"Turing Miami", img:"TuringMiami.png", url:"https://github.com/minokah/TuringMiami", date:"Turing - May 27, 2018"}
];

var VideosListContents = [
	{title:"12/08/20", img:"120820.png", url:"https://youtu.be/VTNrpgJ9upg", date:"9:32 - August 12, 2020"},
	{title:"monday ax-50 blues", img:"monday ax-50 blues.png", url:"https://youtu.be/oH3jS7TZrTQ", date:"0:42 - May 4, 2020"},
	{title:"welcome... to my lair", img:"welcome... to my lair.png", url:"https://youtu.be/e5RsL39hG6c", date:"1:06 - February 5, 2020"},
	{title:"modern shooter", img:"modern shooter.png", url:"https://youtu.be/lLGRKFUxzDY", date:"3:41 - January 20, 2020"},	
	{title:"ran out of hdd space", img:"ran out of hdd space.png", url:"https://youtu.be/qqs6E6Pw9Q4", date:"7:31 - November 3, 2019"},
	{title:"highlights 5", img:"highlights 5.png", url:"https://youtu.be/Laefk5ot3dw", date:"3:10 - November 3, 2019"},
	{title:"breakpoint", img:"breakpoint.png", url:"https://youtu.be/7hkPPBqiZFM", date:"2:04 - September 27, 2019"},
	{title:"highlights 4", img:"highlights 4.png", url:"https://youtu.be/9es7AMeHeXs", date:"2:15 - August 27, 2019"},
	{title:"highlights 3", img:"highlights 3.png", url:"https://youtu.be/4WJhpEKml8M", date:"5:40 - August 27, 2019"},
	{title:"Jet Flight Infovid", img:"Jet Flight Infovid.png", url:"https://youtu.be/7gnJ-AL_fxw", date:"6:44 - June 2, 2019"},
	{title:"and the crowd goes wild", img:"and the crowd goes wild.png", url:"https://youtu.be/GGxF_dTot4c", date:"0:44 - April 13, 2019"},
	{title:"highlights #2", img:"highlights 2.png", url:"https://youtu.be/uOVc33pF260", date:"3:50 - April 6, 2019"},
	{title:"highlights (mar. 8-9)", img:"highlights (mar. 8-9).png", url:"https://youtu.be/AF5EW-T9_uo", date:"3:10 - March 9, 2019"},
	{title:"Shotguns", img:"Shotguns.png", url:"https://youtu.be/xy7y5GJ4iS4", date:"3:12 - August 5, 2018"},
	{title:"eat.", img:"eat..png", url:"https://youtu.be/aDf_rFaT8Ig", date:"2:26 - July 27, 2018"}
];

var GalleryListContents = [
	{title:"@Fleurfurr", img:"Fleurfurr.png", url:"https://twitter.com/Fleurfurr/status/1297279124491337729", date:"August 18, 2020"},
	{title:"@Shlimaz", img:"Shlimaz.png", url:"https://twitter.com/Shlimaz/status/1294680255555342339", date:"August 13, 2020"},
	{title:"@Ferwildir", img:"Ferwildir.png", url:"Assets/Preview/Gallery/Source/Ferwildir.jpg", date:"June 21, 2020"},
	{title:"@Olive_Cow", img:"Olive_Cow.png", url:"Assets/Preview/Gallery/Source/Olive_Cow.png", date:"June 8, 2020"},
	{title:"PureRubyDragon", img:"PureRubyDragon.png", url:"Assets/Preview/Gallery/Source/PureRubyDragon.png", date:"February 15, 2020"},
	{title:"@faunbutt", img:"faunbutt.png", url:"https://www.furaffinity.net/view/34197779/", date:"December 13, 2019"}
];

function ApppendListHTML(type, title, img = "Placeholder.png", url, date, i) {
 	var ReturnString = '<div class="ListEntry" onclick="window.open(\'' + url + '\')" style="cursor: pointer">' +
		'<img class="ListEntryImage" src="Assets/Preview/' + type + '/' + img + '">' +
		'<span class="';

	if (type == "Gallery") ReturnString += 'ListEntryDate" style="opacity:1; font-size:20px; top:165px">' + title + '</span>' +
		'<span class="ListEntryDate" style="top:190px"';
	else {
		ReturnString += 'ListEntryLabel">' + title + '</span>' +
		'<span class="ListEntryDate"';
	}

	ReturnString += '>' + date + '</span>';

	return ReturnString;
}

function AppendHeaderHTML(title, desc) {
	return '<span id="ListCategoryHeader">' +
		title +
		"<span id=\'ListCategorySubtitle\'>" + desc + "</span>" +
	'</span>'
}

function RefreshListContent(num, name) {
	var empty = false;
	
	ProjectsContainer.innerHTML = "";
	VideosContainer.innerHTML = "";
	GalleryContainer.innerHTML = "";

	switch (num) {
		case 0:
			if (ProjectsListContents.length <= 0) empty = true;
			else {
				ProjectsContainer.innerHTML += AppendHeaderHTML("Projects", "Coding side and school projects");
				for (i = 0; i != ProjectsListContents.length; i++) {
					var title = ProjectsListContents[i].title;
					var img = ProjectsListContents[i].img;
					var url = ProjectsListContents[i].url;
					var date = ProjectsListContents[i].date;
					
					ProjectsContainer.innerHTML += ApppendListHTML("Projects", title, img, url, date, i);
				}
			}

			break;
		case 1:
			if (VideosListContents.length <= 0) empty = true;
			else {
				VideosContainer.innerHTML += AppendHeaderHTML("Videos", "Recorded and edited hightlights, montages and clips");
				for (i = 0; i != VideosListContents.length; i++) {
					var title = VideosListContents[i].title;
					var img = VideosListContents[i].img;
					var url = VideosListContents[i].url;
					var date = VideosListContents[i].date;
					
					VideosContainer.innerHTML += ApppendListHTML("Videos", title, img, url, date, i);
				}
			}

			break;
		case 2:
			if (GalleryListContents.length <= 0) empty = true;
			else {
				GalleryContainer.innerHTML += AppendHeaderHTML("Gallery", "Commissioned artwork from artists");
				for (i = 0; i != GalleryListContents.length; i++) {
					var title = GalleryListContents[i].title;
					var img = GalleryListContents[i].img;
					var url = GalleryListContents[i].url;
					var date = GalleryListContents[i].date;

					GalleryContainer.innerHTML += ApppendListHTML("Gallery", title, img, url, date, i);
				}
				
			}
			break;
	}

	if (empty) {
		ListEmptyText.innerHTML = name + " is empty";
		ListEmptyText.style.opacity = 1;
	}
	else ListEmptyText.style.opacity = 0;
}

// external profiles onclick
var TwitterButton = document.getElementById("TwitterButton");
var YouTubeButton = document.getElementById("YouTubeButton");
var SteamButton = document.getElementById("SteamButton");

TwitterButton.onclick = function() { window.open("http://twitter.com/minokah_"); }
YouTubeButton.onclick = function() { window.open("https://www.youtube.com/channel/UCyQkTJLpfR0PEMvDQQH14cw"); }
SteamButton.onclick = function() { window.open("https://steamcommunity.com/id/minokah/"); }

// fadein page
function PageFadeIn() {
	setTimeout(() => {
		Main.style.opacity = 1;
	}, 20);
}

// handle small rich presence frame
var DiscordSmallFrame = document.getElementById("DiscordSmallFrame");
var DiscordSmallTitle = document.getElementById("DiscordSmallTitle");
var DiscordSmallArrow = document.getElementById("DiscordSmallArrow");
var DiscordSmallState = document.getElementById("DiscordSmallState");
var DiscordSmallILink = document.getElementById("DiscordSmallILink");
var DiscordSmallIText = document.getElementById("DiscordSmallIText");
var DiscordSmallCLink = document.getElementById("DiscordSmallCLink");
var DiscordSmallActive = false;
var DiscordInfoActive = false;

function ResetDiscInfoBox() {
	DiscordInfoActive = false;

	DiscordSmallILink.style.top = "62px";
	DiscordSmallILink.style.fontSize = "17px";
	DiscordSmallILink.style.cursor = "pointer";

	DiscordSmallFrame.style.height = "100px";
	DiscordSmallState.style.opacity = 1;

	DiscordSmallCLink.style.opacity = 0;
	DiscordSmallCLink.style.cursor = "default";

	DiscordSmallIText.style.opacity = 0;

	if (DiscordSmallActive) DiscordSmallILink.style.opacity = 0.35;
	else DiscordSmallILink.style.opacity = 0;
}

DiscordSmallArrow.onclick = function() {
	DiscordSmallActive = !DiscordSmallActive;
	
	if (DiscordSmallActive) {
		DiscordSmallFrame.style.height = "100px";
		DiscordSmallState.style.opacity = 1;
		DiscordSmallILink.style.opacity = 0.35;

		DiscordSmallArrow.style.transform = "rotate(180deg)";
	}
	else {
		ResetDiscInfoBox();

		DiscordSmallFrame.style.height = "50px";
		DiscordSmallState.style.opacity = 0;
		DiscordSmallILink.style.opacity = 0;

		DiscordSmallArrow.style.transform = "";
		DiscordSmallInfoActive = false;
	}
}

// workaround for DiscordSmallILink:hover not working with js
DiscordSmallILink.onclick = function() {
	DiscordInfoActive = true;

	DiscordSmallILink.style.top = "58px";
	DiscordSmallILink.style.fontSize = "25px";
	DiscordSmallILink.style.cursor = "default";

	DiscordSmallFrame.style.height = "170px";
	DiscordSmallState.style.opacity = 0;

	DiscordSmallCLink.style.opacity = 0.35;
	DiscordSmallCLink.style.cursor = "pointer";

	DiscordSmallIText.style.opacity = 0.75;
}

DiscordSmallILink.onmouseover = function() {
	if (DiscordSmallActive) DiscordSmallILink.style.opacity = 1;
}

DiscordSmallILink.onmouseleave = function() {
	if (DiscordSmallActive) DiscordSmallILink.style.opacity = 0.35;
	else DiscordSmallILink.style.opacity = 0;

	if (DiscordInfoActive) DiscordSmallILink.style.opacity = 1;
}

DiscordSmallCLink.onmouseover = function() {
	if (DiscordInfoActive) DiscordSmallCLink.style.opacity = 1;
}

DiscordSmallCLink.onmouseleave = function() {
	if (DiscordInfoActive) DiscordSmallCLink.style.opacity = 0.35;
}

DiscordSmallCLink.onclick = function() { ResetDiscInfoBox(); }

var ParsedTitle, ParsedTime;
var PresenceInactive = false;

// read file for presence
fetch("https://minokah.github.io/Assets/Presence/data.txt")
	.then(response => response.text())
	.then(data => {
		var parsed = data.split("\n");
		ParsedTitle = parsed[0];
		ParsedState = "Nothing to Show";
		DiscordSmallTitle.innerHTML = ParsedTitle;

		if (ParsedTitle == "Offline" || ParsedTitle == "Online" || ParsedTitle == "Away" || ParsedTitle == "Presence Inactive") {
			PresenceInactive = true;

			if (ParsedTitle == "Offline") DiscordSmallFrame.style.background = "linear-gradient(90deg, rgba(80,80,80,1) 9%, rgba(50,50,50,1) 53%)";
			if (ParsedTitle == "Online") DiscordSmallFrame.style.background = "linear-gradient(90deg, rgba(124,223,67,1) 9%, rgba(71,182,11,1) 66%)";
			if (ParsedTitle == "Away") DiscordSmallFrame.style.background = "linear-gradient(90deg, rgba(255,204,32,1) 44%, rgba(187,153,36,1) 77%)";
			
			DiscordSmallState.innerHTML = "Nothing to show";
		}
		else DiscordSmallState.innerHTML = ParsedState;
});

setInterval(function() {
	if (!PresenceInactive) DiscordSmallState.innerHTML = ParsedState;
}, 1000);