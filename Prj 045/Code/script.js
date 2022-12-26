// In the Name of Allah

// Project Title : Prj 45
// Programming Software : Visual Studio Code , Version 1.74.2
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// Write a JavaScript function that reverse a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223

// Project Solution :
const reverseNumber = function (num) {
  return Number(String(num).split('').reverse().join(''));
};
