var startBtn = document.getElementById("startButton");


function openMenu() {
  var pickBike = document.getElementById("Menu");
  if (pickBike.style.display === "none") {
    pickBike.style.display = "block";
  } else {
    pickBike.style.display = "none"
  }
}

function myFunction() {
    var c = document.getElementById("tronCanvas");
    
  }

  function startGame(){

    startBtn.style.display = 'none';
    window.addEventListener("DOMContentLoaded", event => {
      const audio = document.querySelector("audio");
      audio.volume = 0.2;
      audio.play();
    });
// 42cda66ae376e38dcc3c55aa4da7b16a835d28fe
    
    
  }
  function controlPlayer1(){
    switch(e.keyCode) {
      case 65:
          deltaA -= 2;
          p1.key = "LEFT";
          break;
      case 87:
          deltaB -= 2;
          p1.key = "UP";
          break;
      case 68:
          deltaA += 2;
          p1.key = "RIGHT";
          break;
      case 83:
          deltaB += 2;
          p1.key = "DOWN";
          break;
  }
  }
  function controlPlayer2() {
    switch(e.keyCode) {
      case 37:
          deltaX -= 2;
          key = 'LEFT';
          break;
      case 38:
          deltaY -= 2;
          key = "UP";
          break;
      case 39:
          deltaX += 2;
          key = "RIGHT";
          break;
      case 40:
          deltaY += 2;
          key = "DOWN";
          break;
  }
}

document.addEventListener('keydown', handleKeyPress);