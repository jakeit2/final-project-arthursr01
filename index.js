var startBtn = document.getElementById("startButton");
const endgameResults = document.getElementById("gameHistoryResults");
//const startGameButton = document.getElementById("startButton");
//const welcomeScreen = document.getElementById("menu");
//const selectScreen = document.getElementById("selectBike");
var canvas = document.getElementById("tronCanvas");
canvas.style.display = "none";
const unit = 15;
const context = canvas.getContext("2d");
var objImage = null;
var playerSpeed = 200;
var p = "#ffff";
var pickBike = document.getElementById("Menu");
const volume = document.querySelector("audio").volume;
document.querySelector("audio").volume = 0.2;

// hide gamescreen
//selectScreen.classList.add(`d-none`);
function openMenu() {
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
  //drawSprites("resources/Images/yellow-bike.png", 10, 10);

 
}

function startGameBlue() {
  //var blueBike = document.getElementById("blue");
  //var greenBike = document.getElementById("green");
  //var yellowBike = document.getElementById("yellow");
  
  p1.color = "#0057FF";
  pickBike.style.display = "none";
  
  canvas.style.display = "block";
  playGame();

}

function startGameGreen(){
  
  p1.color = "#11FF00";
  pickBike.style.display = "none";
  canvas.style.display = "block";
  playGame();
}

function startGameYellow(){
  p1.color = "#F6FF00";
  pickBike.style.display = "none";
  canvas.style.display = "block";
  playGame();
}

class Player {
  constructor(x, y, color) {
    this.color = color || "#fff";
    this.dead = false;
    this.direction = "";
    this.key = "";
    this.x = x;
    this.y = y;
    this.startX = x;
    this.startY = y;

    this.constructor.counter = (this.constructor.counter || 0) + 1;
    this.playerId = this.constructor.counter;

    Player.allInstances.push(this);
  }
}

Player.allInstances = [];
let p1 = new Player(unit * 6, unit * 6, "#0057FF");
let p2 = new Player(unit * 43, unit * 30, "#FF5050");





let game = setInterval(draw,100);

function playGame() {
  getPlayableCells(canvas);
  drawBackground();
  drawStartingPositions(Player.allInstances);
  //setInterval(draw, 100);
}



/*
function drawSprites(url, pos1, pos2){
  var p = new Image();
  p.src = url;
  p.addEventListener("load", function() {
      ctx.drawImage(img, pos1, pos2);
  });
}
*/
function getPlayableCells(canvas, unit) {
  let playableCells = new Set();
  for (let i = 0; i < canvas.width / unit; i++) {
    for (let j = 0; j < canvas.height / unit; j++) {
      playableCells.add(`${i * unit}x${j * unit}y`);
    };
  };
  return playableCells;
};

let playableCells = getPlayableCells(canvas, unit);

function drawBackground() {
  context.strokeStyle = '#001900';
  for (let i = 0; i <= canvas.width / unit + 2; i += 2) {
    for (let j = 0; j <= canvas.height / unit + 2; j += 2) {
      context.strokeRect(0, 0, unit * i, unit * j);
    };
  };
  context.strokeStyle = '#000000';
  context.lineWidth = 2;
  for (let i = 1; i <= canvas.width / unit; i += 2) {
    for (let j = 1; j <= canvas.height / unit; j += 2) {
      context.strokeRect(0, 0, unit * i, unit * j);
    };
  };
  context.lineWidth = 1;
};
drawBackground();

function drawStartingPositions(players) {
  players.forEach(p => {
    context.fillStyle = p.color;
    context.fillRect(p.x, p.y, unit, unit);
    context.strokeStyle = 'black';
    context.strokeRect(p.x, p.y, unit, unit);
  });
};



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
let outcome, winner, playerCount = Player.allInstances.length;

function determineWinner() {
  if (Player.allInstances.filter(p => !p.key).length == 0) {
    if (playerCount == 1) {
      const alivePlayers = Player.allInstances.filter(p => p.dead == false);
      outcome = `Player ${alivePlayers[0].playerId} wins!`;
      winner = alivePlayers[0].color;
    } else if (playerCount == 0) {
      outcome = 'Draw!';
    }
    if (outcome) {
      var audio = new Audio("resources/music/Bike-Crash.mp3");
      audio.play();
      createEndScreen(winner);
      clearInterval(game);
    }

    //if (outcome) {
    // function myPlay() {
    // var audio = new Audio("resources/music/Bike-Crash.mp3");
    // audio.play();
    // }

    //}
  }

}
function draw() {

  Player.allInstances.forEach((p) => {
    if (p.key) {
      p.direction = p.key;

      context.fillStyle = p.color;
      context.fillRect(p.x, p.y, unit, unit);
      context.strokeStyle = "black";
      context.strokeRect(p.x, p.y, unit, unit);

      if (!playableCells.has(`${p.x}x${p.y}y`) && p.dead === false) {
        p.dead = true;
        p.direction = "";
        playerCount -= 1;
        determineWinner();
      }

      playableCells.delete(`${p.x}x${p.y}y`);

      if (!p.dead) {
        if (p.direction === "LEFT") p.x -= unit;
        if (p.direction === "UP") p.y -= unit;
        if (p.direction === "RIGHT") p.x += unit;
        if (p.direction === "DOWN") p.y += unit;

      }
    }
  });
}


function createEndScreen(color) {
  const resultScreen = document.createElement('div');
  const resultText = document.createElement('h1');
  const replayButton = document.createElement('button');
  resultScreen.id = 'result';
  resultScreen.style.color = color || '#fff';
  resultScreen.style.position = 'fixed';
  resultScreen.style.top = 0;
  resultScreen.style.display = 'grid';
  resultScreen.style.width = '100%';
  resultScreen.style.height = '100vh';
  resultScreen.style.justifyContent = 'center';
  resultScreen.style.alignItems = 'center';
  resultText.innerText = outcome;
  resultText.style.fontFamily = 'Time New Romans, initial';
  resultText.style.textAlign = 'center';
  resultText.style.textTransform = 'uppercase';
  replayButton.innerText = 'Replay Game';
  replayButton.style.fontFamily = 'Time New Romans, initial';
  replayButton.style.cursor = 'pointer';
  replayButton.style.position = 'absolute';
  replayButton.style.borderRadius = '1em';
  replayButton.style.top = '69%';
  replayButton.style.left = '35%';
  replayButton.style.padding = '15px 30px';
  replayButton.style.overflow = 'hidden';
  replayButton.style.transition = '0.2s all';
  replayButton.style.color = '#fff';
  replayButton.style.textTransform = 'uppercase';
  replayButton.style.letterSpacing = '4px';
  replayButton.style.background = '#26a0da';
  replayButton.style.color = '#000';
  replayButton.style.boxShadow = '0px 0px 10px #26a0da, 0px 0px 40px #26a0da, 0px 0px 80px #26a0da';
  replayButton.style.transitionDelay = '1s';
  replayButton.style.padding = '30px 64px';
  replayButton.style.fontSize = '32px';
  replayButton.style.fontWeight = '6px';
  replayButton.onclick = resetGame;

  resultScreen.appendChild(resultText);
  resultScreen.appendChild(replayButton);
  document.querySelector('body').appendChild(resultScreen);

  this.gameHistoryLog = [];

  this.gameHistoryLog.push(outcome);
  endgameResults.innerHTML = this.gameHistoryLog;
  var stop = setInterval(null);

  clearInterval(stop);
}

function resetGame() {
  const result = document.getElementById('result');
  if (result) result.remove();

  outcome = '';
  winner = '';

  //startBtn.style.visibility = "inline-block";
  
  Player.allInstances.forEach((p) => {
    p.x = p.startX;
    p.y = p.startY;
    p.dead = false;
    p.direction = "";
    p.key = "";
  });
  playerCount = Player.allInstances.length;
  drawStartingPositions(Player.allInstances); 
  
  clearInterval(game);
  game = setInterval(draw, 100);

  // Remove background then re-draw it
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();

  // Reset playableCells
  playableCells = getPlayableCells(canvas, unit);
  openMenu();
}



/*
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
*/


//const game = setInterval(draw, 100);
//game = setInterval(draw, 100);

