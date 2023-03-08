let checkDogs = (dogsJulia, dogsKate) => {
  // dogsJulia.forEach((ele, i) => {
  //   dogsJulia > 3
  //     ? `Dog Number ${i + 1} is an adult and ${ele}`
  //     : `Dog Number ${i + 1} is still puppy`;
  // });
  // console.log(dogsJulia);
  // dogsKate.forEach((ele2) => {
  //   ele2 > 3 ? "Adult Dog" : "Cat";
  // });
  let julia = dogsJulia.slice(1, -2);
  console.log(julia);
  let dogs = [...julia, ...dogsKate];

  dogs.forEach(function (dog, i) {
    dog >= 3
      ? console.log(`Dog Number ${i + 1} is an adult and ${dog}`)
      : console.log(`Dog Number ${i + 1} is still puppy`);
  });

  console.log(dogs);
};

let juliaData = [3, 5, 2, 12, 7];
let kateData = [4, 1, 15, 8, 3];

checkDogs(juliaData, kateData);
