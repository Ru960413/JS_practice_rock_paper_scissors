/*thoughts(algorithm):
      1. ask player to choose between rock, paper or scissors
      2. make the computer randomly pick between rock, paper, and scissors by using a function
      3. have 2 parameters: playerSelection and computerSelection
      4. make it play once, using function playOnce()
      5. In what situations will the player win?
      6. In what situations will the player lose?
      7. alert the results
      8.keep the scores of both the computer and the player
      9.display the scores on the screen(leave it until the next version)
      10. write a new function game(), and call for the function playOnce()
      11. let the game play for five rounds,loop the existing code using "for loop"

      */
let playerScore = 0;
let computerScore = 0;
function computerPlay() {
  let array = ["rock", "paper", "scissors"];
  return array[Math.floor(Math.random() * 3)];
}
let computerSelection = computerPlay();
function playOnce() {
  let playerSelection = prompt(
    "Make your choice(rock, paper or scissors?)",
    ""
  );
  playerSelection = playerSelection.toLowerCase();

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

for (let i = 0; i < 5; i++) {
  playOnce();
}

function displayTheWinner() {
  if (playerScore == computerScore) {
    alert("It's a tie! No one wins or loses.");
  } else if (playerScore > computerScore) {
    alert("Congrats! You win the game! Yay! 🤩");
  } else {
    alert("Oh no! You lose 😭");
  }
}

displayTheWinner();
console.log(computerScore);
console.log(playerScore);

/*playOnce(playerSelection, computerSelection);
      console.log(computerScore);
      console.log(playerScore);
      console.log(playerSelection);
      console.log(computerSelection);*/
