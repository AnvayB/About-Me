'use strict'

let userName = prompt("What is your name?");
alert("Hi " + userName + ", welcome to my site!");
alert("Let's play a guessing game so you can learn more about me. Make sure give all questions a yes or no answer.");
let FINALCOUNT = 0;

let question1 = prompt("Am I an only child?");
let answer1 = question1.toLowerCase();
if (answer1 === "yes" || answer1 === "y"){
  //console.log("Nah, I have a younger sister, which is both good and bad...");
  alert("Nah, I have a younger sister, which is both good and bad...");
} else if (answer1 == "no" || answer1 === "n"){
  //console.log("Yup, I have a younger sister, which is both good and bad...");
  alert("Yup, I have a younger sister, which is both good and bad...");
  FINALCOUNT ++;
} else {
  alert("Make sure to enter a Yes or No answer; I can't understand if you type in anything else.")}

let question2 = prompt("Am I a college student?");
let answer2 = question2.toLowerCase();
if (answer2 === "yes" || answer2 === "y"){
  //console.log("That's right, I'm currently an incoming senior at San Jose State University.");
  alert("That's right, I'm currently an incoming senior at San Jose State University.");
  FINALCOUNT++;
} else if (answer2 == "no" || answer2 === "n"){
  //console.log("People have told me that my facial hair makes me look 40, but I assure you that I'm 21. \nAnd yes, I'm currently an incoming senior at San Jose State University.");
  alert("People have told me that my facial hair makes me look 40, but I promise I'm 21. \nAnd yes, I'm currently an incoming senior at San Jose State University.");
} else {alert("Make sure to enter a Yes or No answer; I can't understand if you type in anything else.")}

let question3 = prompt("Do I have any pets?");
let answer3 = question3.toLowerCase();
if (answer3 === "yes" || answer3 === "y"){
  //console.log("I mean yea, my sister has a cat, and the cat and I have a mutual amount of tolerance for each other.");
  alert("I mean yea, my sister has a cat, and the cat and I have a mutual amount of tolerance for each other.");
  FINALCOUNT++;
} else if (answer3 == "no" || answer3 === "n"){
  //console.log("Unfortunately, we have a cat. It's not that I don't like cats, it's just that the one we have doesn't particularly like me. But it's fine, the feeling is mutual. 😤 ");
  alert("Unfortunately, we have a cat. It's not that I don't like cats, it's just that the one we have doesn't particularly like me. But it's fine, the feeling is mutual. 😤 ");
} else {alert("Make sure to enter a Yes or No answer; I can't understand if you type in anything else.")}

let question4 = prompt("Do I live by myself?");
let answer4 = question4.toLowerCase();
if (answer4 === "yes" || answer4 === "y"){
  //console.log("Not yet, I still live with my family in Milpitas. The only possible way that I'll move out is if I get a job in SF or somewhere out of Silicon Valley. So fingers crossed 🤞");
  alert("Not yet, I still live with my family in Milpitas. The only possible way that I'll move out is if I get a job in SF or somewhere out of Silicon Valley. So fingers crossed 🤞");
} else if (answer4 == "no" || answer4 === "n"){
  //console.log("Yea, I still live with my parents and sister. The only possible way that I'll move out is if I get a job in SF or somewhere out of Silicon Valley. I'm not too keen on moving out of Silicon Valley but other than that, fingers crossed 🤞");
  alert("I still live with my parents and sister. The only possible way that I'll move out is if I get a job in SF or somewhere out of Silicon Valley. I'm not too keen on moving out of Silicon Valley but other than that, fingers crossed 🤞");
  FINALCOUNT++;
} else {alert("Make sure to enter a Yes or No answer; I can't understand if you type in anything else.")}

let question5 = prompt("Do I like coding?");
let answer5 = question5.toLowerCase();
if (answer5 === "yes" || answer5 === "y"){
  //console.log("I think I have a similar sentiment to most coders, in that I like it until I come across a seemingly insurmountable bug, which ends up being a missing ; on line 73. \nSo in conclusion: mostly yes.");
  alert("I think I have a similar sentiment to most coders, in that I like it until I come across a seemingly insurmountable bug, which ends up being a missing ; on line 73. \nSo in conclusion: mostly yes.");
  FINALCOUNT++;
} else if (answer5 == "no" || answer5 === "n"){
  //console.log("I wouldn't really be in my major or even this course if I didn't like it.");
  alert("I wouldn't really be in my major or even this course if I didn't like it.");
} else {alert("Make sure to enter a Yes or No answer; I can't understand if you type in anything else.")}

alert("current score: " + FINALCOUNT);

alert("Now let's play a quick Random Number Guessing Game");
//generate a random number from 1 to 10
let randNum = Math.floor(Math.random() * 10) + 1;
console.log(randNum);
let chances = 4;
let correct = false;

for (let i = 0; i < chances; i++){
  let guess = prompt("Pick a number between 1 and 10 \nChances left: " + (chances-i) + ". \nGuess wisely.");
  
  if (guess == randNum){
    alert("Wow, you got it correct!");
    correct = true;
    break;
  } else if (guess < 1 || guess > 10){
    alert("Read the instructions. That's not between 1 and 10. Pay attention.");
  } else if ((guess == randNum + 1) || (guess == randNum - 1)) {
    alert("You're super close!");
  } else if (guess < randNum){
    alert("Too low.");
  } else if (guess > randNum){
    alert("Too high.");
  } else {
    alert("Error. Please try again.");
  }
  
}
if (correct == false){
alert("You ran out of chances. Sorry :/ \n The number was " + randNum);
}


alert("Last game: See if you can try and guess one of my favorite TV shows \nMake sure to capitalize the first letter.");
let shows = ['Avatar', 'The Office', 'Silicon Valley', 'Lucifer', 'New Girl'];

let numGuess = 6;
let correctAnswer = false;


while (!correctAnswer && numGuess > 0){
  let guess2 = prompt("Can you guess what my favorite TV show is?");
  for (let index = 0; index < shows.length; index++){
    if (guess2 === shows[index]){
      alert("That's right! " + guess2 + " is one of my favorite shows!");
      correctAnswer = true;
      FINALCOUNT++;
      break;
    }
    console.log("current show: " + guess2 + " vs show options: " + shows[index]);
  }
  if (correctAnswer === true) {
    break;
  }
  alert("No, that's not it. Try again.")
  numGuess--;
 
}

let finalScore = FINALCOUNT;
alert("Your final score is " + finalScore + " out of 7.");



//console.log("Thank you for playing my game, " + userName + ". You can learn more about me after you press 'OK'.");
alert("Thank you for playing my games, " + userName + ". You can learn more about me after you press 'OK'.");


