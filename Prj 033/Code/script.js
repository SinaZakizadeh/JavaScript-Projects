// In the Name of Allah

// Project Title : Prj 33
// Programming Software : Visual Studio Code , Version 1.74.2
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// the Sum of Natural Numbers
// Project Solution :
const InputNumber = Number(prompt(`Enter a positive integer number`));

//with For loop
let sum = 0;
for (let i = 1; i <= InputNumber; i++) {
  sum += i;
}
alert(`${sum}`);

// with While loop
// let sum = 0,
//   i = 1;
// while (i <= InputNumber) {
//   sum += i;
//   i++;
// }
// alert(`${sum}`);
