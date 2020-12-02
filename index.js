var startBtn = document.getElementById("startButton");
//const startGameButton = document.getElementById("startButton");
//const welcomeScreen = document.getElementById("menu");
//const selectScreen = document.getElementById("selectBike");
const endgameResults = document.getElementById("gameHistoryResults");

let outcome, winner, playerCount = Player.allInstances.length;
const unit = 15;
const context = canvas.getContext("2d");
var objImage= null;
var playerSpeed = 200;
// hide gamescreen
//selectScreen.classList.add(`d-none`);


class Player{
  constructor(pos, url) {
      this.color = color || "#fff";
      this.pos = pos;
      this.dead = false;
      this.direction = '';
      this.key = "";
      this.url = url;


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



  function startGame(){
      var blueBike = document.getElementById("blue");
    


  }


  
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


function init(){
  objImage=document.getElementById("image1");				
  objImage.style.position='relative';
  objImage.style.left='0px';
  objImage.style.top='0px';
}

function init(){
  objImage=document.getElementById("image1");				
  objImage.style.position='relative';
  objImage.style.left='0px';
  objImage.style.top='0px';
}
function getKeyAndMove(e){				
  var key_code=e.which||e.keyCode;
  switch(key_code){
    case 37: //left arrow key
      moveLeft();
      break;
    case 38: //Up arrow key
      moveUp();
      break;
    case 39: //right arrow key
      moveRight();
      break;
    case 40: //down arrow key
      moveDown();
      break;						
  }
}
function moveLeft(){
  objImage.style.left=parseInt(objImage.style.left)-5 +'px';
}
function moveUp(){
  objImage.style.top=parseInt(objImage.style.top)-5 +'px';
}
function moveRight(){
  objImage.style.left=parseInt(objImage.style.left)+5 +'px';
}
function moveDown(){
  objImage.style.top=parseInt(objImage.style.top)+5 +'px';
}
window.onload=init;



function determineWinner(){
  if (playerCount.allInstances.filter(p => !p.key).length == 0){
       if(playerCount == 1) {
            const alivePlayers = Player.allInstances.filter(p => p.dead == false);
            outcome = `Player ${alivePlayers[0].playerId} wins!`;
       } else if (playerCount == 0) {
            outcome = 'Draw!';
       }

       if (outcome) {
        function myPlay(){
          var audio = new Audio("resources/music/Bike-Crash.mp3");
          audio.play();
      }
            createEndScreen(winner);
            clearInterval(game);
       }
  }

}

<<<<<<< HEAD

=======
>>>>>>> d7b438ffa23e829e50517e601a0f12fd14dd505e
let modifier = 5;
window.addEventListener('keydown', (event) => {
  objImage=document.getElementById("image1");	
  switch (event.key) {
    case 'ArrowUp' : objImage.top = `${parseInt(objImage.top) - modifier}px`; break;
    case 'ArrowDown' : objImage.top = `${parseInt(objImage.top) + modifier}px`; break;
    case 'ArrowLeft' : objImage.left = `${parseInt(objImage.left) - modifier}px`; break;
    case 'ArrowRight' : objImage.left = `${parseInt(objImage.left) + modifier}px`; break;
  }
});



//const game = setInterval(draw, 100);
//game = setInterval(draw, 100);

function createEndScreen(color) {
  const resultText = document.getElementById('gameHistory');
  const replayButton = document.createElement('button');
  resultText.innerText = outcome;
  resultText.style.fontFamily = 'Time New Romans, initial';
  resultText.style.textAlign = 'center';
  resultText.style.textTransform = 'uppercase';
  replayButton.innerText = 'Replay Game';
  replayButton.style.fontFamily = 'Time New Romans, initial';
  replayButton.style.cursor = 'pointer';
  replayButton.onclick = resetGame;

  this.gameHistoryLog = [];

  this.gameHistoryLog.push(outcome);
  endgameResults.innerHTML = game.gameHistoryLog;



}

function resetGame(){
  outcome = '';
  winner = '';

  context.clearRect(0, 0, canvas.width, canvas.height);
  clearInterval(game);
  game = setInterval(draw,100);
}


