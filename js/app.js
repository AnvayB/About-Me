'use strict'

let userName = prompt("What is your name?");
alert("Hi " + userName + ", welcome to my site!");
alert("Let's play a guessing game so you can learn more about me. Make sure give all questions a yes or no answer.");

let question1 = prompt("Am I an only child?");
let answer1 = question1.toLowerCase();
if (answer1 === "yes" || answer1 === "y"){
  //console.log("Nah, I have a younger sister, which is both good and bad...");
  alert("Nah, I have a younger sister, which is both good and bad...");
} else if (answer1 == "no" || answer1 === "n"){
  //console.log("Yup, I have a younger sister, which is both good and bad...");
  alert("Yup, I have a younger sister, which is both good and bad...");
} else {
  alert("Make sure to enter a Yes or No answer; I can't understand if you type in anything else.")}

let question2 = prompt("Am I a college student?");
let answer2 = question2.toLowerCase();
if (answer2 === "yes" || answer2 === "y"){
  //console.log("That's right, I'm currently an incoming senior at San Jose State University.");
  alert("That's right, I'm currently an incoming senior at San Jose State University.");
} else if (answer2 == "no" || answer2 === "n"){
  //console.log("People have told me that my facial hair makes me look 40, but I assure you that I'm 21. \nAnd yes, I'm currently an incoming senior at San Jose State University.");
  alert("People have told me that my facial hair makes me look 40, but I promise I'm 21. \nAnd yes, I'm currently an incoming senior at San Jose State University.");
} else {alert("Make sure to enter a Yes or No answer; I can't understand if you type in anything else.")}

let question3 = prompt("Do I have any pets?");
let answer3 = question3.toLowerCase();
if (answer3 === "yes" || answer3 === "y"){
  //console.log("I mean yea, my sister has a cat, and the cat and I have a mutual amount of tolerance for each other.");
  alert("I mean yea, my sister has a cat, and the cat and I have a mutual amount of tolerance for each other.");
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
} else {alert("Make sure to enter a Yes or No answer; I can't understand if you type in anything else.")}

let question5 = prompt("Do I like coding?");
let answer5 = question5.toLowerCase();
if (answer5 === "yes" || answer5 === "y"){
  //console.log("I think I have a similar sentiment to most coders, in that I like it until I come across a seemingly insurmountable bug, which ends up being a missing ; on line 73. \nSo in conclusion: mostly yes.");
  alert("I think I have a similar sentiment to most coders, in that I like it until I come across a seemingly insurmountable bug, which ends up being a missing ; on line 73. \nSo in conclusion: mostly yes.");
} else if (answer5 == "no" || answer5 === "n"){
  //console.log("I wouldn't really be in my major or even this course if I didn't like it.");
  alert("I wouldn't really be in my major or even this course if I didn't like it.");
} else {alert("Make sure to enter a Yes or No answer; I can't understand if you type in anything else.")}

//console.log("Thank you for playing my game, " + userName + ". You can learn more about me after you press 'OK'.");
alert("Thank you for playing my game, " + userName + ". You can learn more about me after you press 'OK'.");


