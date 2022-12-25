// In the Name of Allah

// Project Title : Prj 43
// Programming Software : Visual Studio Code , Version 1.74.2
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// Project Solution :
const addUp = function (num) {
  let i = 0,
    sum = 0;
  while (i <= num) {
    sum = sum + i;
    i++;
  }
  return sum;
};
