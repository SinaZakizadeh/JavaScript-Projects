// In the Name of Allah

// Project Title : Prj 35
// Programming Software : Visual Studio Code , Version 1.74.2
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// The Least Common Multiple of the two Numbers
// Project Solution :
const inputNumber1 = Number(prompt(`Enter First Number`));
const inputNumber2 = Number(prompt(`Enter Second Number`));
let i = 1,
  LCM;
while (true) {
  if (i % inputNumber1 == 0 && i % inputNumber2 == 0) {
    LCM = i;
    break;
  }
  i++;
}
alert(`LCM is ${LCM}`);
