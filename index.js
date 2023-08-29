"use strict";

/**
 * Returns a pseudorandom selection of "ROCK", "PAPER", or "SCISSORS".
 * @returns {string}
 */
function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];

  return choices[Math.floor(Math.random() * choices.length)];
}

function main() {
    console.log("Hello World");
}

main();