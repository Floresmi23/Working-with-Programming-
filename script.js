var boxEle = document.body.querySelector(".box");

var userInput_1 = prompt("Enter a number: ");

var userInput_2 = prompt("Enter a secound number: ");

var sum1=parseInt(userInput_1);
var sum2=parseInt(userInput_2);
var answer= sum1+sum2;


document.write(userInput_1 + "+" + userInput_2 + "=" + answer);