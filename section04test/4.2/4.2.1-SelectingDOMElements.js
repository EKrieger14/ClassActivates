// select all unordered list (ul) elements
// Which of the two below are acceptable? Neither? Both?
document.querySelectorAll("ul");
document.getElementsByTagName("ul");

// select all elements with the class "class-week"
document.querySelectorAll(".class-week");
document.getElementsByClassName("class-week");

// select all elements with the class "nav-bar"
document.querySelectorAll(".nav-bar");
document.getElementsByClassName("nav-bar");

// select the element with the id "dog-picture" and save it to a variable
let dogPic = document.querySelector("#dog-picture");
let dogById = document.getElementById("dog-picture");

console.log(dogPic);
