let playerSelection = 'rock'
let computerSelection = getComputerChoice()


function getComputerChoice(choice) {
let choices = ['rock', 'paper', 'scissors']
choice = choices[Math.floor(Math.random() * choices.length)];
return document.write("Computer's choice is "), choice;
};


function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
      document.write(`<br> You win, ${playerSelection} defeats ${computerSelection}`);
    }

  else if(playerSelection === computerSelection) {
    document.write("<br> There's a tie!");
  }

  else {
    document.write("<br> You lose");
  }
};

document.write(computerSelection);
playRound(playerSelection, computerSelection);


//adding some experiment function for playerSelection
function playerChoice (choice) {
  document.getElementById(choice)
  return choice
}