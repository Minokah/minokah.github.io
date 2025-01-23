// it's still twitter
var twticon = document.getElementById("its-still-twitter")
twticon.onmouseenter = () => {
    twticon.src = "images/twitter.png"
}
twticon.onmouseleave = () => {
    twticon.src = "images/x.png"
}

// fill the div with projects from data.json
async function fillProjectDiv() {
    var projectDiv = document.getElementById("projects-div")
    var json = await fetch("data.json")
    var data = await json.json()
    var div = ""

    for (var entry in data) {
        entry = data[entry]
        var tags = ""

        for (var tag in entry.tags) {
            tags += `<img src="images/tags/${entry.tags[tag]}.png" class="me-3 badge-image">`
        }

        var diventry = `
            <div class="col-lg-4 col-6 mb-3">
                <a href="${entry.url}" target="_blank">
                    <div class="card card-link text-bg-dark h-100">
                        <img src="images/projects/${entry.image}" class="card-img-top">
                        <div class="card-header">${tags}</div>
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

    projectDiv.innerHTML = div
}

// go!!
fillProjectDiv()