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
for (let i = 0; i < 5; i++) {
    myArray2.push(i);
    document.write(i + '<br/>');
}
document.write(myArray2 + '<br/>');
//using for loop I insert values in an array from one to nine, adding two each time
document.write("using for loop I insert values in an array from one to nine, adding two each time <br/>");
const myArray3 = [];
for (let i = 1; i <= 9; i += 2) {
    myArray3.push(i);
    document.write(i + '<br/>');
}
document.write(myArray3 + '<br/>');
//using for loop I insert values in an array from nine to one, subtracting two each time
document.write("using for loop I insert values in an array from nine to one, subtracting two each time <br/>");
const myArray4 = [];
for (let i = 9; i >= 1; i -= 2) {
    myArray4.push(i);
    document.write(i + '<br/>');
}
document.write(myArray4 + '<br/>');
//using for loop I add all the numbers in an array
document.write("using for loop I add all the numbers in an array <br/>");
const myArray5 = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArray5.length; i++) {
    total += myArray5[i];
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
for (let i = 0; i < myArray6.length; i++) {
    for (let j = 0; j < myArray6[i].length; j++) {
        total2 += myArray6[i][j];
        document.write(total2 + '<br/>');
    }
}
document.write(total2 + '<br/>');
//nest "for" loop multiplying all the numbers in an array
document.write("nest for loop multiplying all the numbers in an array <br/>");

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
let i2 = 0;

do {
    ourArray.push(i2);
    i2++;
} while (i2 < 5);
document.write(ourArray + '<br/>');
//Iterate with JavaScript While Loops
document.write("Iterate with JavaScript While Loops <br/>");
const ourArray2 = [];
let i3 = 0;


while (i3 < 5) {
    ourArray2.push(i3);
    i3++;
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
    let product = 1;
    for (let i = 0; i < multin; i++) {
        product *= multarr[i];
    }
    return product;
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
document.write(rangeOfNumbers(6, 9) + '<br/>');
rangeOfNumbers(4, 4);
document.write(rangeOfNumbers(4, 4) + '<br/>');
rangeOfNumbers(1, -1);
document.write(rangeOfNumbers(1, -1) + '<br/>');
//Use Recursion to Create a Fibonacci Sequence
document.write("Use Recursion to Create a Fibonacci Sequence <br/>");


function fibonacci(fibn) {
    if (fibn <= 1) {
        return fibn
    }
    return fibonacci(fibn - 1) + fibonacci(fibn - 2);
}
fibonacci(5);
document.write(fibonacci(5) + '<br/>');
fibonacci(10);
document.write(fibonacci(10) + '<br/>');
fibonacci(15);
document.write(fibonacci(15) + '<br/>');
fibonacci(20);
document.write(fibonacci(20) + '<br/>');
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
//Prevent Object Mutation
document.write("Prevent Object Mutation <br/>");


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
document.write(freezeObj() + '<br/>');
//Use Arrow Functions to Write Concise Anonymous Functions
document.write("Use Arrow Functions to Write Concise Anonymous Functions <br/>");

const myFunc = () => {
    const myVar = "value";
    return myVar;
}
myFunc();
document.write(myFunc() + '<br/>');


const myFunc2 = () => "value";
myFunc2();
document.write(myFunc2() + '<br/>');


const magic = () => {
    return new Date();
};
magic();
document.write(magic() + '<br/>');


const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
}
myConcat([1, 2], [3, 4, 5]);
document.write(myConcat([1, 2], [3, 4, 5]) + '<br/>');

//Set Default Parameters for Your Functions
document.write("Set Default Parameters for Your Functions <br/>");


const greeting = (name = "Anonymous") => "Hello " + name;
greeting();
document.write(greeting() + '<br/>');
greeting("John");
document.write(greeting("John") + '<br/>');


/*const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (squarearr) => {
    "use strict";
    // change code below this line
    const squaredIntegers = squarearr.filter(num => Number.isInteger(num) && num > 0).map(num => num * num);
    // change code above this line
    return squaredIntegers;
}
SquareList(realNumberArray);
document.write(SquareList(realNumberArray) + '<br/>');*/


const increment = (number, value = 1) => number + value;
increment(5, 2);
document.write(increment(5, 2) + '<br/>');
increment(5);
document.write(increment(5) + '<br/>');
//Use the Rest Parameter with Function Parameters
document.write("Use the Rest Parameter with Function Parameters <br/>");


const sum2 = (function() {
    "use strict";
    return function sum2(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
sum2(1, 2, 3);
document.write(sum2(1, 2, 3) + '<br/>');
sum2(1, 2, 3, 4);
document.write(sum2(1, 2, 3, 4) + '<br/>');

const sum3 = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
sum3(1, 2, 3);
document.write(sum3(1, 2, 3) + '<br/>');
sum3(1, 2, 3, 4);
document.write(sum3(1, 2, 3, 4) + '<br/>');
//Use the Spread Operator to Evaluate Arrays In-Place
document.write("Use the Spread Operator to Evaluate Arrays In-Place <br/>");


const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
const arr4 = [...arr3];
arr4;
document.write(arr4 + '<br/>');
arr3;
document.write(arr3 + '<br/>');

//Use the Spread Operator to Evaluate Arrays In-Place and using Math.Max
document.write("Use the Spread Operator to Evaluate Arrays In-Place and using Math.Max <br/>");
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
document.write(maximus + '<br/>');
//Use Destructuring Assignment to Extract Values from Objects
document.write("Use Destructuring Assignment to Extract Values from Objects <br/>");


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
document.write(getTempOfTmrw(HIGH_TEMPERATURES) + '<br/>');
//Use Destructuring Assignment to Assign Variables from Objects
document.write("Use Destructuring Assignment to Assign Variables from Objects <br/>");


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
document.write(getMaxOfTmrw(LOCAL_FORECAST) + '<br/>');
//Use Destructuring Assignment to Assign Variables from Nested Objects
document.write("Use Destructuring Assignment to Assign Variables from Nested Objects <br/>");


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
    document.write(ancestors + '<br/>');
});
getAncestors(ANCESTRY_FILE[1], (ancestors) => {
    document.write(ancestors + '<br/>');
});
//this is an error because the callback function is not defined ANCESTRY_FILE[2] does not have a callback function defined because it doens't have second ancestors
/*getAncestors(ANCESTRY_FILE[2], (ancestors) => {
        document.write(ancestors + '<br/>');
    });*/


//Use Destructuring Assignment to Assign Variables from Arrays
document.write("Use Destructuring Assignment to Assign Variables from Arrays <br/>");


const input = [1, 2];
const [first, second] = input;
first;
document.write(first + '<br/>');
second;
document.write(second + '<br/>');
//Use Destructuring Assignment to Assign Variables from Nested Arrays
document.write("Use Destructuring Assignment to Assign Variables from Nested Arrays <br/>");


const list = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const [a, [b, c]] = list;
a;
document.write(a + '<br/>');
b;
document.write(b + '<br/>');
c;
document.write(c + '<br/>');
//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
document.write("Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements <br/>");


const [a1, b1, c1, d1, e1] = [1, 2, 3, 4, 5, 6];
a1;
document.write(a1 + '<br/>');
b1;
document.write(b1 + '<br/>');
c1;
document.write(c1 + '<br/>');
d1;
document.write(d1 + '<br/>');
e1;
document.write(e1 + '<br/>');
//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
document.write("Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements <br/>");


const [a2, b2, ...rest] = [1, 2, 3, 4, 5, 6];
a2;
document.write(a2 + '<br/>');
b2;
document.write(b2 + '<br/>');
rest;
document.write(rest + '<br/>');

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    // Only change code below this line
    const [a3, b3, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr5 = removeFirstTwo(source);
arr5;
document.write(arr5 + '<br/>');
//Use Destructuring Assignment with the Spread Operator to Pass an Argument Object to a Function
document.write("Use Destructuring Assignment with the Spread Operator to Pass an Argument Object to a Function <br/>");


const fn = ([name, age]) => ({
    name,
    age
});
fn([
    "Gandalf",
    56
]);
//Create Strings using Template Literals
document.write("Create Strings using Template Literals <br/>");


const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting2 = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;

greeting2;
document.write(greeting2 + '<br/>');

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
document.write(resultDisplayArray + '<br/>');


const resultDisplayArray2 = makeList(result.skipped);
resultDisplayArray2;
document.write(resultDisplayArray2 + '<br/>');


const resultDisplayArray3 = makeList(result.success);
resultDisplayArray3;
document.write(resultDisplayArray3 + '<br/>');
//Write Concise Object Literal Declarations Using Object Property Shorthand
document.write("Write Concise Object Literal Declarations Using Object Property Shorthand <br/>");


const createPerson = (name, age, gender) => ({ name, age, gender });
createPerson("Zodiac Hasbro2", 562, "male" + "<br/>");

const createPerson2 = (name, age, gender) => {
    return { name, age, gender };
};
createPerson2("Zodiac Hasbro", 56, "male");
//Write Concise Declarative Functions with ES6
document.write("Write Concise Declarative Functions with ES6 <br/>");
const person2 = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};
person2.sayHello();
document.write(person2.sayHello() + '<br/>');


const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
bicycle.gear;
document.write(bicycle.gear + '<br/>');
//Use class Syntax to Define a Constructor Function
document.write("Use class Syntax to Define a Constructor Function <br/>");
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new Vegetable("carrot");
carrot.name;
document.write(carrot.name + '<br/>');
//Use getters and setters to Control Access to an Object
document.write("Use getters and setters to Control Access to an Object <br/>");
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit;
    }
    get temperature() {
        return 5 / 9 * (this._fahrenheit - 32);
    }
    set temperature(celsius) {
        this._fahrenheit = 32 + 9 / 5 * celsius;
    }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp;
document.write(temp + '<br/>');
//Use class Syntax to Define a Subclass
document.write("Use class Syntax to Define a Subclass <br/>");
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
document.write(dog.name + '<br/>');
const animal = new Animal("Cat");
animal.name;
document.write(animal.name + '<br/>');
//Use class Syntax to Define a Subclass
document.write("Use class Syntax to Define a Subclass <br/>");
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
document.write(dog2.name + '<br/>');
const animal2 = new Animal2("Cat2");
animal2.name;
document.write(animal2.name + '<br/>');