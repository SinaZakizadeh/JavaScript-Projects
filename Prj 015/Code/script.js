// In the Name of Allah

// Project Title : Prj 15
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :

// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

// Project Solution :
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )} of the world`;
};
console.log(describePopulation('Iran', 85));
console.log(describePopulation('Canada', 38));
console.log(describePopulation('England', 55));
