let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScoreShow = document.querySelector(".user-score");
const compScoreShow = document.querySelector(".comp-score");

const msg = document.querySelector("#msg");

const gameDraw = () => {
  console.log("game was draw");
  msg.innerText = "Game is draw, Play Again";
  msg.style.backgroundColor = "lightBlue";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log(`You WIn ${userChoice}`);
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "lightGreen";
    userScore++;
    userScoreShow.innerText = userScore;
  } else {
    console.log("You Lose");
    msg.innerText = `You Lose! Comp ${userChoice} beats your ${compChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScoreShow.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  console.log("User choice = ", userChoice);

  const compChoice = genCompChoice();
  console.log("Comp choice = ", compChoice);

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper or scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
