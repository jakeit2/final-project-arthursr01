//const startGameButton = document.getElementById("startButton");
//const welcomeScreen = document.getElementById("menu");
//const selectScreen = document.getElementById("selectBike");
const endgameResults = document.getElementById("gameHistoryResults");

// instantiate the game object
let game;
let outcome, winner, playerCount = Player.allInstances.length;
const unit = 1;
// hide gamescreen
//selectScreen.classList.add(`d-none`);

//startGameButton.addEventListener(`click`, function(startGameButtonEvent){
  //   startGameButton.preventDefault();
    // welcomeScreen.classList.add("d-none");
    // selectScreen.classList.remove("d-none");
//})

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


const game = setInterval(draw, 100);
game = setInterval(draw, 100);

function createEndScreen(color) {
     const resultText = document.getElementById('gameHistory');
     resultText.innerText = outcome;
     this.gameHistoryLog = [];

     this.gameHistoryLog.push(outcome);
     endgameResults.innerHTML = game.gameHistoryLog;


}