const calcAverahgeHumanAge = function (age) {
  const humanAge = age.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAge);
  const adults = humanAge.filter((age) => age >= 18);
  console.log(adults);
  const avrageAge = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  console.log(avrageAge);
};
// let dogsAge = [5, 2, 4, 1, 15, 8, 3];
console.log(calcAverahgeHumanAge([5, 2, 4, 1, 15, 8, 3]));
