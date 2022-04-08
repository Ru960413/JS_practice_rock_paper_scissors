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
const buttons = document.querySelectorAll("#button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const playerSelection = this.value;
    const array = ["Rock", "Paper", "Scissors"];
    const computerSelection = array[Math.floor(Math.random() * 3)];

    updateMoves(playerSelection, computerSelection);
    playGame(playerSelection, computerSelection);
    updateScore();
    if (checkForTheWinner()) {
      playerScore = computerScore = 0;
      updateScore();
      //When it returns true, set the scores back to zero and call updateScore() again to refresh the rendered scores:
    }
  });
});

//write a function to display result in the two divs , and another function to end the game.

function playGame(playerSelection, computerSelection) {
  const currentMatch = `${playerSelection} vs ${computerSelection}`;

  // Tie check
  if (playerSelection === computerSelection) {
    alert(`${currentMatch} is a Tie`);
    return;
  }

  // Rock
  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      alert(`${currentMatch} = You Win`);
      playerScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      computerScore++;
    }
  }
  // Paper
  else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      alert(`${currentMatch} = You Win`);
      playerScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      computerScore++;
    }
  }
  // Scissors
  else {
    if (computerSelection === "Paper") {
      alert(`${currentMatch} = You Win`);
      playerScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      computerScore++;
    }
  }
}

function updateScore() {
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function checkForTheWinner() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      alert("Congrats! You win the game! Yay! 🤩");
    } else {
      alert("Computer wins! Try again next time 😉");
    }
  }
}
//有bug:沒辦法 alert winner

function updateMoves(playerSelection, computerSelection) {
  document.getElementById("p-move").src = `RPS_icons/${playerSelection}.png`;
  document.getElementById("c-move").src = `RPS_icons/${computerSelection}.png`;
}

console.log(computerScore);
console.log(playerScore);
