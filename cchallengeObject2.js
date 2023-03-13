class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}KM/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}KM/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

const ford = new Car("Ford", 120);
const car2 = new Car("Mercedes", 95);

ford.accelerate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);
