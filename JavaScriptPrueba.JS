//document presentation of JavaScript
document.write("This is Javascript <br/>");
//declaration of variables with var, assigning text
var question = "Question, " + "Answer me please!";
var answer = "Answer";
var correct = "Correct";
var incorrect = "Incorrect";
//printing variables
document.write(question, "<br/>", answer, "<br/>", correct, "<br/>", incorrect, "<br/>");
//declaration of variables with let, assigning text
let a = 1;
let b = 2;
let c = a + b;
//printing variables on screen
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
//using arrays
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
//usings functions
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
global = 5;
document.write(global + '<br/>');

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift(item);
}
const testArr = [1, 2, 3, 4, 5];
document.write("Before: " + JSON.stringify(testArr) + '<br/>');
document.write(nextInLine(testArr, 6) + '<br/>');
document.write("After: " + JSON.stringify(testArr) + '<br/>');

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue == true) {
        return document.write("Yes, that was true <br/>");
    } else {
        return document.write("No, that was false <br/>");
    }
}
trueOrFalse(true);
trueOrFalse(false);
//using If Else and equality, diferrence, greater than, less than, greater than or equal to, less than or equal to
function testEqual(val) {
    if (val == 12) {
        return document.write("Equal <br/>");
    } else {
        return document.write("Not Equal <br/>");
    }
}
testEqual("12");
testEqual(12);

function testEqual2(val) {
    if (val === 12) {
        return document.write("Equal <br/>");
    } else {
        return document.write("Not Equal <br/>");
    }
}
testEqual2("12");
testEqual2(12);

function testNotEqual(val) {
    if (val != 12) {
        return document.write("Not Equal <br/>");
    } else {
        return document.write("Equal <br/>");
    }
}
testNotEqual(12);
testNotEqual("12");

function testNotEqual2(val) {
    if (val !== 12) {
        return document.write("Not Equal <br/>");
    } else {
        return document.write("Equal <br/>");
    }
}
testNotEqual2(12);
testNotEqual2("12");
// the command or is ||
// using if, else if, else
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return document.write(names[0] + '<br/>');
    } else if (strokes <= par - 2) {
        return document.write(names[1] + '<br/>');
    } else if (strokes == par - 1) {
        return document.write(names[2] + '<br/>');
    } else if (strokes == par) {
        return document.write(names[3] + '<br/>');
    } else if (strokes == par + 1) {
        return document.write(names[4] + '<br/>');
    } else if (strokes == par + 2) {
        return document.write(names[5] + '<br/>');
    } else {
        return document.write(names[6] + '<br/>');
    }
}
golfScore(4, 1);
golfScore(4, 2);
golfScore(5, 2);
golfScore(4, 3);
golfScore(4, 4);
golfScore(1, 1);
golfScore(5, 5);
// the command and is &&
// using switch
function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return document.write(answer + '<br/>');
}
caseInSwitch(1);
caseInSwitch(2);
caseInSwitch(3);
caseInSwitch(4);
caseInSwitch(5);
// uso de switch con default
function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return document.write(answer + '<br/>');
}
switchOfStuff("a");
switchOfStuff("b");
switchOfStuff("c");
switchOfStuff("d");
switchOfStuff("e");

function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return document.write(answer + '<br/>');
}
sequentialSizes(1);
sequentialSizes(2);
sequentialSizes(3);
sequentialSizes(4);
sequentialSizes(5);
sequentialSizes(6);
sequentialSizes(7);
sequentialSizes(8);
sequentialSizes(9);
sequentialSizes(10);

function chainToSwitch(val) {
    let answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case "sally":
            answer = "Sue";
            break;
        case "joe":
            answer = "Joe";
            break;
        default:
            answer = "Does not compute";
            break;
    }
    return document.write(answer + '<br/>');
}
chainToSwitch("bob");
chainToSwitch("sally");
chainToSwitch("joe");
chainToSwitch("mary");
let testConsole = "testConsole";
//example of or || and Math.min
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return document.write("Please enter positive numbers <br/>");
    }
    return document.write(Math.min(a, b) + '<br/>');
}
abTest(2, 5);
abTest(-5, 5);
abTest(2, -5);
abTest(-5, -5);
//example of math.round, Math.pow, Math.sqrt
function abTest2(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return document.write(Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)) + '<br/>');
}
abTest2(2, 5);
abTest2(2, 2);
let count = 0;

function cardTest(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return document.write(count + " Yes, you win! <br/>");
    } else {
        return document.write(count + " No, you lose! <br/>");
    }
}
cardTest(2);
cardTest(3);
cardTest(7);
cardTest(10);
cardTest("K");
cardTest("A");
cardTest("Q");
let count2 = 0;

function cardTest2(card) {
    switch (card) {
        case 2 || 3 || 4 || 5 || 6:
            count++;
            return document.write("5 Bet </br>");
            break;
        case 7 || 8 || 9:
            return document.write("0 Hold </br>");
        case 10 || "J" || "Q" || "K" || "A":
            count--;
            return document.write("-5 Hold </br>");
            break;
    }
}
cardTest2(2);
cardTest2(3);
cardTest2(7);
cardTest2(10);
cardTest2("K");
cardTest2("A");
cardTest2("Q");
//example of object
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
//assigning a value to a variable, using dot notation
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
const shoesValue = testObj.shoes;
document.write(hatValue + '<br/>');
document.write(shirtValue + '<br/>');
document.write(shoesValue + '<br/>');
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
//assigning a value to a variable, using bracket notation
const entreeValue = testObj2["an entree"];
const drinkValue = testObj2["the drink"];
document.write(entreeValue + '<br/>');
document.write(drinkValue + '<br/>');
const testObj3 = {
    face: "glasses",
    head: 1,
    "how many fingers": 10
};
const faceValue = testObj3.face;
const headValue = testObj3.head;
const fingerValue = testObj3["how many fingers"];
document.write(faceValue + '<br/>');
document.write(headValue + '<br/>');
document.write(fingerValue + '<br/>');
const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};
const myDog = "Hunter";
const myBreed = dogs[myDog];
document.write(myBreed + '<br/>');
const someObj = {
    propName: "John"
};

function propPrefix(str) {
    const s = "prop";
    return s + str;
}
const someProp = propPrefix("Name");
document.write(someObj[someProp] + '<br/>');
someObj[someProp] = "Peter";
document.write(someObj[someProp] + '<br/>');
delete testObj2["my side"];
let property;
property = testObj2.hasOwnProperty("my side");
document.write(property + '<br/>');
property = testObj2.hasOwnProperty("an entree");
document.write(property + '<br/>');

function phoneticLookup(val) {
    let result = "";
    const lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    };
    result = lookup[val];
    return document.write(result + '<br/>');
}
phoneticLookup("charlie");
phoneticLookup("bravo");
//using hasOwnProperty
function checkObj(obj, checkProp) {
    return obj.hasOwnProperty(checkProp);
}