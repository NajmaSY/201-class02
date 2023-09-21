let userPoints = 0;

function getUserInput(promptMessage) {
  let userInput = prompt("What is your name?");
  alert("Hello " + userInput + ". Welcome to my website about me");
}

function askQuestion(promptMessage, correctAnswer) {
  let userAnswer = prompt(promptMessage);
  while (userAnswer !== correctAnswer) {
    userAnswer = prompt("Wrong answer. " + promptMessage);
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
    alert("Wrong Answer!");
  }

  /*
while (eduQ !== "yes" && eduQ !== "no") {
  eduQ = prompt(
    "Got to be yes or no. Do i have a degree in Psychology?"
  ).toLowerCase();
}

if (eduQ === "yes") {
  alert("YES!I do have a psychology degree");
} else {
  alert("Wrong Answer!");
}

console.log(eduQ);

*/

  let ageQuestion = "How old am I?";
  askQuestion(askQuestion, "21");

  /*
while (age !== "21") {
  age = prompt("wrong answer");
}
alert("Correct, i am 21 years old");
*/

  let homeQuestion = "Do i live in Liverpool (yes or no)";
  let homeQ = getUserInput(homeQuestion);

  if (homeQ === "yes") {
    alert("YES!I do live in Liverpool, home of the beatles");
  } else {
    alert("Wrong Answer!");
  }

  /*

while (homeQ !== "yes" && homeQ !== "no") {
  homeQ = prompt("Try again. Do i live in Liverpool?").toLowerCase();
}

if (homeQ === "yes") {
  alert("YES!I do live in Liverpool, home of the beatles");
} else {
  alert("Wrong Answer!");
}

console.log(homeQ);

*/

  let moveHouseQuestion = "Where do i want to live in the future?";
  let moveHouse = getUserInput(moveHouseQuestion);

  if (moveHouse === "london") {
    alert("YES!I want to move to London in the future");
  } else {
    alert("Wrong Answer!");
  }
}
/*
while (moveQ !== "London") {
  moveHouse = prompt("try again").toLowerCase();
}
*/

function startNumberQuiz() {
  let answer = 5;
  let number = prompt("Guess a number between 1 and 10");

  for (let i = 1; i <= 4; i++) {
    if (number > answer) {
      alert("too high");
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
}
//Q6 - takes in numeric input
//prompt to guess a number
//alert - too high/low
//four attempts
//after attempt - give correct answer - loop

//Q7-multple possible correct answers
//give user 6 attempts

//give final score out of 7
//use console.log throughout to track questions
//add css
