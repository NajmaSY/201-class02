let userPoints = 0;

function getUserInput(promptMessage) {
  let userInput = prompt("What is your name?");
  alert("Hello " + userInput + ". Welcome to my website about me");
}

function askQuestion(promptMessage, correctAnswer) {
  let userAnswer = prompt(promptMessage);
  while (userAnswer !== correctAnswer) {
    userAnswer = prompt("Guess Again. " + promptMessage);
  }
  alert("Correct, " + correctAnswer);
}

//when button is clicked

function startQuiz() {
  let userInput = prompt("What is your name?");
  alert("Hello " + userInput + ". Welcome to my website about me");

  let eduQuestion = "Do i have a degree in Psychology? (yes or no)";
  let eduQ = getUserInput(eduQuestion);

  if (eduQ === "yes") {
    alert("YES!I do have a psychology degree");
  } else {
    alert("Wrong answer!");
  }

  let ageQuestion = "How old am I?";
  askQuestion(askQuestion, "21");

  let homeQuestion = "Do i live in Liverpool (yes or no)";
  let homeQ = getUserInput(homeQuestion);

  if (homeQ === "yes") {
    alert("YES!I do live in Liverpool, home of the beatles");
  } else {
    alert("Wrong Answer!");
  }

  let moveHouseQuestion = "Where do i want to live in the future?";
  let moveHouse = getUserInput(moveHouseQuestion);

  if (moveHouse === "london") {
    alert("YES!I want to move to London in the future");
  } else {
    alert("Wrong Answer!");
  }
}


/*

function startNumberQuiz() {
  let answer = 5;
  let number = prompt("Guess a number between 1 and 10");

  for (let i = 1; i <= 4; i++) {
    if (number > answer) {
      alert("too high");
      number = prompt("Guess again");
    } else if (number < answer) {
      alert("too low");
      number = prompt("Guess again");
    } else if (parseInt(number) === answer) {
      alert("That right! The answer was 5");
      break;
    }
  }

  let list = ["Dubai", "France", "Italy", "America"];
  let guess = prompt("What country do i want to visit in the world");

  let idx = list.indexOf(guess);
  console.log(idx);

  while (guess !== idx) {
    guess = prompt("GuessWhat country do i want to visit in the world");
  }
  alert("That's Correct");
}

//Q7-multple possible correct answers
//give user 6 attempts

//give final score out of 7
//use console.log throughout to track questions
//add css
