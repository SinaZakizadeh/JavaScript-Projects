// In the Name of Allah

// Project Title : Prj 14
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :

// 1. The world population is 7900 million people. Create a Arrow Functions
// called 'percentageOfWorld3' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld3' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console

// Project Solution :

const percentageOfWorld3 = population => (population / 7900) * 100;
const percentageOfIran = percentageOfWorld3(85); // for 2021
const percentageOfCanada = percentageOfWorld3(38); // for 2021
const percentageOfEngland = percentageOfWorld3(55); // for 2018
console.log(percentageOfIran, percentageOfCanada, percentageOfCanada);
