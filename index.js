var startBtn = document.getElementById("startButton");
//const startGameButton = document.getElementById("startButton");
//const welcomeScreen = document.getElementById("menu");
//const selectScreen = document.getElementById("selectBike");
const endgameResults = document.getElementById("gameHistoryResults");
var yellowBike = document.getElementById("image1")
let outcome, winner, playerCount = Player.allInstances.length;
const unit = 15;
// hide gamescreen
//selectScreen.classList.add(`d-none`);

class Player{
  constructor(pos1, pos2, image) {
      this.color = color || "#fff";
      this.pos1 = pos1;
      this.pos2 = pos2;
      this.dead = false;
      this.direction = '';
      this.key = "";
      this.image = image;


      this.constructor.counter = (this.constructor.counter || 0) + 1;
      this.playerId = this.constructor.counter;

      Player.allInstances.push(this);
  };
};

Player.allInstances = [];
//should get the properties of the choosen bike
let p1 = new Player();
let p2 = new Player();
let p3 = new Player();
let p4 = new Player();

function openMenu() {
  var pickBike = document.getElementById("Menu");
  if (pickBike.style.display === "none") {
    pickBike.style.display = "block";
    startBtn.style.visibility = "hidden";
    window.addEventListener("DOMContentLoaded", event => {
      const audio = document.querySelector("audio");
      audio.volume = 0.2;
      audio.play();
    });
  } else {
    pickBike.style.display = "none"
  }

  
}

function myFunction() {
    var c = document.getElementById("tronCanvas");
    
  }



  function launchGame(){
      var blueBike = document.getElementById("blue");


  
  }
  /*
  function setKey(key, player, up, right, down, left) {
    switch (key) {
      case up:
        if (player.direction !== "DOWN") {
          player.key = "UP";
        }
        break;
      case right:
        if (player.direction !== "LEFT") {
          player.key = "RIGHT";
        }
        break;
      case down:
        if (player.direction !== "UP") {
          player.key = "DOWN";
        }
        break;
      case left:
        if (player.direction !== "RIGHT") {
          player.key = "LEFT";
        }
        break;
      default:
        break;
    }
  }

  function handleKeyPress(event) {
    let key = event.keyCode;
  
    if (key === 37 || key === 38 || key === 39 || key === 40) {
      event.preventDefault();
    }
  
    setKey(key, p1, 38, 39, 40, 37);
    setKey(key, p2, 87, 68, 83, 65); 
  }

document.addEventListener('keydown', handleKeyPress);
*/

function leftArrowPressed() {
  var element = document.getElementById("image1");
  element.style.left = parseInt(element.style.left) - 5 + 'px';
  }

  function rightArrowPressed() {
  var element = document.getElementById("image1");
  element.style.left = parseInt(element.style.left) + 5 + 'px';

  }

  function upArrowPressed() {
  var element = document.getElementById("image1");
  element.style.top = parseInt(element.style.top) - 5 + 'px';
  }

  function downArrowPressed() {
  var element = document.getElementById("image1");
  element.style.top = parseInt(element.style.top) + 5 + 'px';
  }

  function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
        leftArrowPressed();
        break;
        case 39:
        rightArrowPressed();
        break;
        case 38:
        upArrowPressed();
        break;
        case 40:
        downArrowPressed();
        break;
        }
    };

function docReady()
{

  window.addEventListener('keydown', moveSelection);
}



function determineWinner(){
  if (playerCount.allInstances.filter(p => !p.key).length == 0){
       if(playerCount == 1) {
            const alivePlayers = Player.allInstances.filter(p => p.dead == false);
            outcome = `Player ${alivePlayers[0].playerId} wins!`;
       } else if (playerCount == 0) {
            outcome = 'Draw!';
       }

       if (outcome) {
            createEndScreen(winner);
            clearInterval(game);
       }
  }

}


//const game = setInterval(draw, 100);
//game = setInterval(draw, 100);

function createEndScreen(color) {
  const resultText = document.getElementById('gameHistory');
  resultText.innerText = outcome;
  this.gameHistoryLog = [];

  this.gameHistoryLog.push(outcome);
  endgameResults.innerHTML = game.gameHistoryLog;


}


