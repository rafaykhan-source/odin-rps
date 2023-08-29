"use strict";

/**
 * Returns a pseudorandom selection of "ROCK", "PAPER", or "SCISSORS".
 * @returns {string}
 */
function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];

  return choices[Math.floor(Math.random() * choices.length)];
}

/**
 * Returns the result of the rock, paper, scissors round.
 * @param {string} playerChoice Player's choice of rock, paper, or scissors.
 * @param {string} computerChoice Computer's choice of rock, paper, or scissors.
 * @param {object} scoreBoard Game score board to be updated.
 * @returns {string}
 */
function playRound(playerChoice, computerChoice, scoreBoard) {
  const ruleSet = {
    ROCK: "PAPER",
    PAPER: "SCISSORS",
    SCISSORS: "ROCK",
  };

  let result = "";
  if (playerChoice == computerChoice) {
    result = `${playerChoice} and ${computerChoice}. It's a tie!`;
  } else if (ruleSet[playerChoice] == computerChoice) {
    result = `You Lose! ${computerChoice} beats ${playerChoice}.`;
    scoreBoard["computer"]++;
  } else {
    result = `You Win! ${playerChoice} beats ${computerChoice}.`;
    scoreBoard["player"]++;
  }
  return result;
}
/**
 * Returns the result of the game based on the score board.
 * @param {object} scoreBoard Game's score board.
 */
function getGameResult(scoreBoard) {
  let gameResult = "";
  if (scoreBoard["player"] > scoreBoard["computer"]) {
    gameResult = "Congratulations! You Win!";
  } else if (scoreBoard["player"] < scoreBoard["computer"]) {
    gameResult = "Sorry! You Lost!";
  } else {
    gameResult = "It's a tie!";
  }

  return gameResult;
}

function main() {
  const computerChoice = getComputerChoice();
  const playerChoice = "Rock".toUpperCase();
  const result = playRound(playerChoice, computerChoice);
  console.log(result);
}

main();
