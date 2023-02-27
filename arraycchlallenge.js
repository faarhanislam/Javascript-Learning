function calcTip(a) {
  let tip = a >= 50 && a <= 300 ? a * 0.15 : a * 0.2;
  //   console.log(tip);
  return tip;
}
const bills = [125, 55, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
