let humanScore = 0;
let computerScore = 0;

const main = document.getElementById('main');
const result = document.getElementById('result');
const resultDescription = document.getElementById('resultDescription');
const scoreboard = document.getElementById('scoreboard');
const humanScoreCounter = document.getElementById('humanScoreCounter');
const humanIcon = document.getElementById('humanIcon');
const computerScoreCounter = document.getElementById('computerScoreCounter');
const computerIcon = document.getElementById('computerIcon');
const buttons = document.querySelectorAll('button');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const playAgain = document.createElement('p');
playAgain.textContent = "Click here to play again";
playAgain.classList.add('playAgain');

function getComputerChoice() {
  let n = Math.floor(Math.random() * 3);

  if (n === 0) {
    computerIcon.textContent = "✊";
    return "rock";
  } else if (n === 1) {
    computerIcon.textContent = "📄";
    return "paper";
  } else {
    computerIcon.textContent = "✂️";
    return "scissors";
  }
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    result.textContent = "It's a Tie!";
    resultDescription.textContent = "Let's go again";
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    computerScoreCounter.textContent = `${computerScore}`;
    result.textContent = "You Lose!";
    resultDescription.textContent = "Paper beats Rock";
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore++;
    humanScoreCounter.textContent = `${humanScore}`;
    result.textContent = "You Win!";
    resultDescription.textContent = "Rock beats Scissors";
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    humanScoreCounter.textContent = `${humanScore}`;
    result.textContent = "You Win!";
    resultDescription.textContent = "Paper beats Rock";
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    computerScoreCounter.textContent = `${computerScore}`;
    result.textContent = "You Lose!";
    resultDescription.textContent = "Scissors beats Paper";
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    computerScoreCounter.textContent = `${computerScore}`;
    result.textContent = "You Lose!";
    resultDescription.textContent = "Rock beats Scissors";
  } else {
    humanScore++;
    humanScoreCounter.textContent = `${humanScore}`;
    result.textContent = "You Win!";
    resultDescription.textContent = "Scissors beats Paper";
  }

  if (humanScore === 5 || computerScore === 5) {
    displayWinner();
  }
}

function displayWinner() {
  if (humanScore === 5) {
    result.textContent = "Human beats Computer!";
    main.removeChild(resultDescription);
    main.insertBefore(playAgain, scoreboard);
  } else {
    result.textContent = "Computer beats Human!";
    main.removeChild(resultDescription);
    main.insertBefore(playAgain, scoreboard);
  }
}

playAgain.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  humanScoreCounter.textContent = `${humanScore}`;
  computerScoreCounter.textContent = `${computerScore}`;
  result.textContent = "Let's begin";
  resultDescription.textContent = "First to reach 5 points wins the game";
  main.removeChild(playAgain);
  main.insertBefore(resultDescription, scoreboard);
  humanIcon.textContent = "❔";
  computerIcon.textContent = "❔";
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (humanScore === 5 || computerScore === 5) {
      return;
    } else {
      let computerSelection = getComputerChoice();

      if (button === rock) {
        humanSelection = "rock";
        humanIcon.textContent = "✊";
      } else if (button === paper) {
        humanSelection = "paper";
        humanIcon.textContent = "📄";
      } else {
        humanSelection = "scissors";
        humanIcon.textContent = "✂️";
      }
  
      playRound(humanSelection, computerSelection);
    }
  });
});