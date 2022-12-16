// In the Name of Allah

// Project Title : Prj 11
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// Other Projects : https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// const 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

// Project Solution :

let population = 85; // for 2021 in million
console.log(
  `Iran's population is ${population > 33 ? 'above' : 'below'} average `
);
population = 13;
console.log(
  `Iran's population is ${population > 33 ? 'above' : 'below'} average `
);
population = 130;
console.log(
  `Iran's population is ${population > 33 ? 'above' : 'below'} average `
);
population = 85;
