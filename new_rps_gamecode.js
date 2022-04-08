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

function updateMoves(playerSelection, computerSelection) {
  document.getElementById("p-move").src = `RPS_icons/${playerSelection}.png`;
  document.getElementById("c-move").src = `RPS_icons/${computerSelection}.png`;
}
