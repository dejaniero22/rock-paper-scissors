function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || "paper" || "scissors") {
    return userInput;
  } else {
    console.log("This is not one of the 3 choices: rock, paper, or scissors.");
  }
}

function getComputerChoice() {
  var computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      console.log("Sorry that isn't an option!");
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === "bomb") {
    return "You win!";
  }
  if (userChoice === computerChoice) {
    return "The game was a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else if (computerChoice === "rock") {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else if (computerChoice === "paper") {
      return "You won!";
    }
  }
}

function playGame() {
  var userChoice = getUserChoice("bomb");
  var computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
