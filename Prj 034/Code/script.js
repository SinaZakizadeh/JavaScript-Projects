// In the Name of Allah

// Project Title : Prj 34
// Programming Software : Visual Studio Code , Version 1.74.2
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// The Highest common factor of the two Numbers
// Project Solution :
const inputNumber1 = Number(prompt(`Enter first Number `));
const inputNumber2 = Number(prompt(`Enter Second Number `));
let HFC;
for (let i = 1; i <= inputNumber1 && i <= inputNumber2; i++) {
  if (inputNumber1 % i == 0 && inputNumber2 % i == 0) {
    HFC = i;
  }
}

alert(`HFC is ${HFC}`);
