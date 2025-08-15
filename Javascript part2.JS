//using while loop
//using while loop I insert five numbers in an array with a counter adding one each time
console.log("using while loop I insert five numbers in an array with a counter adding one each time");
const myArray = [];
let i = 0;
while (i < 5) {
    myArray.push(i);
    console.log(i);
    i++;
}
console.log(myArray);
//using for loop
//using for loop I insert five numbers in an array with a counter adding one each time
console.log("using for loop I insert five numbers in an array with a counter adding one each time");
const myArray2 = [];
for (let i = 0; i < 5; i++) {
    myArray2.push(i);
    console.log(i);
}
console.log(myArray2);
//using for loop I insert values in an array from one to nine, adding two each time
console.log("using for loop I insert values in an array from one to nine, adding two each time");
const myArray3 = [];
for (let i = 1; i <= 9; i += 2) {
    myArray3.push(i);
    console.log(i);
}
console.log(myArray3);
//using for loop I insert values in an array from nine to one, subtracting two each time
console.log("using for loop I insert values in an array from nine to one, subtracting two each time");
const myArray4 = [];
for (let i = 9; i >= 1; i -= 2) {
    myArray4.push(i);
    console.log(i);
}
console.log(myArray4);
//using for loop I add all the numbers in an array
console.log("using for loop I add all the numbers in an array");
const myArray5 = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArray5.length; i++) {
    total += myArray5[i];
    console.log(total);
}
//nest "for" loop
//nest "for" loop adding all the numbers in an array
console.log("nest for loop adding all the numbers in an array");
const myArray6 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let total2 = 0;
for (let i = 0; i < myArray6.length; i++) {
    for (let j = 0; j < myArray6[i].length; j++) {
        total2 += myArray6[i][j];
        console.log(total2);
    }
}
console.log(total2);
//nest "for" loop multiplying all the numbers in an array
console.log("nest for loop multiplying all the numbers in an array");

function multiplyAll(multiplyArr) {
    let product = 1;
    for (let i = 0; i < multiplyArr.length; i++) {
        for (let j = 0; j < multiplyArr.length; j++) {
            product *= multiplyArr[i][j];
        }
    }
    return product;
}
multiplyAll(myArray6);
console.log(multiplyAll(myArray6));
//using forEach
console.log("using forEach");
const myArray7 = [1, 2, 3, 4, 5];
myArray7.forEach(function(forEachitem) {
    console.log(forEachitem);
});
//Iterate with JavaScript Do...While Loops
console.log("Iterate with JavaScript Do...While Loops");
const ourArray = [];
let i2 = 0;

do {
    ourArray.push(i2);
    i2++;
} while (i2 < 5);
console.log(ourArray);
//Iterate with JavaScript While Loops
console.log("Iterate with JavaScript While Loops");
const ourArray2 = [];
let i3 = 0;


while (i3 < 5) {
    ourArray2.push(i3);
    i3++;
}
console.log(ourArray2);
//Replace Loops with using Recursion
console.log("Replace Loops with using Recursion");
const myArray8 = [1, 2, 3, 4, 5];

//in this function, we are using recursion
console.log("in this function, we are using recursion");

function multiply(multiArr, multiNum) {
    if (multiNum > multiArr.length) {
        return 0;
    } else {
        multiArr[multiNum - 1] *= 10;
        multiply(multiArr, multiNum + 1);
    }
}
multiply(myArray8, 1);
console.log(myArray8);
console.log(multiply(myArray8, 5));
//in this function, we are not using Recursion, we are using a loop
console.log("in this function, we are not using Recursion, we are using a loop");

function multiply2(multarr, multin) {
    let product = 1;
    for (let i = 0; i < multin; i++) {
        product *= multarr[i];
    }
    return product;
}
multiply2(myArray8, 5);
console.log(myArray8);
console.log(multiply2(myArray8, 5));
//in this function, we are using recursion
console.log("in this function, we are using recursion");

function multiply3(multiarr3, multin2) {
    if (multin2 <= 0) {
        return 1;
    } else {
        return multiply3(multiarr3, multin2 - 1) * multiarr3[multin2 - 1];
    }
}
multiply3(myArray8, 5);
console.log(myArray8);
console.log(multiply3(myArray8, 5));
//in this function, we are using recursion
console.log("in this function, we are using recursion");

function sum(sumarr, sumn) {
    if (sumn <= 0) {
        return 0;
    } else {
        return sum(sumarr, sumn - 1) + sumarr[sumn - 1];
    }
}
sum(myArray8, 5);
console.log(myArray8);
console.log(sum(myArray8, 5));
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
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === lookname) {
            if (contacts[i].hasOwnProperty(lookprop)) {
                return contacts[i][lookprop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}
lookUpProfile("Kristian", "lastName");
console.log(lookUpProfile("Kristian", "lastName"));
lookUpProfile("Sherlock", "likes");
console.log(lookUpProfile("Sherlock", "likes"));
lookUpProfile("Harry", "likes");
console.log(lookUpProfile("Harry", "likes"));
lookUpProfile("Bob", "number");
console.log(lookUpProfile("Bob", "number"));
lookUpProfile("Bob", "potato");
console.log(lookUpProfile("Bob", "potato"));
lookUpProfile("Akira", "address");
console.log(lookUpProfile("Akira", "address"));
//using Math.random() and Math.floor() to generate random numbers
console.log("using Math.random() and Math.floor() to generate random numbers");

function randomFunc() {
    return Math.floor(Math.random() * 10);
}
randomFunc();
console.log(randomFunc());
//using Math.floor() and Math.random() to generate random numbers
console.log("using Math.floor() and Math.random() to generate random numbers");

function randomFunc2() {
    return Math.floor(Math.random() * 10);
}
randomFunc2();
console.log(randomFunc2());
//exercise using Math.random() to generate random numbers between 0 and 1
console.log("exercise using Math.random() to generate random numbers between 0 and 1");

function randomFraction() {
    return Math.random();
}
randomFraction();
console.log(randomFraction());
//exercise using Math.floor() and Math.random() to generate random numbers within a range
console.log("exercise using Math.floor() and Math.random() to generate random numbers within a range");

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
randomRange(50, 100);
console.log(randomRange(50, 100));
//using the parseInt() function to convert strings to numbers
console.log("using the parseInt() function to convert strings to numbers");

function convertToInteger(conToInstr) {
    return parseInt(conToInstr, 10);
}
convertToInteger("56");
console.log(convertToInteger("56"));
// using toString() to convert numbers to binary
console.log("using toString() to convert numbers to binary");

function convertToBinary(conToBistr) {

    return (conToBistr).toString(2);
}
convertToBinary("11");
console.log(convertToBinary(11));
console.log(convertToBinary(19));
console.log(convertToBinary(57));
//using the parseInt() function to convert binary to numbers
console.log("using the parseInt() function to convert binary to numbers");

function convertToInteger2(conToInstr2) {
    return parseInt(conToInstr2, 2);
}
convertToInteger2("10011");
console.log(convertToInteger2("10011"));
console.log(convertToInteger2("111001"))
console.log(convertToInteger2("James Bond"));
//Use the Conditional (Ternary) Operator
console.log("Use the Conditional (Ternary) Operator");


function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);
console.log(checkEqual(1, 2));
checkEqual(1, 1);
console.log(checkEqual(1, 1));
checkEqual(1, "1");
console.log(checkEqual(1, "1"));
checkEqual(1, true);
console.log(checkEqual(1, true));
//Use Multiple Conditional (Ternary) Operators
console.log("Use Multiple Conditional (Ternary) Operators");


function checkSign(checkSignnum) {
    return checkSignnum > 0 ? "positive" : checkSignnum < 0 ? "negative" : "zero";
}
checkSign(10);
console.log(checkSign(10));
checkSign(-5);
console.log(checkSign(-5));
checkSign(0);
console.log(checkSign(0));
//Use Recursion to Create a Countdown within an array
console.log("Use Recursion to Create a Countdown within an array");


function countdown(countDownn) {
    if (countDownn <= 0) {
        return [];
    }
    return [countDownn].concat(countdown(countDownn - 1));
}
countdown(5);
console.log(countdown(5));
countdown(-1);
console.log(countdown(-1));
//Use Recursion to Create a Range of Numbers
console.log("Use Recursion to Create a Range of Numbers");


function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    }
    return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
}
rangeOfNumbers(1, 5);
console.log(rangeOfNumbers(1, 5));
rangeOfNumbers(6, 9);
console.log(rangeOfNumbers(6, 9));
rangeOfNumbers(4, 4);
console.log(rangeOfNumbers(4, 4));
rangeOfNumbers(1, -1);
console.log(rangeOfNumbers(1, -1));
//Use Recursion to Create a Fibonacci Sequence
console.log("Use Recursion to Create a Fibonacci Sequence");


function fibonacci(fibn) {
    if (fibn <= 1) {
        return fibn
    }
    return fibonacci(fibn - 1) + fibonacci(fibn - 2);
}
fibonacci(5);
console.log(fibonacci(5));
fibonacci(10);
console.log(fibonacci(10));
fibonacci(15);
console.log(fibonacci(15));
fibonacci(20);
console.log(fibonacci(20));
//Use Recursion to Create a Factorial
console.log("Use Recursion to Create a Factorial");


function factorial(factn) {
    if (factn === 0) {
        return 1;
    }
    return factn * factorial(factn - 1);
}
factorial(5);
console.log(factorial(5));
//Prevent Object Mutation
console.log("Prevent Object Mutation");


function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // change code below this line
    Object.freeze(MATH_CONSTANTS);
    // change code above this line
    try {
        // MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        return ex;
    }
}
freezeObj();
console.log(freezeObj());
//Use Arrow Functions to Write Concise Anonymous Functions
console.log("Use Arrow Functions to Write Concise Anonymous Functions");

const myFunc = () => {
    const myVar = "value";
    return myVar;
}
myFunc();
console.log(myFunc());


const myFunc2 = () => "value";
myFunc2();
console.log(myFunc2());


const magic = () => {
    return new Date();
};
magic();
console.log(magic());


const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
}
myConcat([1, 2], [3, 4, 5]);
console.log(myConcat([1, 2], [3, 4, 5]));

//Set Default Parameters for Your Functions
console.log("Set Default Parameters for Your Functions");


const greeting = (name = "Anonymous") => "Hello " + name;
greeting();
console.log(greeting());
greeting("John");
console.log(greeting("John"));


/*const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (squarearr) => {
    "use strict";
    // change code below this line
    const squaredIntegers = squarearr.filter(num => Number.isInteger(num) && num > 0).map(num => num * num);
    // change code above this line
    return squaredIntegers;
}
SquareList(realNumberArray);
console.log(SquareList(realNumberArray));*/


const increment = (number, value = 1) => number + value;
increment(5, 2);
console.log(increment(5, 2));
increment(5);
console.log(increment(5));
//Use the Rest Parameter with Function Parameters
console.log("Use the Rest Parameter with Function Parameters");


const sum2 = (function() {
    "use strict";
    return function sum2(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
sum2(1, 2, 3);
console.log(sum2(1, 2, 3));
sum2(1, 2, 3, 4);
console.log(sum2(1, 2, 3, 4));

const sum3 = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
sum3(1, 2, 3);
console.log(sum3(1, 2, 3));
sum3(1, 2, 3, 4);
console.log(sum3(1, 2, 3, 4));
//Use the Spread Operator to Evaluate Arrays In-Place
console.log("Use the Spread Operator to Evaluate Arrays In-Place");


const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
const arr4 = [...arr3];
arr4;
console.log(arr4);
arr3;
console.log(arr3);

//Use the Spread Operator to Evaluate Arrays In-Place and using Math.Max
console.log("Use the Spread Operator to Evaluate Arrays In-Place and using Math.Max");
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);
//Use Destructuring Assignment to Extract Values from Objects
console.log("Use Destructuring Assignment to Extract Values from Objects");


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};


function getTempOfTmrw(tempObj) {
    "use strict";
    // change code below this line
    const {
        tomorrow: tempOfTomorrow
    } = tempObj;
    // change code above this line
    return tempOfTomorrow;
}
getTempOfTmrw(HIGH_TEMPERATURES);
console.log(getTempOfTmrw(HIGH_TEMPERATURES));
//Use Destructuring Assignment to Assign Variables from Objects
console.log("Use Destructuring Assignment to Assign Variables from Objects");


const LOCAL_FORECAST = {
    yesterday: {
        low: 61,
        high: 75
    },
    today: {
        low: 64,
        high: 77
    },
    tomorrow: {
        low: 68,
        high: 80
    }
};


function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    const {
        tomorrow: {
            high: maxOfTomorrow
        }
    } = forecast;
    // change code above this line
    return maxOfTomorrow;
}
getMaxOfTmrw(LOCAL_FORECAST);
console.log(getMaxOfTmrw(LOCAL_FORECAST));
//Use Destructuring Assignment to Assign Variables from Nested Objects
console.log("Use Destructuring Assignment to Assign Variables from Nested Objects");


const ANCESTRY_FILE = [{
        name: "Carolus Haverbeke", //name: "Carolus Haverbeke",


        ancestors: [{
            name: "Maria van Brussel1", //name: "Maria van Brussel",

            ancestors: [{
                name: "Gustavus Adamus1" //name: "Gustavus Adamus"
            }]
        }]
    },
    {
        name: "Emma de Milliano", //name: "Emma de Milliano",

        ancestors: [{
                name: "Petrus de Milliano", //name: "Petrus de Milliano",

                ancestors: [{
                    name: "Pieter de Decker" //name: "Pieter de Decker"
                }]
            },
            {
                name: "Maria van Brussel2", //name: "Maria van Brussel",

                ancestors: [{
                    name: "Gustavus Adamus2" //name: "Gustavus Adamus"
                }]
            }
        ]
    },
    {
        name: "Father Adam", //name: "Father Adam",

        ancestors: [{
            name: "Gustavus Adamus3" //name: "Gustavus Adamus"
        }]
    }
];


function getAncestors(person, callback) {
    "use strict";
    let ancestors = [];
    const {
        ancestors: [{
            ancestors: [{
                name
            }]
        }]
    } = person;
    ancestors.push(name);
    callback(ancestors);
}
getAncestors(ANCESTRY_FILE[0], (ancestors) => {
    console.log(ancestors);
});
getAncestors(ANCESTRY_FILE[1], (ancestors) => {
    console.log(ancestors);
});
//this is an error because the callback function is not defined ANCESTRY_FILE[2] does not have a callback function defined because it doens't have second ancestors
/*getAncestors(ANCESTRY_FILE[2], (ancestors) => {
        console.log(ancestors);
    });*/


//Use Destructuring Assignment to Assign Variables from Arrays
console.log("Use Destructuring Assignment to Assign Variables from Arrays");


const input = [1, 2];
const [first, second] = input;
first;
console.log(first);
second;
console.log(second);
//Use Destructuring Assignment to Assign Variables from Nested Arrays
console.log("Use Destructuring Assignment to Assign Variables from Nested Arrays");


const list = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const [a, [b, c]] = list;
a;
console.log(a);
b;
console.log(b);
c;
console.log(c);
//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
console.log("Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements");


const [a1, b1, c1, d1, e1] = [1, 2, 3, 4, 5, 6];
a1;
console.log(a1);
b1;
console.log(b1);
c1;
console.log(c1);
d1;
console.log(d1);
e1;
console.log(e1);
//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
console.log("Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements");


const [a2, b2, ...rest] = [1, 2, 3, 4, 5, 6];
a2;
console.log(a2);
b2;
console.log(b2);
rest;
console.log(rest);

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    // Only change code below this line
    const [a3, b3, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr5 = removeFirstTwo(source);
arr5;
console.log(arr5);
//Use Destructuring Assignment with the Spread Operator to Pass an Argument Object to a Function
console.log("Use Destructuring Assignment with the Spread Operator to Pass an Argument Object to a Function");


const fn = ([name, age]) => ({
    name,
    age
});
fn([
    "Gandalf",
    56
]);
//Create Strings using Template Literals
console.log("Create Strings using Template Literals");


const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting2 = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;

greeting2;
console.log(greeting2);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    "use strict";
    // change code below this line
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // change code above this line
    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
resultDisplayArray;
console.log(resultDisplayArray);


const resultDisplayArray2 = makeList(result.skipped);
resultDisplayArray2;
console.log(resultDisplayArray2);


const resultDisplayArray3 = makeList(result.success);
resultDisplayArray3;
console.log(resultDisplayArray3);
//Write Concise Object Literal Declarations Using Object Property Shorthand
console.log("Write Concise Object Literal Declarations Using Object Property Shorthand");


const createPerson = (name, age, gender) => ({ name, age, gender });
createPerson("Zodiac Hasbro2", 562, "male" + "<br/>");

const createPerson2 = (name, age, gender) => {
    return { name, age, gender };
};
createPerson2("Zodiac Hasbro", 56, "male");
//Write Concise Declarative Functions with ES6
console.log("Write Concise Declarative Functions with ES6");
const person2 = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};
person2.sayHello();
console.log(person2.sayHello());


const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
bicycle.gear;
console.log(bicycle.gear);
//Use class Syntax to Define a Constructor Function
console.log("Use class Syntax to Define a Constructor Function");
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new Vegetable("carrot");
carrot.name;
console.log(carrot.name);
//Use getters and setters to Control Access to an Object
console.log("Use getters and setters to Control Access to an Object");
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit;
    }
    get temperature() {
        return 5 / 9 * (this._fahrenheit - 32);
    }
    set temperature(celsius) {
        this._fahrenheit = celsius * 9.0 / 5 + 32;
    }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp;
console.log(temp);
console.log(thermos.temperature);
const thermos2 = new Thermostat(0);
let temp2 = thermos2.temperature;
thermos2.temperature = 0;
temp2;
console.log(temp2);
console.log(thermos2.temperature);
const thermos3 = new Thermostat(32);
let temp3 = thermos3.temperature;
thermos3.temperature = 32;
temp3;
console.log(temp3);
console.log(thermos3.temperature);
const thermos4 = new Thermostat(32);
let temp4 = thermos4.temperature;
thermos4.temperature = 212;
temp4;
console.log(temp4);
console.log(thermos4.temperature);
//Use class Syntax to Define a Subclass
console.log("Use class Syntax to Define a Subclass");
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}
const dog = new Dog("Hal");
dog.name;
console.log(dog.name);
const animal = new Animal("Cat");
animal.name;
console.log(animal.name);
//Use class Syntax to Define a Subclass
console.log("Use class Syntax to Define a Subclass");
class Animal2 {
    constructor(name) {
        this.name = name;
    }
}
class Dog2 extends Animal2 {
    constructor(name) {
        super(name);
    }
}
const dog2 = new Dog2("Hal2");
dog2.name;
console.log(dog2.name);
const animal2 = new Animal2("Cat2");
animal2.name;
console.log(animal2.name);

//Reuse JavaScript Code Using import and export
console.log("Reuse JavaScript Code Using import and export");
/*import { uppercaseString, lowercaseString }
from "./JavaScript part3.js";
uppercaseString("hello");
document.write(uppercaseString("hello") + '<br/>');
lowercaseString("HELLO");
document.write(lowercaseString("HELLO") + '<br/>');*/