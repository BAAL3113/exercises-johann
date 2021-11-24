//using while loop
//using while loop I insert five numbers in an array with a counter adding one each time
document.write("using while loop I insert five numbers in an array with a counter adding one each time <br/>");
const myArray = [];
let i = 0;
while (i < 5) {
    myArray.push(i);
    document.write(i + '<br/>');
    i++;
}
document.write(myArray + '<br/>');
//using for loop
//using for loop I insert five numbers in an array with a counter adding one each time
document.write("using for loop I insert five numbers in an array with a counter adding one each time <br/>");
const myArray2 = [];
for (let i2 = 0; i2 < 5; i2++) {
    myArray2.push(i2);
    document.write(i2 + '<br/>');
}
document.write(myArray2 + '<br/>');
//using for loop I insert values in an array from one to nine, adding two each time
document.write("using for loop I insert values in an array from one to nine, adding two each time <br/>");
const myArray3 = [];
for (let i3 = 1; i3 <= 9; i3 += 2) {
    myArray3.push(i3);
    document.write(i3 + '<br/>');
}
document.write(myArray3 + '<br/>');
//using for loop I insert values in an array from nine to one, subtracting two each time
document.write("using for loop I insert values in an array from nine to one, subtracting two each time <br/>");
const myArray4 = [];
for (let i4 = 9; i4 >= 1; i4 -= 2) {
    myArray4.push(i4);
    document.write(i4 + '<br/>');
}
document.write(myArray4 + '<br/>');
//using for loop I add all the numbers in an array
document.write("using for loop I add all the numbers in an array <br/>");
const myArray5 = [2, 3, 4, 5, 6];
let total = 0;
for (let i5 = 0; i5 < myArray5.length; i5++) {
    total += myArray5[i5];
    document.write(total + '<br/>');
}
//nest "for" loop
//nest "for" loop adding all the numbers in an array
document.write("nest for loop adding all the numbers in an array <br/>");
const myArray6 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let total2 = 0;
for (let i6 = 0; i6 < myArray6.length; i6++) {
    for (let j = 0; j < myArray6[i6].length; j++) {
        total2 += myArray6[i6][j];
        document.write(total2 + '<br/>');
    }
}
document.write(total2 + '<br/>');
//nest "for" loop multiplying all the numbers in an array
document.write("nest for loop multiplying all the numbers in an array <br/>");

function multiplyAll(multiplyArr) {
    let product = 1;
    for (let i7 = 0; i7 < multiplyArr.length; i7++) {
        for (let j2 = 0; j2 < multiplyArr.length; j2++) {
            product *= multiplyArr[i7][j2];
        }
    }
    return product;
}
multiplyAll(myArray6);
document.write(multiplyAll(myArray6) + '<br/>');
//using forEach
document.write("using forEach <br/>");
const myArray7 = [1, 2, 3, 4, 5];
myArray7.forEach(function(forEachitem) {
    document.write(forEachitem + '<br/>');
});
//Iterate with JavaScript Do...While Loops
document.write("Iterate with JavaScript Do...While Loops <br/>");
const ourArray = [];
let i8 = 0;

do {
    ourArray.push(i8);
    i8++;
} while (i8 < 5);
document.write(ourArray + '<br/>');
//Iterate with JavaScript While Loops
document.write("Iterate with JavaScript While Loops <br/>");
const ourArray2 = [];
let i9 = 0;


while (i9 < 5) {
    ourArray2.push(i9);
    i9++;
}
document.write(ourArray2 + '<br/>');
//Replace Loops with using Recursion
document.write("Replace Loops with using Recursion <br/>");
const myArray8 = [1, 2, 3, 4, 5];

//in this function, we are using recursion
document.write("in this function, we are using recursion <br/>");

function multiply(multiArr, multiNum) {
    if (multiNum > multiArr.length) {
        return 0;
    } else {
        multiArr[multiNum - 1] *= 10;
        multiply(multiArr, multiNum + 1);
    }
}
multiply(myArray8, 1);
document.write(myArray8 + '<br/>');
document.write(multiply(myArray8, 5) + '<br/>');
//in this function, we are not using Recursion, we are using a loop
document.write("in this function, we are not using Recursion, we are using a loop <br/>");

function multiply2(multarr, multin) {
    let multiproduct = 1;
    for (let ia = 0; ia < multin; ia++) {
        multiproduct *= multarr[ia];
    }
    return multiproduct;
}
multiply2(myArray8, 5);
document.write(myArray8 + '<br/>');
document.write(multiply2(myArray8, 5) + '<br/>');
//in this function, we are using recursion
document.write("in this function, we are using recursion <br/>");

function multiply3(multiarr3, multin2) {
    if (multin2 <= 0) {
        return 1;
    } else {
        return multiply3(multiarr3, multin2 - 1) * multiarr3[multin2 - 1];
    }
}
multiply3(myArray8, 5);
document.write(myArray8 + '<br/>');
document.write(multiply3(myArray8, 5) + '<br/>');
//in this function, we are using recursion
document.write("in this function, we are using recursion <br/>");

function sum(sumarr, sumn) {
    if (sumn <= 0) {
        return 0;
    } else {
        return sum(sumarr, sumn - 1) + sumarr[sumn - 1];
    }
}
sum(myArray8, 5);
document.write(myArray8 + '<br/>');
document.write(sum(myArray8, 5) + '<br/>');
// Setup
const contacts = [{
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(lookname, lookprop) {
    for (let ix = 0; ix < contacts.length; ix++) {
        if (contacts[ix].firstName === lookname) {
            if (contacts[ix].hasOwnProperty(lookprop)) {
                return contacts[ix][lookprop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}
lookUpProfile("Kristian", "lastName");
document.write(lookUpProfile("Kristian", "lastName") + '<br/>');
lookUpProfile("Sherlock", "likes");
document.write(lookUpProfile("Sherlock", "likes") + '<br/>');
lookUpProfile("Harry", "likes");
document.write(lookUpProfile("Harry", "likes") + '<br/>');
lookUpProfile("Bob", "number");
document.write(lookUpProfile("Bob", "number") + '<br/>');
lookUpProfile("Bob", "potato");
document.write(lookUpProfile("Bob", "potato") + '<br/>');
lookUpProfile("Akira", "address");
document.write(lookUpProfile("Akira", "address") + '<br/>');
//using Math.random() and Math.floor() to generate random numbers
document.write("using Math.random() and Math.floor() to generate random numbers <br/>");

function randomFunc() {
    return Math.floor(Math.random() * 10);
}
randomFunc();
document.write(randomFunc() + '<br/>');
//using Math.floor() and Math.random() to generate random numbers
document.write("using Math.floor() and Math.random() to generate random numbers <br/>");

function randomFunc2() {
    return Math.floor(Math.random() * 10);
}
randomFunc2();
document.write(randomFunc2() + '<br/>');
//exercise using Math.random() to generate random numbers between 0 and 1
document.write("exercise using Math.random() to generate random numbers between 0 and 1 <br/>");

function randomFraction() {
    return Math.random();
}
randomFraction();
document.write(randomFraction() + '<br/>');
//exercise using Math.floor() and Math.random() to generate random numbers within a range
document.write("exercise using Math.floor() and Math.random() to generate random numbers within a range <br/>");

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
randomRange(50, 100);
document.write(randomRange(50, 100) + '<br/>');
//using the parseInt() function to convert strings to numbers
document.write("using the parseInt() function to convert strings to numbers <br/>");

function convertToInteger(conToInstr) {
    return parseInt(conToInstr, 10);
}
convertToInteger("56");
document.write(convertToInteger("56") + '<br/>');
// using toString() to convert numbers to binary
document.write("using toString() to convert numbers to binary <br/>");

function convertToBinary(conToBistr) {

    return (conToBistr).toString(2);
}
convertToBinary("11");
document.write(convertToBinary(11) + '<br/>');
document.write(convertToBinary(19) + '<br/>');
document.write(convertToBinary(57) + '<br/>');
//using the parseInt() function to convert binary to numbers
document.write("using the parseInt() function to convert binary to numbers <br/>");

function convertToInteger2(conToInstr2) {
    return parseInt(conToInstr2, 2);
}
convertToInteger2("10011");
document.write(convertToInteger2("10011") + '<br/>');
document.write(convertToInteger2("111001") + '<br/>')
document.write(convertToInteger2("James Bond") + '<br/>');
//Use the Conditional (Ternary) Operator
document.write("Use the Conditional (Ternary) Operator <br/>");


function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);
document.write(checkEqual(1, 2) + '<br/>');
checkEqual(1, 1);
document.write(checkEqual(1, 1) + '<br/>');
checkEqual(1, "1");
document.write(checkEqual(1, "1") + '<br/>');
checkEqual(1, true);
document.write(checkEqual(1, true) + '<br/>');
//Use Multiple Conditional (Ternary) Operators
document.write("Use Multiple Conditional (Ternary) Operators <br/>");


function checkSign(checkSignnum) {
    return checkSignnum > 0 ? "positive" : checkSignnum < 0 ? "negative" : "zero";
}
checkSign(10);
document.write(checkSign(10) + '<br/>');
checkSign(-5);
document.write(checkSign(-5) + '<br/>');
checkSign(0);
document.write(checkSign(0) + '<br/>');
//Use Recursion to Create a Countdown within an array
document.write("Use Recursion to Create a Countdown within an array <br/>");


function countdown(countDownn) {
    if (countDownn <= 0) {
        return [];
    }
    return [countDownn].concat(countdown(countDownn - 1));
}
countdown(5);
document.write(countdown(5) + '<br/>');
countdown(-1);
document.write(countdown(-1) + '<br/>');
//Use Recursion to Create a Range of Numbers
document.write("Use Recursion to Create a Range of Numbers <br/>");


function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    }
    return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
}
rangeOfNumbers(1, 5);
document.write(rangeOfNumbers(1, 5) + '<br/>');
rangeOfNumbers(6, 9);
document.write(rangeOfNumbers(1, -1) + '<br/>');
rangeOfNumbers(4, 4);
document.write(rangeOfNumbers(4, 4) + '<br/>');
rangeOfNumbers(1, -1);
document.write(rangeOfNumbers(1, -1) + '<br/>');
//Use Recursion to Create a Fibonacci Sequence
document.write("Use Recursion to Create a Fibonacci Sequence <br/>");


function fibonacci(fibn) {
    if (fibn <= 1) {
        return fibn;
    }
    return fibonacci(fibn - 1) + fibonacci(fibn - 2);
}
fibonacci(5);
document.write(fibonacci(5) + '<br/>');
fibonacci(10);
document.write(fibonacci(10) + '<br/>');
fibonacci(20);
document.write(fibonacci(20) + '<br/>');
fibonacci(50);
document.write(fibonacci(50) + '<br/>');
fibonacci(100);
document.write(fibonacci(100) + '<br/>');
//Use Recursion to Create a Factorial
document.write("Use Recursion to Create a Factorial <br/>");


function factorial(factn) {
    if (factn === 0) {
        return 1;
    }
    return factn * factorial(factn - 1);
}
factorial(5);
document.write(factorial(5) + '<br/>');
factorial(10);
document.write(factorial(10) + '<br/>');
factorial(20);
document.write(factorial(20) + '<br/>');
factorial(50);
document.write(factorial(50) + '<br/>');
factorial(100);
document.write(factorial(100) + '<br/>');
//Use Recursion to Create a Palindrome
document.write("Use Recursion to Create a Palindrome <br/>");


function palindrome(palinstr) {
    if (palinstr.length <= 1) {
        return true;
    }
    if (palinstr[0] === palinstr[palinstr.length - 1]) {
        return palindrome(palinstr.slice(1, -1));
    }
    return false;
}
palindrome("racecar");
document.write(palindrome("racecar") + '<br/>');
palindrome("hello");
document.write(palindrome("hello") + '<br/>');
palindrome("racecar");
document.write(palindrome("racecar") + '<br/>');