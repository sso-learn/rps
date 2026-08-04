const outcomes = {
  ROCK: {
    ROCK: "tie",
    PAPER: "lose",
    SCISSORS: "win",
  },
  PAPER: {
    ROCK: "win",
    PAPER: "tie",
    SCISSORS: "lose",
  },
  SCISSORS: {
    ROCK: "lose",
    PAPER: "win",
    SCISSORS: "tie",
  },
};

function getComputerChoice() {
  const choices = Object.keys(outcomes);
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScore(result, humanScore, computerScore) {
  if (result === "win") return { humanScore: humanScore + 1, computerScore };
  if (result === "lose")
    return { humanScore, computerScore: computerScore + 1 };
  return { humanScore, computerScore };
}

function playRound(humanChoice, computerChoice) {
  const roundResult = outcomes[humanChoice][computerChoice];
  console.log(
    `You ${roundResult}! ${humanChoice} ${roundResult}s against ${computerChoice}.`,
  );
  return roundResult;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let roundResult = playRound(humanChoice, computerChoice);
    ({ humanScore, computerScore } = updateScore(
      roundResult,
      humanScore,
      computerScore,
    ));
    console.log(
      `Round ${i + 1} results: You have ${humanScore} points. The computer has ${computerScore} points.`,
    );
  }

  let gameSummary;
  if (humanScore > computerScore) gameSummary = "You win!";
  else if (computerScore > humanScore) gameSummary = "The computer wins!";
  else gameSummary = "It's a tie!";
  console.log(
    `${gameSummary} You had ${humanScore} points, and the computer had ${computerScore} points.`,
  );
}

playGame();
