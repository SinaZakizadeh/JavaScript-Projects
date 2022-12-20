// In the Name of Allah

// Project Title : Prj 21
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// There are two gymnastics teams, Dolphins and Koalas. They compete against each.
// Other three times. The winner with the highest average score wins a trophy!
// 1. Calculate the average score for each team using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// And print it to the console. Remember that there can be a draw, so test for that.
// As well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// The team only wins if it has a higher score than the other team, and the same time a
// a Score of at least 100 points. Hint: Use a logical operator to test for a minimum
// Score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So interest only happens when
// Both teams have the same score, and both have a score greater or equal to 100
// Points. Otherwise, no team wins the trophy.
// Test data:
// § Data 1: Dolphins score 96, 108, and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112, and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112, and 101. Koalas score 109, 95 and 106

// Project Solution :
// 1. Based on Data 1
let averageDolphins = (96 + 108 + 89) / 3;
let averageKoalas = (88 + 91 + 110) / 3;
if (averageDolphins > averageKoalas) console.log(`Winner is Dolphins`);
else if (averageDolphins < averageKoalas) console.log(`Winner is Koalas`);
else console.log(`Dolphins and Koalas have Same Score`);
// 2. Based on Bonus 1
averageDolphins = (97 + 112 + 101) / 3;
averageKoalas = (109 + 95 + 123) / 3;
if (averageDolphins > averageKoalas && averageDolphins >= 100)
  console.log(`Winner is Dolphins`);
else if (averageDolphins < averageKoalas && averageKoalas >= 100)
  console.log(`Winner is Koalas`);
else console.log(`The Game did not have a Winner.`);
// 3. Based on Bonus 2
averageDolphins = (97 + 112 + 101) / 3;
averageKoalas = (109 + 95 + 106) / 3;
if (averageDolphins > averageKoalas && averageDolphins >= 100)
  console.log(`Winner is Dolphins`);
else if (averageDolphins < averageKoalas && averageKoalas >= 100)
  console.log(`Winner is Koalas`);
else if (
  averageDolphins === averageKoalas &&
  averageDolphins >= 100 &&
  averageKoalas >= 100
)
  console.log(`Both Team Win the Trophy`);
else console.log(`No One Wins the Trophy`);
