let calculation = localStorage.getItem("calculation") || "";

displayText();

function updateCalculation(value) {
  calculation += value;
  displayText();
}

function saveCalculation() {
  localStorage.setItem("calculation", calculation);
}

function displayText() {
  document.querySelector(".display-text").innerHTML = calculation;
}
