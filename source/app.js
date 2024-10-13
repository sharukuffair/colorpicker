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
  const colorName = e.target.id.replace("red", "");
  color[colorName] = e.target.value;
  updateDisplay();

  // labelRed.textContent = e.target.value;
  // redColor = Number(e.target.value);
});
inputGreen.addEventListener("input", (e) => {
  labelgreen.textContent = e.target.value;
  greenColor = Number(e.target.value);
});
inputBlue.addEventListener("input", (e) => {
  labelBlue.textContent = e.target.value;
  blueColor = Number(e.target.value);
});

// local
function updateColor(e) {
  const colorName = e.target.value;
  color[colorName] = e.target.value;
  updateDisplay();
}

function updateDisplay() {
  // const colorString = ;
  displayColor.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
  displayColor.textContent = `rgb(${color.red}, ${color.green}, ${color.blue})`;
}
