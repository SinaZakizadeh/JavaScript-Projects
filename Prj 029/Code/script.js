// In the Name of Allah

// Project Title : Prj 29
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// Project Solution :
const year = [1991, 2007, 1969, 2020];
const age = [];
let thisYear = 2022;
for (let i = 0; i < year.length; i++) {
  age.push(thisYear - year[i]);
}
console.log(age);
