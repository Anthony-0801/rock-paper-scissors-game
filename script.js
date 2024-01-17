let playerSelection = ''
let computerSelection = getComputerChoice()




function getComputerChoice(choice) {
let choices = ['rock', 'paper', 'scissors']
choice = choices[Math.floor(Math.random() * choices.length)];
return choice
}