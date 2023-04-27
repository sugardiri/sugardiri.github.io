// ## Rules for rock-paper-scissors

//# Rock: beats scissors, loses to paper and ties against itself.
//# Paper: beats rock, loses to scissor and ties against itself.
//# Scissors: beats paper, loses to rock and ties against itself.

//# Start with:

// - Creating variable for the two players and hard-code either "rock" "paper" or "scissors" on them.
let userInput = prompt("Type 'rock', 'paper', or 'scissors'.");
let compChoice = "rock";

/* Unused coding 
let player1 = "rock";
let player2 = "scissors"; */

console.log("userInput:", userInput)
console.log("compChoice", compChoice)

// - Create the conditions to check the variable against each other to see who the winner will be. Use the above "Rules" to help you build the launch,
if (userInput === compChoice) {
    console.log("it's a tie!")
}


/* unused code
if(player1 === player2){
    console.log("it's a tie!"); */

    // writing conditions for when player 1 wins
} else if (player1 ==== "rock" && player2 === "scissors") {
    console.log("Player 1 wins!");
} else if (player1 ==== "paper" && player2 === "rock") {
    console.log("Player 1 wins!");
} else if (player1 ==== "scissors" && player2 === "paper") {
    console.log("Player 1 wins!");
}

// - However the game ends, there should be a result printed to the console.

||