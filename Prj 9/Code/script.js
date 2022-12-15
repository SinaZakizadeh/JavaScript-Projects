// In the Name of Allah

// Project Title : Prj 9
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh

// Project Description :

// 1. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an island.
// 2. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 3. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 4. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)

// Project Solution :

const myCountrysLanguage = false; //it's Persian
let myCountrysPopulation = false; //for 2021 , it's 85 million
const myCountryIsNotIsland = true;

if (myCountrysLanguage & myCountrysPopulation & myCountryIsNotIsland) {
  console.log('Sara , You should live in Iran');
} else console.log('Iran does not meet your criteria');

const canadasLanguage = true; //it's English
let canadasPopulation = true; //for 2021 , it's 38 million
const canadaIsNotIsland = true;

if (canadasLanguage & canadasPopulation & canadaIsNotIsland) {
  console.log('Sara , You should live in Canada');
} else console.log('Canada does not meet your criteria');
