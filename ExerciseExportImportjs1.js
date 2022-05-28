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
//document.write(testRegex.test(testStr) + '</br>');

//Match a Literal String with Different Possibilities
document.write("Match a Literal String with Different Possibilities </br>");
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let testresult = petRegex.test(petString);
//document.write(testresult + '</br>');

//Ignore Case While Matching
document.write("Ignore Case While Matching </br>");
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let testiresult = fccRegex.test(myString);
//document.write(testiresult + '</br>');


//Extract Matches
document.write("Extract Matches </br>");
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let matchresult = extractStr.match(codingRegex);
document.write(matchresult + '</br>');


//Find More Than the First Match
document.write("Find More Than the First Match </br>");
let twostr = "Repeat, Repeat, Repeat";
let tworegex = /Repeat/g;
let tworesult = twostr.match(tworegex);
document.write(tworesult + '</br>');

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let twinkleresult = twinkleStar.match(starRegex);
document.write(twinkleresult + '</br>');


//Match Anything with Wildcard Period
document.write("Match Anything with Wildcard Period </br>");
let wildStr = "freeCodeCamp";
let freeRegex = /f.e/;
let wildresult = freeRegex.test(wildStr);
//document.write(wildresult + '</br>');

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
//document.write(huRegex.test(humStr) + '</br>');
//document.write(huRegex.test(hugStr) + '</br>');


//Match Single Character with Multiple Possibilities
document.write("Match Single Character with Multiple Possibilities </br>");
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let vowelresult = quoteSample.match(vowelRegex);
document.write(vowelresult + '</br>');

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
document.write(bigStr.match(bgRegex) + '</br>');
document.write(bagStr.match(bgRegex) + '</br>');
document.write(bugStr.match(bgRegex) + '</br>');
document.write(bogStr.match(bgRegex) + '</br>');


//Match Letters of the Alphabet
document.write("Match Letters of the Alphabet </br>");
let alphaStr = "abcdefghijklmnopqrstuvwxyz";
let alphaRegex = /[a-z]/ig;
let alpharesult = alphaStr.match(alphaRegex);
document.write(alpharesult + '</br>');


let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex2 = /[a-e]at/;
catStr.match(bgRegex2);
batStr.match(bgRegex2);
matStr.match(bgRegex2);
document.write(catStr.match(bgRegex2) + '</br>');
document.write(batStr.match(bgRegex2) + '</br>');
document.write(matStr.match(bgRegex2) + '</br>');


//Match Numbers and Letters of the Alphabet
document.write("Match Numbers and Letters of the Alphabet </br>");
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
document.write(jennyStr.match(myRegex) + '</br>');


let quoteSampleV2 = "Blueberry 3.141592653s are delicious.";
let myRegex3 = /[h-s2-6]/ig; // Change this line
quoteSampleV2.match(myRegex3);
document.write(quoteSampleV2.match(myRegex3) + '</br>');




//Match Numbers of any Length
document.write("Match Numbers of any Length </br>");
let numStr = "42";
let numRegex = /[0-9]/ig;
let numresult = numStr.match(numRegex);
document.write(numresult + '</br>');


//Match Single Character Not Specified
document.write("Match Single Character Not Specified </br>");
let quoteSample2 = "3 blind mice.";
let nonRegex = /[^0-9]/ig;
let nonresult = quoteSample2.match(nonRegex);
document.write(nonresult + '</br>');


let quoteSampleV3 = "3 blind mice.";
let nonRegex2 = /[^aeiou0-9]/ig;
let nonresult2 = quoteSampleV3.match(nonRegex2);
document.write(nonresult2 + '</br>');


//Match Characters that Occur One or More Times
document.write("Match Characters that Occur One or More Times </br>");
let difficultSpelling = "Mississippi";
let myRegex2 = /s+/g;
let difficultResult = difficultSpelling.match(myRegex2);
document.write(difficultResult + '</br>');


//Match Characters that Occur Zero or More Times
document.write("Match Characters that Occur Zero or More Times </br>");
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let chewieResult = chewieQuote.match(chewieRegex);
document.write(chewieResult + '</br>');


//Match Characters that Occur One or More Times with Lazy Matching
document.write("Match Characters that Occur One or More Times with Lazy Matching </br>");
let haiku = "May the force be with you.";
let haikuRegex = /.{3,}/g;
let haikuResult = haiku.match(haikuRegex);
document.write(haikuResult + '</br>');


//this code makes the rest of the page bold font
let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/;
let textresult = text.match(myRegex4);
document.write(textresult + '</br>');

//this code makes the content of this code bold font
//Match Characters that Occur One or More Times with Lazy Matching
document.write("Match Characters that Occur One or More Times with Lazy Matching </br>");
let text2 = "<h1>Winter is coming</h1>";
let myRegex5 = /<.*?>/g;
let textresult2 = text2.match(myRegex5);
document.write(textresult2 + '</br>');


let xa = "<h1>";
let xe = /<.*?>/;
xeresult = xa.match(xe);
document.write(xeresult);

document.write("this line should be bold </br>");

let xa2 = "</h1>";
let xe2 = /<.*?>/g;
xeresult2 = xa2.match(xe2);
document.write(xeresult2);


let xa3 = "<h2>";
let xe3 = /<.*?>/;
xeresult3 = xa3.match(xe3);
document.write(xeresult3);

document.write("this line should be bold </br>");

let xa4 = "</h2>";
let xe4 = /<.*?>/g;
xeresult4 = xa4.match(xe4);
document.write(xeresult4);


//Restrict Possible Usernames
document.write("Restrict Possible Usernames </br>");
let username2 = "JackOfAllTrades";
let userCheck2 = /^[a-z]{2,}\d*$/i;
let userresult2 = userCheck2.test(username2);
document.write(userresult2 + '</br>');




let text3 = "this line should be bold </br>";
let Ja = /t.*?old/;
let textresult3 = text3.match(Ja);
document.write(textresult3 + '</br>');




//Match Beginning String Patterns
document.write("Match Beginning String Patterns </br>");
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let calresult = calRegex.test(rickyAndCal);
document.write(calresult + '</br>');


//Match Ending String Patterns
document.write("Match Ending String Patterns </br>");
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let lastresult = lastRegex.test(caboose);
document.write(lastresult + '</br>');


//Match All Letters and Numbers
document.write("Match All Letters and Numbers </br>");
let quoteSample3 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let alphabetresult = quoteSample3.match(alphabetRegexV2);
document.write(alphabetresult + '</br>');


//Match Everything But Letters and Numbers
document.write("Match Everything But Letters and Numbers </br>");
let quoteSample4 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let nonalphabetresult = quoteSample4.match(nonAlphabetRegex);
document.write(nonalphabetresult + '</br>');


//Match All Numbers
document.write("Match All Numbers </br>");
let numStr2 = "Your sandwich will be $5.00";
let numRegex2 = /\d/g;
let numresult2 = numStr2.match(numRegex2);
document.write(numresult2 + '</br>');


//Match All Non-Numbers
document.write("Match All Non-Numbers </br>");
let numStr3 = "Your sandwich will be $5.00";
let numRegex3 = /\D/g;
let numresult3 = numStr3.match(numRegex3);
document.write(numresult3 + '</br>');


//Restrict Possible Usernames
document.write("Restrict Possible Usernames </br>");
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]|[a-z]){2,7}$/i;
let userresult = userCheck.test(username);
document.write(userresult + '</br>');



//Match All White-Space Characters
document.write("Match All White-Space Characters </br>");
let whiteSpace = "Whitespace. Whitespace everywhere!";
let whiteSpaceRegex = /\s/g;
let whitespaceresult = whiteSpace.match(whiteSpaceRegex);
document.write(whitespaceresult + '</br>');


//Match All Non-White-Space Characters
document.write("Match All Non-White-Space Characters </br>");
let whiteSpace2 = "Whitespace. Whitespace everywhere!";
let whiteSpaceRegex2 = /\S/g;
let whitespaceresult2 = whiteSpace2.match(whiteSpaceRegex2);
document.write(whitespaceresult2 + '</br>');
let whitespaceresult3 = whiteSpace2.match(whiteSpaceRegex2).length;
document.write(whitespaceresult3 + '</br>');


//Specify Upper and Lower Number of Matches
document.write("Specify Upper and Lower Number of Matches </br>");
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let ohresult = ohRegex.test(ohStr);
document.write(ohresult + '</br>');


//Specify Only the Lower Number of Matches
document.write("Specify Only the Lower Number of Matches </br>");
let ohStr2 = "Ohhh no";
let ohRegex2 = /Oh{3,} no/;
let ohresult2 = ohRegex2.test(ohStr2);
document.write(ohresult2 + '</br>');


//Specify Exact Number of Matches
document.write("Specify Exact Number of Matches </br>");
let ohStr3 = "Ohhh no";
let ohRegex3 = /Oh{4} no/;
let ohresult3 = ohRegex3.test(ohStr3);
document.write(ohresult3 + '</br>');


//Check for All or None
document.write("Check for All or None </br>");
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
let americanresult = american.match(rainbowRegex);
let britishresult = british.match(rainbowRegex);
document.write(americanresult + '</br>');
document.write(britishresult + '</br>');


//Positive and Negative Lookahead
document.write("Positive and Negative Lookahead </br>");
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qregex = /q(?!u)/;
let quitresult = quit.match(quRegex);
let noquitresult = noquit.match(quRegex);
document.write(quitresult + '</br>');
document.write(noquitresult + '</br>');



//Match All Word Characters
document.write("Match All Word Characters </br>");
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonWordRegex = /\W/g;
let nonwordresult = quoteSample5.match(nonWordRegex);
document.write(nonwordresult + '</br>');


//Match All Non-Word Characters
document.write("Match All Non-Word Characters </br>");
let quoteSample6 = "The five boxing wizards jump quickly.";
let nonWordRegex2 = /\w/g;
let nonwordresult2 = quoteSample6.match(nonWordRegex2);
document.write(nonwordresult2 + '</br>');


//Match the Dot
document.write("Match the Dot </br>");
let quoteSample7 = "Anita lava la tina.";
let theRegex = /\./g;
let theresult = quoteSample7.match(theRegex);
document.write(theresult + '</br>');


//Match a Dot that Occurs One or More Times
document.write("Match a Dot that Occurs One or More Times </br>");
let quoteSample8 = "Anita lava la tina.";
let theRegex2 = /\.+/g;
let theresult2 = quoteSample8.match(theRegex2);
document.write(theresult2 + '</br>');


//Match a Dot that Occurs Zero or More Times
document.write("Match a Dot that Occurs Zero or More Times </br>");
let quoteSample9 = "Anita lava la tina.";
let theRegex3 = /\.*/g;
let theresult3 = quoteSample9.match(theRegex3);
document.write(theresult3 + '</br>');


//Match All Non-Period Characters
document.write("Match All Non-Period Characters </br>");
let quoteSample10 = "Anita lava la tina.";
let theRegex4 = /\W/g;
let theresult4 = quoteSample10.match(theRegex4);
document.write(theresult4 + '</br>');


//Match All Non-Word Characters or Periods
document.write("Match All Non-Word Characters or Periods </br>");
let quoteSample11 = "Anita lava la tina.";
let theRegex5 = /\W|\./g;
let theresult5 = quoteSample11.match(theRegex5);
document.write(theresult5 + '</br>');


//Match the Underscore Character
document.write("Match the Underscore Character </br>");
let quoteSample12 = "Anita lava la tina.";
let theRegex6 = /_/g;
let theresult6 = quoteSample12.match(theRegex6);
document.write(theresult6 + '</br>');


//Match a Word Boundary
document.write("Match a Word Boundary </br>");
let firstName = "Karl";
let nameRegex = /\bKarl\b/;
let nameresult = nameRegex.test(firstName);
document.write(nameresult + '</br>');


//Match a Non-Word Character Boundary
document.write("Match a Non-Word Character Boundary </br>");
let firstName2 = "Karl";
let nameRegex2 = /\BKarl\B/;
let nameresult2 = nameRegex2.test(firstName2);
document.write(nameresult2 + '</br>');


//Match the Escape Character
document.write("Match the Escape Character </br>");
let quoteSample13 = "Anita lava la tina.";
let theRegex7 = /anita/i;
let theresult7 = quoteSample13.match(theRegex7);
document.write(theresult7 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample14 = "Anita lava la tina.";
let theRegex8 = /anita\./i;
let theresult8 = quoteSample14.match(theRegex8);
document.write(theresult8 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample15 = "Anita lava la tina.";
let theRegex9 = /anita\s/i;
let theresult9 = quoteSample15.match(theRegex9);
document.write(theresult9 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample16 = "Anita lava la tina.";
let theRegex10 = /anita\w/i;
let theresult10 = quoteSample16.match(theRegex10);
document.write(theresult10 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample17 = "Anita lava la tina.";
let theRegex11 = /anita\d/i;
let theresult11 = quoteSample17.match(theRegex11);
document.write(theresult11 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample18 = "Anita lava la tina.";
let theRegex12 = /anita\D/i;
let theresult12 = quoteSample18.match(theRegex12);
document.write(theresult12 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample19 = "Anita lava la tina.";
let theRegex13 = /anita\w\D/i;
let theresult13 = quoteSample19.match(theRegex13);
document.write(theresult13 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample20 = "Anita lava la tina.";
let theRegex14 = /anita\w\d/i;
let theresult14 = quoteSample20.match(theRegex14);
document.write(theresult14 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample21 = "Anita lava la tina.";
let theRegex15 = /anita\w\D\d/i;
let theresult15 = quoteSample21.match(theRegex15);
document.write(theresult15 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample22 = "Anita lava la tina.";
let theRegex16 = /anita\w\d\D/i;
let theresult16 = quoteSample22.match(theRegex16);
document.write(theresult16 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample23 = "Anita lava la tina.";
let theRegex17 = /anita\w\d\D\d/i;
let theresult17 = quoteSample23.match(theRegex17);
document.write(theresult17 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample24 = "Anita lava la tina.";
let theRegex18 = /anita\w\d\D\d\w/i;
let theresult18 = quoteSample24.match(theRegex18);
document.write(theresult18 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample25 = "Anita lava la tina.";
let theRegex19 = /anita\w\d\D\d\w\d/i;
let theresult19 = quoteSample25.match(theRegex19);
document.write(theresult19 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample26 = "Anita lava la tina.";
let theRegex20 = /anita\w\d\D\d\w\d\D/i;
let theresult20 = quoteSample26.match(theRegex20);
document.write(theresult20 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample27 = "Anita lava la tina.";
let theRegex21 = /anita\w\d\D\d\w\d\D\d/i;
let theresult21 = quoteSample27.match(theRegex21);
document.write(theresult21 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample28 = "Anita lava la tina.";
let theRegex22 = /anita\w\d\D\d\w\d\D\d\w/i;
let theresult22 = quoteSample28.match(theRegex22);
document.write(theresult22 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample29 = "Anita lava la tina.";
let theRegex23 = /anita\w\d\D\d\w\d\D\d\w\d/i;
let theresult23 = quoteSample29.match(theRegex23);
document.write(theresult23 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample30 = "Anita lava la tina.";
let theRegex24 = /anita\w\d\D\d\w\d\D\d\w\d\D/i;
let theresult24 = quoteSample30.match(theRegex24);
document.write(theresult24 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample31 = "Anita lava la tina.";
let theRegex25 = /anita\w\d\D\d\w\d\D\d\w\d\D\d/i;
let theresult25 = quoteSample31.match(theRegex25);
document.write(theresult25 + '</br>');


//Match Single Characters Not Specified
document.write("Match Single Characters Not Specified </br>");
let quoteSample32 = "Anita lava la tina.";
let theRegex26 = /anita\w\d\D\d\w\d\D\d\w\d\D\d\w/i;
let theresult26 = quoteSample32.match(theRegex26);
document.write(theresult26 + '</br>');


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
/*document.write("Using the Includes Method </br>");
let incstr = "freeCodeCamp";
let incresult = incstr.includes("Code");
document.write(incresult + '</br>');*/


//Using the StartsWith Method
/*document.write("Using the StartsWith Method </br>");
let stwstr = "freeCodeCamp";
let stwresult = stwstr.startsWith("free");
document.write(stwresult + '</br>');*/


//Using the EndsWith Method
/*document.write("Using the EndsWith Method </br>");
let enwstr = "freeCodeCamp";
let enwresult = enwstr.endsWith("Camp");
document.write(enwresult + '</br>');*/


//Using the Repeat Method
/*document.write("Using the Repeat Method </br>");
let repstr = "freeCodeCamp";
let represult = repstr.repeat(2);
document.write(represult + '</br>');*/


//Using the PadStart Method
/*document.write("Using the PadStart Method </br>");
let padsstr = "freeCodeCamp";
let padsresult = padsstr.padStart(10);
document.write(padsresult + '</br>');*/


//Using the PadEnd Method
/*document.write("Using the PadEnd Method </br>");
let padestr = "freeCodeCamp";
let paderesult = padestr.padEnd(10);
document.write(paderesult + '</br>');*/


//Using the Trim Method
/*document.write("Using the Trim Method </br>");
let trstr = "       freeCodeCamp       ";
let trresult = trstr.trim();
document.write(trresult + '</br>');*/


//Using the Template Literals
/*document.write("Using the Template Literals </br>");
let name = "freeCodeCamp";
let course = "Bootcamp";
let template = `${name} is taking ${course}`;
document.write(template + '</br>');*/


//Using the Escape Sequences
document.write("Using the Escape Sequences </br>");
let escstr = "FirstLine\n\t\\SecondLine\nThirdLine";
document.write(escstr + '</br>');


//Using the Unescape Sequences
document.write("Using the Unescape Sequences </br>");
let unestr = "FirstLine\n\t\\SecondLine\nThirdLine";
let unescapedStr = unestr.replace(/\\/g, "");
document.write(unescapedStr + '</br>');