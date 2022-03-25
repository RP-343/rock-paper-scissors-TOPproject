// Algorithm
//   Set up a random generator function for the computer's 
//   choices by using a Math.floor & Math.random method 
//   from 0-2 and having that value stored as a variable 
//   in a conditional. (i.e. if randomNumber is 0, cpuChoice 
//   is rock, etc.,)
//   Set up the conditionals that will compare what beats what
//   Set up a function to actually take inputs (using a prompt
//   function), use the conditionals and return the result
//   Set up a function the cleans the user input by convering 
//   it to all uppercase
//   Set up a function to play a game (which is 5 rounds)
//   Set up the for loop counter to count how many rounds have 
//   been played, to cease the game function.
//   Set up a counter for keeping score and reporting the 
//   score at the end.
//   Consider ending the game when one of the players (user 
//   or computer) can no longer win. 
//---------------------------------------------------------//

function computerPlay() {
  function getRandomInt() {
  return Math.floor(Math.random() * 3);
  }
  let computerSelection;
  randomNum = getRandomInt();
  if (randomNum == 0) {
    computerSelection = "ROCK"
  } else if (randomNum == 1) {
    computerSelection = "PAPER"
  } else {
    computerSelection = "SCISSORS"
  }
  return computerSelection;
}

function playerPlay() {
  let playerSelection = prompt("What is your choice?");
  playerSelection = playerSelection.toUpperCase();
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = playerPlay();
  if (playerSelection === computerSelection) {
    result = "Draw"
    alert(result)
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    result = "You Lose! Paper beats rock"
    alert(result)
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    result = "You Win! Rock beats scissors"
    alert(result)
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    result = "You Win! Paper beats rock"
    alert(result)
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    result = "You Lose! Scissors beats paper"
    alert(result)
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    result = "You Lose! Rock beats scissors"
    alert(result)
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    result = "You Win! Scissors beats paper"
    alert(result)
  } else {
    result = "Fatal Error"
    alert(result)
  }
  return result;
}

function game() {
  let playerScore = 0;
  let cpuScore = 0;
  for (let i = 0; i < 5; i++) {
    roundResult = playRound();
    if (roundResult.includes("Win")) {
      playerScore++;
    }
      else if (roundResult.includes("Lose")) {
      cpuScore++;
    }
  }

  if (playerScore > cpuScore) {
    alert(`You won the game! You scored ${playerScore} and the computer scored ${cpuScore}`)
  } else if (playerScore === cpuScore) {
    alert("It's a draw!")
  }
    else {
    alert(`You lost the game! You scored ${playerScore} and the computer scored ${cpuScore}`)
  }
}