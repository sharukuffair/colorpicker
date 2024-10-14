const inputRed = document.querySelector("[data-red-range]");
const inputGreen = document.querySelector("[data-green-range]");
const inputBlue = document.querySelector("[data-blue-range]");
const labelRed = document.querySelector("[data-red-label]");
const labelgreen = document.querySelector("[data-green-label]");
const labelBlue = document.querySelector("[data-blue-label]");
const displayColor = document.querySelector(["data-displayColor"]);

let redColor = 10;
let greenColor = 10;
let blueColor = 10;

let color = {
  red: 0,
  green: 0,
  blue: 0,
};

inputRed.addEventListener("input", (e) => {
  labelRed.textContent = e.target.value;
  redColor = labelRed.textContent;
  console.log(redColor);
  console.log(labelRed.textContent);
  color.red = Number(e.target.value);
});
inputGreen.addEventListener("input", (e) => {
  labelgreen.textContent = e.target.value;
  color.green = Number(e.target.value);
});
inputBlue.addEventListener("input", (e) => {
  labelBlue.textContent = e.target.value;
  color.blue = Number(e.target.value);
});

document.querySelector(".test").textContent = redColor;
