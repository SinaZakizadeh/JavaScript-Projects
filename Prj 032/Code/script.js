// In the Name of Allah

// Project Title : Prj 32
// Programming Software : Visual Studio Code , Version 1.74.2
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// Give a number and Check if the number is Prime Number
// Hint: A prime number is a positive integer only divisible by one and itself. For example, 2, 3, 5, 7, and 11 are the first few prime numbers.
Project Solution :
const inputNumber = Number(prompt(`Enter a Natural Number`));
let isPrime = true;
if (inputNumber === 1) alert(`1 is considered neither prime nor composite`);
else if (inputNumber > 1) {
  for (let i = 2; i < inputNumber; i++) {
    if (inputNumber % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) alert(`Your Number is Prime Number`);
  else alert(`Your Number is Composite Number `);
}