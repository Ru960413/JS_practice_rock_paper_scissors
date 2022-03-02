/*thoughts(algorithm):
      1. ask player to choose between rock, paper or scissors

      2. make the computer randomly pick between rock, paper, and scissors(by using a function?)
      3. have 2 parameters: playerSelection and computerSelection
      4. make it play once, using function playOnce()
      5. In what situations will the player win?
      6. In what situations will the player lose?
      7. return the results

      8. write a new function game(), and call for the function playOnce(), and keep scores
      9. let the game play for five rounds(loop the existing code using for loop)

      */
let playerSelection = prompt("Make your choice(rock, paper or scissors?)", "");

function computerPlay() {
  let array = ["rock", "paper", "scissors"];
  return array[Math.floor(Math.random() * 3)];
}

playerSelection = playerSelection.toLowerCase();
let computerSelection = computerPlay();

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
  } else {
    alert("You lose, oh no!");
  }
}

playOnce(playerSelection, computerSelection);

/*function playFiveRounds() {
        for (i = 0; i < 5; i++) {
          playOnce(playerSelection, computerSelection);
        }
      }*/
