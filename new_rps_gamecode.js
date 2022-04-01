/*
In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
For now, remove the logic that plays exactly five rounds.

1. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function
 with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

2. Add a div for displaying results and change all of your console.logs into DOM methods.

3. Display the running score, and announce a winner of the game once one player reaches 5 points.

You will likely have to refactor (rework/rewrite) your original code to make it work for this. 
That’s OK! Reworking old code is an important part of a programmer’s life.
Once you’re all done with your UI and made sure everything’s satisfactory, commit your changes to the rps-ui branch.
*/

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("#Button");
for (let button of buttons) {
  button.addEventListener("click", playGame);
}

/*function playGame() {
  const result = playARound(this.idName, computerPlay());
  updateScores(result);
  if (playerScore == 5 || computerScore == 5) {
    endGame();
  }
}*/
function computerPlay() {
  let array = ["rock", "paper", "scissors"];
  return array[Math.floor(Math.random() * 3)];
}
let computerSelection = computerPlay();

//write a function to display result in the two divs , a function to  update the scores
//, and another function to end the game.

function playOnce(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "paper")
  ) {
    alert("It's a tie!");
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    alert("You win! Congrats!");
    playerScore += 1;
  } else {
    alert("You lose, oh no!");
    computerScore += 1;
  }
}

/*function displayResult(result, msg) {
  const playerScore = document.querySelector(".playerScore");
  const computerScore = document.querySelector(".computerScore");
  playerScore.textContent = msg;
  computerScore.textContent = msg;
}*/
//this function tells the computer all the win/lose/even situations,and count the scores

/*function displayTheWinner() {
  if (playerScore == computerScore) {
    alert("It's a tie! No one wins or loses.");
  } else if (playerScore > 5) {
    alert("Congrats! You win the game! Yay! 🤩");
  } else {
    alert("Oh no! You lose 😭");
  }
}*/
//this function displays the winner
