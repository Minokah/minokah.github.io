// it's still twitter
var twticon = document.getElementById("its-still-twitter")
twticon.onmouseenter = () => {
    twticon.src = "images/twitter.png"
}
twticon.onmouseleave = () => {
    twticon.src = "images/x.png"
}

var resultDiv = document.getElementById("results-div")

// nav
var projectsButton = document.getElementById("nav-projects")
var experienceButton = document.getElementById("nav-experience")
var artworkButton = document.getElementById("nav-artwork")

projectsButton.onclick = () => { changeNav("projects", projectsButton) }
experienceButton.onclick = () => { changeNav("experience", experienceButton) }
artworkButton.onclick = () => { changeNav("artwork", artworkButton) }

function changeNav(s, btn) {
    // swap to active tab (and the pic)
    projectsButton.classList.remove("active")
    experienceButton.classList.remove("active")
    artworkButton.classList.remove("active")
    btn.classList.add("active")
    projectsButton.getElementsByClassName("nav-bg-img")[0].classList.remove("nav-bg-img-active")
    experienceButton.getElementsByClassName("nav-bg-img")[0].classList.remove("nav-bg-img-active")
    artworkButton.getElementsByClassName("nav-bg-img")[0].classList.remove("nav-bg-img-active")
    btn.getElementsByClassName("nav-bg-img")[0].classList.add("nav-bg-img-active")

    resultDiv.style.transitionDuration = '0s';
    resultDiv.style.opacity = 0;
    resultDiv.offsetHeight;
    resultDiv.style.transitionDuration = '0.5s';
    resultDiv.innerHTML = ""

    switch (s) {
        case "projects":
            fillProjectsDiv()
            break;
        case "experience":
            fillExperienceDiv()
            break;
        case "artwork":
            fillArtworkDiv()
            break;
    }
}

// cacheed data
var projectsData, experienceData, artworkData

// specific HTML for projects
async function fillProjectsDiv() {
    if (projectsData == null) {
        var json = await fetch("projects.json")
        projectsData = await json.json()
    }
    var div = ""

    // parse main data
    for (var entry in projectsData) {
        entry = projectsData[entry]
        var tags = ""

        if (entry.tags != null) {
            for (var tag in entry.tags) {
                tags += `<img src="images/tags/${entry.tags[tag]}.png" class="me-3 badge-image">`
            }
            tags = `<div class="card-header">${tags}</div>`
        }

        var diventry = `
            <div class="col-lg-4 col-6 mb-3">
                <a href="${entry.url}" target="_blank">
                    <div class="card card-link text-bg-dark h-100">
                        <img src="images/projects/${entry.image}" class="card-img-top">
                        ${tags}
                        <div class="card-body">
                            <h4 class="card-title"><b>${entry.name}</b></h4>
                            <p class="card-text">${entry.desc}</p>
                        </div>
                    </div>
                </a>
            </div>
        `
        div += diventry
    }

    if (projectsData == null || projectsData.length == 0) {
        div = "<span>No data :(</span>"
    }

    resultDiv.innerHTML = div
    resultDiv.style.opacity = 1
}

// specific HTML for experience
async function fillExperienceDiv() {
    if (experienceData == null) {
        var json = await fetch("experience.json")
        experienceData = await json.json()
    }
    var div = ""

    // parse main data
    for (var entry in experienceData) {
        entry = experienceData[entry]

        // accomplishments in list form
        var acclist = ""
        for (var acc in entry.accomplishments) {
            acclist += `<li>${entry.accomplishments[acc]}</li>`
        }

        var diventry = `
            <div class="col mb-3">
                <div class="card text-bg-dark h-100">
                    <div class="row">
                        <div class="col-md-3 col-sm-12">
                            <img src="images/experience/${entry.image}" class="card-img-top card-img-bottom experience-img ms-md-3 mt-md-3">
                        </div>
                        <div class="col-md-9 col-sm-12">
                            <div class="card-body">
                                <div class="card-title">
                                    <h4><b>${entry.company}</b></h4>
                                    <span><b>${entry.position}</b></span>
                                </div>
                                <p class="card-text">
                                    <span>${entry.bodyheading}</span>
                                    <ul>${acclist}</ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        div += diventry
    }

    if (experienceData == null || experienceData.length == 0) {
        div = "<span>No data :(</span>"
    }

    resultDiv.innerHTML = div
    resultDiv.style.opacity = 1
}

// specific HTML for artwork
async function fillArtworkDiv() {
    resultDiv.innerHTML = "<span>This is where art of my character will go :D</span>"
    resultDiv.style.opacity = 1
}

// go!!
fillProjectsDiv()