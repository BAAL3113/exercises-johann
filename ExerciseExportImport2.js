//import { add } from './ExerciseExportImport1.js';
//import { add2, sqrt, diag } from './ExerciseExportImportjs1.js';
//importScripts('ExerciseExportImportjs1.js');


// Exercise: Export Import
//
// 1. Import the add function from ExerciseExportImport1.js
// 2. Import the add2, add3, sqrt, and diag functions from ExerciseExportImportjs1.js
// 3. Call the add function with the arguments 2 and 3
// 4. Call the add2 function with the arguments 2 and 3
// 5. Call the add3 function with the arguments 2 and 3
// 6. Call the sqrt function with the argument 4
// 7. Call the diag function with the argument [1, 2, 3]
/*add(1, 2);
document.write(add(1, 2) + '<br>');
add2(1, 2);
console.log("🚀 ~ file: ExerciseExportImport2.js ~ line 18 ~ add2", add2(1, 2));
document.write(add2(1, 2) + '<br>');
document.write(sqrt(4) + '<br>');
document.write(diag(4, 5) + '<br>');*/
//Use * to Import Everything from a File
document.write("Use * to Import Everything from a File");
/*import * as myMath from './ExerciseExportImportjs1.js';
document.write(myMath.add(1, 2) + '<br>');
document.write(myMath.add2(1, 2) + '<br>');
document.write(myMath.sqrt(4) + '<br>');
document.write(myMath.diag(4, 5) + '<br>');*/

//Create an Export Fallback with export default
document.write("Create an Export Fallback with export default");

/*export default function add(x, y) {
    return x + y;
}

export default function(x, y) {
    return x + y;
}*/

//Import a Default Export
document.write("Import a Default Export");
/*import add from './ExerciseExportImport2.js';
document.write(add(1, 2) + '<br>');*/


//Import a Named Export
document.write("Import a Named Export");
/*import { add } from './ExerciseExportImport2.js';
document.write(add(1, 2) + '<br>');*/

//Create a JavaScript Promise
document.write("Create a JavaScript Promise");
const myPromise = new Promise((resolve, reject) => {
    if (true) {
        resolve("Success!");
    } else {
        reject("Failure!");
    }

});

const makeServerRequest = new Promise((resolve, reject) => {

    //responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received.");
    }

});

//Handle a Fulfilled Promise with then
document.write("Handle a Fulfilled Promise with then");
makeServerRequest.then(result => {
    document.write(result);
});


//Handle a Rejected Promise with catch
document.write("Handle a Rejected Promise with catch");
makeServerRequest.catch(error => {
    document.write(error);
});


//Create a JavaScript Promise with a Custom Promise Handler
document.write("Create a JavaScript Promise with a Custom Promise Handler");
const myPromise2 = new Promise((resolve, reject) => {
    if (true) {
        resolve("Success!");
    } else {
        reject("Failure!");
    }

}); //end of myPromise2

//The onFulfilled callback handles the fulfilled promise
myPromise2.then(result => {
    document.write(result);
})

//The onRejected callback handles the rejected promise
.catch(error => {
        document.write(error);
    }

); //end of myPromise2.then()