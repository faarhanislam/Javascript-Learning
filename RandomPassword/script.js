const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

//selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const numbers = document.getElementById("numbers");
const symbol = document.getElementById("symbols");

function randomData(datasets) {
  return datasets[Math.floor(Math.random() * datasets.length)];
}
function passwordGenerator(password = "") {
  if (upperCase.checked) {
    password += randomData(upperSet);
  }
  if (lowerCase.checked) {
    password += randomData(lowerSet);
  }
  if (numbers.checked) {
    password += randomData(numberSet);
  }
  if (symbol.checked) {
    password += randomData(symbolSet);
  }
  if (password.length < totalChar.value) {
    return passwordGenerator(password);
  }
  truncateString(password, totalChar);
  passBox.innerText = `${password}`;
}
passwordGenerator();
document.getElementById("btn").addEventListener("click", function () {
  passwordGenerator();
});

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
