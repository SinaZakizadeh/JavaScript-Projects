// In the Name of Allah

// Project Title : Prj 13
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :

// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

// Project Solution :

// 1 to 3 :
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentageOfIran = percentageOfWorld1(85); // for 2021
const percentageOfCanada = percentageOfWorld1(38); // for 2021
const percentageOfEngland = percentageOfWorld1(55); // for 2018
console.log(percentageOfIran, percentageOfCanada, percentageOfEngland);

// 4 :
const percentageOfWorld2 = function (population) {
  return console.log((population / 7900) * 100);
};
percentageOfWorld2(85); // for Iran
percentageOfWorld2(38); // for Canada
percentageOfWorld2(55); // for England
