var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  // squares[colors.length].style.backgroundColor = "transparent";
  // squares[colors.length + 1].style.backgroundColor = "transparent";
  // squares[colors.length + 2].style.backgroundColor = "transparent";
  h1.style.backgroundColor = "transparent";
});

hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
  h1.style.backgroundColor = "transparent";
});

resetButton.addEventListener("click", function() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "transparent";
  messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "transparent";
      messageDisplay.textContent = "Try again";
    }
  });
}

function changeColors(color) {
  //loop throught all squares
  for (let i = 0; i < squares.length; i++) {
    //change each color to match winner color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a 'red' from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a 'green' from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a 'blue' from 0 - 255
  var b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
