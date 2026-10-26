"use strict";
let button = document.getElementById("year-button");
button.onclick = showAge;

function showAge() {
  console.log("clicked")  
  let yearInput = document.getElementById("year-Input");
  let year = Number(yearInput.value);
  console.log("year:", year);
  let age = getAge(year);
  console.log("age", age);
  let output = document.getElementById("output");
  output.textContent = " Your age is " + age + " years old.";
}



function getAge(year) {
    let currentYear = 2026;
    let age = currentYear - year;
    return age;
}



