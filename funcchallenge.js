let calAverage = (a, b, c) => a + b + c / 3;

let avgDolhins = calAverage(85, 54, 41);
let avgKolas = calAverage(23, 34, 27);

console.log(avgDolhins);
console.log(avgKolas);

function checkWinner(avgDolhins, avgKolas) {
  if (avgDolhins >= avgKolas * 2) {
    console.log(
      `Dolhins ${avgDolhins} is a winner ${avgDolhins} vs ${avgKolas}`
    );
  } else if (avgKolas >= avgDolhins * 2) {
    console.log(`Kolas ${avgKolas} is a winner ${avgKolas} vs ${avgDolhins}`);
  } else {
    console.log("No team wins");
  }
}
checkWinner(avgDolhins, avgKolas);
