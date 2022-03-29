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
//set both the score of the computer and the player to zero

function computerPlay() {
  let array = ["rock", "paper", "scissors"];
  return array[Math.floor(Math.random() * 3)];
}
//let the computer randomly pick rock, paper or scissors
let computerSelection = computerPlay();

let btn = document.getElementById("btn");
btn.addEventListener("click", playOnce());

function playOnce() {
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
//this function tells the computer all the win/lose/even situations,and count the scores

/*for (let i = 0; i < 5; i++) {
  playOnce();
}*/
//repeats the game for five rounds

function displayTheWinner() {
  if (playerScore == computerScore) {
    alert("It's a tie! No one wins or loses.");
  } else if (playerScore > 5) {
    alert("Congrats! You win the game! Yay! 🤩");
  } else {
    alert("Oh no! You lose 😭");
  }
}
//this function displays the winner

/*playOnce();
displayTheWinner();
console.log(computerScore);
console.log(playerScore);*/
