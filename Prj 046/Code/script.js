// In the Name of Allah

// Project Title : Prj 46
// Programming Software : Visual Studio Code , Version 1.74.2
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// Return the number of digits of a number
// Project Solution :
function num_of_digits(num) {
  if (num > 0 || num === 0) {
    return String(num).split('').length;
  } else return String(num).split('').length - 1;
}
