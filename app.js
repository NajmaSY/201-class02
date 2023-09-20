let userPoints = 0;
let user = prompt("What is your name?");

alert("Hello " + user + ". Welcome to my website about me");

let eduQ = prompt(
  "Do i have a degree in Psychology? (yes or no)"
).toLowerCase();
// to lower - changes all answers to lowercase so it matches if statement

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

let age = prompt("How old am I?");
//not infinite loop - used ans = prompt
while (age !== "21") {
  age = prompt("wrong answer");
}
alert("Correct, i am 21 years old");

let homeQ = prompt("Do i live in Liverpool (yes or no)").toLowerCase();

while (homeQ !== "yes" && eduQ !== "no") {
  homeQ = prompt("Try again. Do i live in Liverpool?").toLowerCase();
}

if (homeQ === "yes") {
  alert("YES!I do live in Liverpool, home of the beatles");
} else {
  alert("Wrong Answer!");
}

console.log(homeQ);
