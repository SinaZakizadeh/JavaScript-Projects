// In the Name of Allah

// Project Title : Prj 12
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :

// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

// Project Solution :

const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};
const describeIran = describeCountry('Iran', 85, 'Tehran'); // for 2021
const describeCanada = describeCountry('Canada', 38, 'Ottawa'); // for 2021
const describeEngland = describeCountry('England', 55, 'london'); // for 2018

console.log(`${describeIran} and  
${describeCanada} and
${describeEngland}`);
