// In the Name of Allah

// Project Title : Prj 6
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh

// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average'
// 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

// Project Solution :

// 1.
let myCountrysPopulation = 85;
if (myCountrysPopulation > 33) {
  console.log(`My country's population is above average`);
} else
  console.log(
    `My country's population is ${
      33 - myCountrysPopulation
    } million below average`
  );

// 2.
myCountrysPopulation = 13;
if (myCountrysPopulation > 33) {
  console.log(`My country's population is above average`);
} else
  console.log(
    `My country's population is ${
      33 - myCountrysPopulation
    } million below average`
  );
myCountrysPopulation = 130;
if (myCountrysPopulation > 33) {
  console.log(`My country's population is above average`);
} else
  console.log(
    `My country's population is ${
      33 - myCountrysPopulation
    } million below average`
  );
myCountrysPopulation = 85;
