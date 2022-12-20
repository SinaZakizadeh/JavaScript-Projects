// In the Name of Allah

// Project Title : Prj 27
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// Write a program that announces the retirement time of the person. (with function)
// Project Solution :
let jobAge = Number(prompt(`When did you get a job? (Enter a year)`));
let calRet = function (jobAge) {
  return jobAge + 30;
};
alert(`Your retirement time is ${calRet(jobAge)}`);
