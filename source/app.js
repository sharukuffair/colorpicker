const inputRed = document.querySelector("[data-red-range]");
const inputGreen = document.querySelector("[data-green-range]");
const inputBlue = document.querySelector("[data-blue-range]");
const labelRed = document.querySelector("[data-red-label]");
const labelgreen = document.querySelector("[data-green-label]");
const labelBlue = document.querySelector("[data-blue-label]");
const displayColor = document.querySelector(["data-displayColor"]);

let color = {
  red: 0,
  green: 0,
  blue: 0,
};

// inputRed.addEventListener("input", (e) => {
//   labelRed.textContent = e.target.value;
//   color.red = Number(e.target.value);
// });
// inputGreen.addEventListener("input", (e) => {
//   labelgreen.textContent = e.target.value;
//   color.green = Number(e.target.value);
// });
// inputBlue.addEventListener("input", (e) => {
//   labelBlue.textContent = e.target.value;
//   color.blue = Number(e.target.value);
// });

// console.log(color.red, color.green, color.blue);
// document.querySelector(".test").textContent = color.red;

function updateColor() {
  labelRed.textContent = inputRed.value;
  labelgreen.textContent = inputGreen.value;
  labelBlue.textContent = inputBlue.value;
  color.red = Number(inputRed.value);
  color.green = Number(inputGreen.value);
  color.blue = Number(inputBlue.value);
  // displayColor.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
  // displayColor.textContent = `rgb(${color.red}, ${color.green}, ${color.blue})`;
}
console.log(color.red, color.green, color.blue);
