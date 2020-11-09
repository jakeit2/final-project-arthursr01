var startBtn = document.getElementById("startButton");

function myFunction() {
    var c = document.getElementById("tronCanvas");
    
  }

  function startGame(){
    startBtn.style.display = 'none';
    
  }
  function controlPlayer1(){
    switch(e.keyCode) {
      case 65:
          deltaA -= 2;
          break;
      case 87:
          deltaB -= 2;
          break;
      case 68:
          deltaA += 2;
          break;
      case 83:
          deltaB += 2;
          break;
  }
  }
  function controlPlayer2() {
    switch(e.keyCode) {
      case 37:
          deltaX -= 2;
          break;
      case 38:
          deltaY -= 2;
          break;
      case 39:
          deltaX += 2;
          break;
      case 40:
          deltaY += 2;
          break;
  }
}