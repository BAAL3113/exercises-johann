//document presentation of JavaScript
console.log("This is Javascript");
//declaration of variables with var, assigning text
var question = "Question, " + "Answer me please!";
var answer = "Answer";
var correct = "Correct";
var incorrect = "Incorrect";
//printing variables
console.log(question, answer, correct, incorrect);
//declaration of variables with let, assigning text
let a = 1;
let b = 2;
let c = a + b;
//printing variables on screen
console.log(c);
console.log(question + " Yes of course, tell me.");
console.log("Did you take my cellphone? " + answer + "!");
console.log(correct);
console.log(`Oh I thought I was ${incorrect}`);
c += c;
console.log(c);
c *= b;
console.log(c);
console.log("My name is Johann".length);
console.log("My name is Johann".toUpperCase());
//using arrays
let Name = "Johann";
let FirstLetter = "";
FirstLetter = Name[0];
console.log(FirstLetter);
let Array = [1, 2, 3];
console.log(Array[0]);
let SecondDigit = Array[1];
console.log(SecondDigit);
Array.push(4);
console.log(Array);
const oneDown = Array.pop();
console.log(oneDown);
console.log(Array);
const firstDown = Array.shift();
console.log(firstDown);
console.log(Array);
const firstInsert = Array.unshift(3);
console.log(firstInsert);
console.log(Array);
Array.unshift(["Johann", "Michele", "Goku"]);
console.log(Array);
//usings functions
function sentence() {
    console.log("Hello World!");
}
sentence();

function expression(a, b) {
    console.log(a + b);
}
expression("fuck", "you");

function sum(num) {
    return num + 6;
}
console.log(sum(4));
global = 5;
console.log(global);

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift(item);
}
const testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue == true) {
        return console.log("Yes, that was true");
    } else {
        return console.log("No, that was false");
    }
}
trueOrFalse(true);
trueOrFalse(false);
//using If Else and equality, diferrence, greater than, less than, greater than or equal to, less than or equal to
function testEqual(val) {
    if (val == 12) {
        return console.log("Equal");
    } else {
        return console.log("Not Equal");
    }
}
testEqual("12");
testEqual(12);

function testEqual2(val) {
    if (val === 12) {
        return console.log("Equal");
    } else {
        return console.log("Not Equal");
    }
}
testEqual2("12");
testEqual2(12);

function testNotEqual(val) {
    if (val != 12) {
        return console.log("Not Equal");
    } else {
        return console.log("Equal");
    }
}
testNotEqual(12);
testNotEqual("12");

function testNotEqual2(val) {
    if (val !== 12) {
        return console.log("Not Equal");
    } else {
        return console.log("Equal");
    }
}
testNotEqual2(12);
testNotEqual2("12");
// the command or is ||
// using if, else if, else
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return console.log(names[0]);
    } else if (strokes <= par - 2) {
        return console.log(names[1]);
    } else if (strokes == par - 1) {
        return console.log(names[2]);
    } else if (strokes == par) {
        return console.log(names[3]);
    } else if (strokes == par + 1) {
        return console.log(names[4]);
    } else if (strokes == par + 2) {
        return console.log(names[5]);
    } else {
        return console.log(names[6]);
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
    return console.log(answer);
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
    return console.log(answer);
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
    return console.log(answer);
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
    return console.log(answer);
}
chainToSwitch("bob");
chainToSwitch("sally");
chainToSwitch("joe");
chainToSwitch("mary");
let testConsole = "testConsole";
//example of or || and Math.min
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return console.log("Please enter positive numbers");
    }
    return console.log(Math.min(a, b));
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
    return console.log(Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)));
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
        return console.log(count + " Yes, you win!");
    } else {
        return console.log(count + " No, you lose!");
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
            return console.log("5 Bet");
            break;
        case 7 || 8 || 9:
            return console.log("0 Hold");
        case 10 || "J" || "Q" || "K" || "A":
            count--;
            return console.log("-5 Hold");
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
console.log(hatValue);
console.log(shirtValue);
console.log(shoesValue);
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
//assigning a value to a variable, using bracket notation
const entreeValue = testObj2["an entree"];
const drinkValue = testObj2["the drink"];
console.log(entreeValue);
console.log(drinkValue);
const testObj3 = {
    face: "glasses",
    head: 1,
    "how many fingers": 10
};
const faceValue = testObj3.face;
const headValue = testObj3.head;
const fingerValue = testObj3["how many fingers"];
console.log(faceValue);
console.log(headValue);
console.log(fingerValue);
const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};
const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
const someObj = {
    propName: "John"
};

function propPrefix(str) {
    const s = "prop";
    return s + str;
}
const someProp = propPrefix("Name");
console.log(someObj[someProp]);
someObj[someProp] = "Peter";
console.log(someObj[someProp]);
delete testObj2["my side"];
let property;
property = testObj2.hasOwnProperty("my side");
console.log(property);
property = testObj2.hasOwnProperty("an entree");
console.log(property);

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
    return console.log(result);
}
phoneticLookup("charlie");
phoneticLookup("bravo");
//using hasOwnProperty
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return console.log(obj[checkProp]);
    } else {
        return console.log("Not Found");
    }
}
checkObj(testObj3, "face");
checkObj(phoneticLookup, "charlie");
checkObj(dogs, "Fido");
checkObj(dogs, "face");
//adding properties to an object
const myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Bruno Mars",
        "title": "24K Magic",
        "release_year": 2016,
        "formats": [
            "CD",
            "Digital"
        ],
        "gold": true
    },
    {
        "artist": "Bruno Mars",
        "title": "24K Magic",
        "release_year": 2016,
        "formats": [
            "CD",
            "Digital"
        ],
        "gold": true
    }
];
//accessing nested properties of an object
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

let gloveBoxContents = undefined;
gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);
console.log(myStorage.car.inside["glove box"]);
console.log(myStorage.car.outside["trunk"]);
const myPlants = [{
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

let secondTree = "";
secondTree = myPlants[1].list[1];
console.log(secondTree);

var recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop] = records[id][prop] || [];
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    } else {
        records[id][prop] = value;
    }
    return records;
}
updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "tracks", "Addicted to Love");
updateRecords(recordCollection, 1245, "tracks", "You Give Love a Bad Name");
console.log(recordCollection[2548]["tracks"]);