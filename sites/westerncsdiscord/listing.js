var year = new URLSearchParams(window.location.search).get("year")

var header_name = document.getElementById("header_name")
var header_num = document.getElementById("header_num")
var header_description = document.getElementById("header_description")

var courses = courses[year]
if (courses == null) {
    header_name.innerHTML = "Invalid URL"
    header_description.innerHTML = ":("
}
else {
    header_name.innerHTML = header[year].title
    header_num.innerHTML = Object.keys(courses).length + " Course(s)"
    header_description.innerHTML = header[year].description
}

var course_dropdown = document.getElementById("course_dropdown")
var dropdown_text = document.getElementById("dropdown_text")
var course_container = document.getElementById("course_container")

var course_name = document.getElementById("course_name")
var course_tags = document.getElementById("course_tags")
var course_description = document.getElementById("course_description")
var course_experience = document.getElementById("course_experience")
var course_positives = document.getElementById("course_positives")
var course_negatives = document.getElementById("course_negatives")
var course_resources = document.getElementById("course_resources")
var course_calendar =  document.getElementById("course_calendar")

var tags = {
    "Easy": "bg-success",
    "Medium": "bg-warning",
    "Hard": "bg-danger",
}

// set the data
function change(course) {
    let data = courses[course]

    course_name.innerHTML = `${course} - ${data.name}`
    course_description.innerHTML = data.description
    course_experience.innerHTML = data.experience != "" ? data.experience : "Unknown"
    
    // badges
    course_tags.innerHTML = ""
    for (let i in data.tags) {
        let entry = document.createElement("span")
        entry.classList.add("badge", tags[data.tags[i]] != null ? tags[data.tags[i]] : "bg-primary", "me-1")
        entry.innerHTML = data.tags[i]
        course_tags.appendChild(entry)
    }
    
    // positives
    course_positives.innerHTML = ""
    if (data.positives.length == 0) course_positives.innerHTML = "None"
    for (let i in data.positives) {
        let entry = document.createElement("li")
        entry.innerHTML = data.positives[i]
        course_positives.appendChild(entry)
    }

    // negatives
    course_negatives.innerHTML = ""
    if (data.negatives.length == 0) course_negatives.innerHTML = "None"
    for (let i in data.negatives) {
        let entry = document.createElement("li")
        entry.innerHTML = data.negatives[i]
        course_negatives.appendChild(entry)
    }
    
    // resources
    course_calendar.href = data.calendar
    for (let i in data.resources) {
        let tuple = data.resources[i]
        let entry = document.createElement("a")
        entry.classList.add("btn", "btn-primary")
        entry.innerHTML = tuple[0]
        entry.href = tuple[1]
    }
}

// create entries
for (let course in courses) {
    let dropdown_button = document.createElement("button")
    dropdown_button.type = "button"
    dropdown_button.classList.add("dropdown-item")
    dropdown_button.innerHTML = course

    let dropdown_entry = document.createElement("li")
    dropdown_entry.appendChild(dropdown_button)
    course_dropdown.appendChild(dropdown_entry)

    dropdown_button.onclick = function() {
        course_container.style.display = "block";
        dropdown_text.innerHTML = course
        change(course)
    }
}