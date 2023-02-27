let mobjec = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calBMI: function () {
    let BMI = this.mass / this.height ** 2;
    return BMI;
  },
};

let jobjec = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calBMI: function () {
    let BMI = this.mass / this.height ** 2;
    return BMI;
  },
};
if (mobjec.calBMI() >= jobjec.calBMI) {
  console.log(
    `${mobjec.fullName} BMI ${mobjec.calBMI()} is higher than ${
      mobjec.fullName
    } ${jobjec.calBMI()}`
  );
} else {
  console.log(
    `${jobjec.fullName} BMI ${jobjec.calBMI()} is higher than ${
      mobjec.fullName
    } ${mobjec.calBMI()}`
  );
}
console.log(mobjec.calBMI(), jobjec.calBMI());
