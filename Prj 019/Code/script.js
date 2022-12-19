// In the Name of Allah

// Project Title : Prj 19
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours'
// 2. log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 3. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

// Project Solution :

const myCountry = {
  country: 'Iran',
  captital: 'Tehran',
  language: 'Persian',
  population: 85,
  neighbours: ['Iraq', 'Turkey', 'Afghanistan', 'Pakistan'],
};

console.log(
  `${myCountry.country} has a ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.captital}`
);
myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);
