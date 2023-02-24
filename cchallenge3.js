const dolphinScore = 97 + 112 + 101;
const koalasScore = 109 + 95 + 106;

dolphinAverage = dolphinScore / 3;
koalasAverage = koalasScore / 3;
console.log(dolphinAverage, koalasAverage);

if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
  console.log("Dolphin is Winner");
} else if (koalasAverage > dolphinAverage && koalasAverage >= 100) {
  console.log("Koalas is winner");
} else if (
  koalasAverage === dolphinAverage &&
  dolphinAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log("Match is drawn");
} else {
  console.log("No one win the match");
}

// if (koalasAverage >= 100 && dolphinAverage >= 100) {
//   console.log(`Score is less than 100`);
// } else if (koalasAverage > dolphinAverage) {
//   console.log(`Winner is koalas`);
// } else if (dolphinAverage > koalasAverage) {
//   console.log(`dolphine is winner`);
// } else if (
//   koalasAverage == dolphinAverage &&
//   koalasAverage &&
//   dolphinAverage >= 100
// ) {
//   console.log(`Match is drawn`);
// }
