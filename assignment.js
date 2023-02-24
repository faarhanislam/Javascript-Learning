let marksWeight1 = 78;
let marksHeight1 = 1.69;
let johnWeight1 = 92;
let johnHeight1 = 1.95;

marksBMI1 = marksWeight1 / marksHeight1 ** 2;
johnBMI1 = johnWeight1 / johnHeight1 ** 2;

console.log(marksBMI1, johnBMI1);

let marksWeight2 = 95;
let marksHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

marksBMI2 = marksWeight2 / marksHeight2 ** 2;
johnBMI2 = johnWeight2 / johnHeight2 ** 2;
console.log(marksBMI2, johnBMI2);

markshighBMI1 = marksBMI1 > johnBMI1;
console.log(markshighBMI1);

markshighBMI2 = marksBMI2 > johnBMI2;
console.log(markshighBMI2);

if (marksBMI1 > johnBMI1) {
  console.log(`Marks BMI ${marksBMI1} is higher than ${johnBMI1} John BMI`);
} else {
  console.log(`John BMI ${johnBMI1} is higher than ${marksBMI1}`);
}
