// In the Name of Allah

// Project Title : Prj 20
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// JavaScript Projects :https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// Project Solution :

const mark = {
  Weight1: 78,
  Weight2: 95,
  Height1: 1.69,
  Height2: 1.88,
};
const john = {
  Weight1: 92,
  Weight2: 85,
  Height1: 1.95,
  Height2: 1.76,
};
const BMI = (mass, height) => mass / height ** 2;
const marksBMI1 = BMI(mark.Weight1, mark.Height1);
const marksBMI2 = BMI(mark.Weight2, mark.Height2);
const johnsBMI1 = BMI(john.Weight1, john.Height1);
const johnsBMI2 = BMI(john.Weight2, john.Height2);
const marksHeigherBMI1 = marksBMI1 > johnsBMI1;
const marksHeigherBMI2 = marksBMI2 > johnsBMI2;
if (marksHeigherBMI1) {
  console.log(`Based on Data 1 , Mark's BMI is Higher than John's`);
} else console.log(`Based on Data 1 , Johns's BMI is Higher than Mark's`);
if (marksHeigherBMI2) {
  console.log(`Based on Data 2 , Mark's BMI is Higher than John's`);
} else console.log(`Based on Data 2 , Johns's BMI is Higher than Mark's`);
