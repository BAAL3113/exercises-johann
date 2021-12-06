//Use export to Share a Code Block
document.write("Use export to Share a Code Block </br>");
/*export const add = (x, y) => {
    return x + y;
}
const add2 = (x, y) => {
    return x + y;
}
add2(1, 2);
document.write(add2(1, 2) + '<br>');
export { add2 };*/

const add3 = (x, y) => {
    return x + y;
}
add3(1, 2);
document.write(add3(1, 2) + '</br>');


/*export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

import { add, square, diag } from './ExerciseExportImportjs1.js';
document.write(add(1, 2) + '<br>');
document.write(square(2) + '<br>');
document.write(diag(3, 4) + '<br>');*/

//Using the Test Method
document.write("Using the Test Method </br>");
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
document.write(testRegex.test(testStr) + '</br>');


//Using the Replace Method
document.write("Using the Replace Method </br>");
let repstr = "freeCodeCamp";
let newrepStr = repstr.replace("Code", "Coding");
document.write(newrepStr + '</br>');


//Using the Split Method
document.write("Using the Split Method </br>");
let spstr = "freeCodeCamp";
let splitStr = spstr.split("");
document.write(splitStr + '</br>');


//Using the Substring Method
document.write("Using the Substring Method </br>");
let substr = "freeCodeCamp";
let newsubStr = substr.substring(0, 5);
document.write(newsubStr + '</br>');


//Using the Slice Method
document.write("Using the Slice Method </br>");
let slstr = "freeCodeCamp";
let newslStr = slstr.slice(0, 5);
document.write(newslStr + '</br>');


//Using the Concat Method
document.write("Using the Concat Method </br>");
let str1 = "Hello";
let str2 = "World";
let str3 = str1.concat(" ", str2);
document.write(str3 + '</br>');


//Using the Includes Method
document.write("Using the Includes Method </br>");
let incstr = "freeCodeCamp";
let incresult = incstr.includes("Code");
document.write(incresult + '</br>');


//Using the StartsWith Method
document.write("Using the StartsWith Method </br>");
let stwstr = "freeCodeCamp";
let stwresult = stwstr.startsWith("free");
document.write(stwresult + '</br>');


//Using the EndsWith Method
document.write("Using the EndsWith Method </br>");
let enwstr = "freeCodeCamp";
let enwresult = enwstr.endsWith("Camp");
document.write(enwresult + '</br>');


//Using the Repeat Method
document.write("Using the Repeat Method </br>");
let repstr = "freeCodeCamp";
let represult = repstr.repeat(2);
document.write(represult + '</br>');


//Using the PadStart Method
document.write("Using the PadStart Method </br>");
let padsstr = "freeCodeCamp";
let padsresult = padsstr.padStart(10);
document.write(padsresult + '</br>');


//Using the PadEnd Method
document.write("Using the PadEnd Method </br>");
let padestr = "freeCodeCamp";
let paderesult = padestr.padEnd(10);
document.write(paderesult + '</br>');


//Using the Trim Method
document.write("Using the Trim Method </br>");
let trstr = "       freeCodeCamp       ";
let trresult = trstr.trim();
document.write(trresult + '</br>');


//Using the Template Literals
document.write("Using the Template Literals </br>");
let name = "freeCodeCamp";
let course = "Bootcamp";
let template = `${name} is taking ${course}`;
document.write(template + '</br>');


//Using the Escape Sequences
document.write("Using the Escape Sequences </br>");
let escstr = "FirstLine\n\t\\SecondLine\nThirdLine";
document.write(escstr + '</br>');


//Using the Unescape Sequences
document.write("Using the Unescape Sequences </br>");
let unestr = "FirstLine\n\t\\SecondLine\nThirdLine";
let unescapedStr = unestr.replace(/\\/g, "");
document.write(unescapedStr + '</br>');