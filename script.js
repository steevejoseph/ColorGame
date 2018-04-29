var numSquares = 9;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');

      if (this.textContent === "Easy") {
        numSquares = 3;
      }else {
        numSquares = 9;
      }

      reset(numSquares);
    });;
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);

        if (clickedColor === pickedColor) {
          resetButton.textContent = "Play Again?"
          messageDisplay.textContent = "Correct!";
          changeColor(pickedColor);
          h1.style.backgroundColor = pickedColor;
        } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again";
        }
    });
  }
}


function reset() {
  // generate new Colors
  colors = generateRandomColors(numSquares);
  // pick new colors
  pickedColor = pickColor();

  // change color display to match picked color.
  colorDisplay.textContent = pickedColor;

  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";

  document.querySelector('a').style.color = "steelblue";
  document.querySelector('p').style.color = "steelblue";

  // change colors of squares on page
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else {
      squares[i].style.display = "none";

    }
  }

}

resetButton.addEventListener('click', function() {
  reset();
});

function pickColor() {
  var random = Math.floor((Math.random() * colors.length));
  return colors[random];
}

function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }

  document.querySelector('a').style.color = color;
  document.querySelector('p').style.color = color;

}

function generateRandomColors(numberOfColors) {

  // Make array
  var arr = []

  // Add numberOfColors rand colors
  for (var i = 0; i < numberOfColors; i++)
    arr.push(randomColor());

  // return arr;
  return arr;
}

function randomColor() {
  r = Math.floor(Math.random() * 255 + 1);
  g = Math.floor(Math.random() * 255 + 1);
  b = Math.floor(Math.random() * 255 + 1);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
