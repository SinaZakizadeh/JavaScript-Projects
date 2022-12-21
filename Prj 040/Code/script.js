// In the Name of Allah

// Project Title : Prj 40
// Programming Software : Visual Studio Code , Version 1.74.2
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// Create a function that takes an array containing only numbers and return the first element
// Project Solution :
let arr = [];
const getFirstValue = function (arr) {
  for (i = 0; i < arr.lenght; i++) {
    if (typeof arr[i] == 'number') {
      arr += arr[i];
    }
  }
  return arr[0];
};
