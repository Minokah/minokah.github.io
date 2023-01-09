var num_first = document.getElementById("num_first")
var num_second = document.getElementById("num_second")
var num_third = document.getElementById("num_third")
var num_fourth = document.getElementById("num_fourth")

num_first.innerHTML = Object.keys(courses["first"]).length + " Course(s)"
num_second.innerHTML = Object.keys(courses["second"]).length + " Course(s)"
num_third.innerHTML = Object.keys(courses["third"]).length +  " Course(s)"
num_fourth.innerHTML = Object.keys(courses["fourth"]).length + " Course(s)"