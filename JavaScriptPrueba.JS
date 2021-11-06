var question = "Question, " + "Answer me please!";
var answer = "Answer";
var correct = "Correct";
var incorrect = "Incorrect";
document.write(question, "<br/>", answer, "<br/>", correct, "<br/>", incorrect, "<br/>");
let a = 1;
let b = 2;
let c = a + b;
document.write(c + "<br/><br/>");
document.write(question + " Yes of course, tell me.<br/>");
document.write("Did you take my cellphone? " + answer + "!<br/>");
document.write(correct + "<br/>");
document.write(`Oh I thought I was ${incorrect}<br/>`);
c += c;
document.write(c + '<br/>');
c *= b;
document.write(c + '<br/>');
document.write("My name is Johann".length + '<br/>');
document.write("My name is Johann".toUpperCase() + '<br/>');
let Name = "Johann";
let FirstLetter = "";
FirstLetter = Name[0];
document.write(FirstLetter + '<br/>');
let Array = [1, 2, 3];
document.write(Array[0] + '<br/>');
let SecondDigit = Array[1];
document.write(SecondDigit + '<br/>');
Array.push(4);
document.write(Array + '<br/>');
const oneDown = Array.pop();
document.write(oneDown + '<br/>');
document.write(Array + '<br/>');
const firstDown = Array.shift();
document.write(firstDown + '<br/>');
document.write(Array + '<br/>');
const firstInsert = Array.unshift(3);
document.write(firstInsert + '<br/>');
document.write(Array + '<br/>');
Array.unshift(["Johann", "Michele", "Goku"]);
document.write(Array + '<br/>');

function sentence() {
    document.write("Hello World! <br/>");
}
sentence();

function expression(a, b) {
    document.write(a + b + '<br/>');
}
expression("fuck", "you");

function sum(num) {
    return num + 6;
}
document.write(sum(4) + '<br/>');