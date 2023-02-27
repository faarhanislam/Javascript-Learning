let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

function calcTip(bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

for (let i = 0; i <= bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tips + bills[i]);
  console.log(tips, total);
}
