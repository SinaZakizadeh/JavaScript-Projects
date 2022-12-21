// In the Name of Allah

// Project Title : Prj 36
// Programming Software : Visual Studio Code , Version 1.74.2
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// the factorial of a number

// Project Solution :

const inputNumber = Number(prompt(`Enter a Number`));
if (inputNumber < 0) {
  alert(`Your number is negative`);
} else if (inputNumber == 0) {
  alert(`The Factorial of ${inputNumber} is 1`);
} else {
  let fact = 1;
  for (let i = 1; i <= inputNumber; i++) {
    fact *= i;
  }
  alert(`The Factorial of ${inputNumber} is ${fact}`);
}
