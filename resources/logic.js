const startGameButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("menu");
const selectScreen = document.getElementById("selectBike");

// instantiate the game object
let game;
let outcome, winner, playerCount = Player.allInstances.length;

// hide gamescreen
selectScreen.classList.add(`d-none`);

startGameButton.addEventListener(`click`, function(startGameButtonEvent){
     startGameButton.preventDefault();
     welcomeScreen.classList.add("d-none");
     selectScreen.classList.remove("d-none");
})

function draw(){
     if (playerCount.allInstances.filter(p => !p.key).length == 0){
          if(playerCount == 1) {
               const alivePlayers = Player.allInstances.filter(p => p.dead == false);
               outcome = `Player ${alivePlayers[0].playerId} wins!`;
          } else if (playerCount == 0) {
               outcome = 'Draw!';
          }
     }
}

const game = setInterval(draw, 100);