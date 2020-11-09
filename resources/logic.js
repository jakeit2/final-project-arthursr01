const startGameButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("menu");
const selectScreen = document.getElementById("selectBike");

// instantiate the game object
let game;

// hide gamescreen
selectScreen.classList.add(`d-none`);

startGameButton.addEventListener(`click`, function(startGameButtonEvent){
     startGameButton.preventDefault();
     welcomeScreen.classList.add("d-none");
     selectScreen.classList.remove("d-none");
})