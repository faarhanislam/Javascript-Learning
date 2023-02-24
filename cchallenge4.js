const bill = Number(prompt());
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const finalValue = bill + tip;
console.log(bill, tip, finalValue);
