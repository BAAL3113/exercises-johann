import { add } from './ExerciseExportImport1.js';
import { add2, sqrt, diag } from './ExerciseExportImportjs1.js';
importScripts('ExerciseExportImportjs1.js');


// Exercise: Export Import
//
// 1. Import the add function from ExerciseExportImport1.js
// 2. Import the add2, add3, sqrt, and diag functions from ExerciseExportImportjs1.js
// 3. Call the add function with the arguments 2 and 3
// 4. Call the add2 function with the arguments 2 and 3
// 5. Call the add3 function with the arguments 2 and 3
// 6. Call the sqrt function with the argument 4
// 7. Call the diag function with the argument [1, 2, 3]
add(1, 2);
document.write(add(1, 2) + '<br>');
add2(1, 2);
console.log("🚀 ~ file: ExerciseExportImport2.js ~ line 18 ~ add2", add2(1, 2));
document.write(add2(1, 2) + '<br>');
document.write(sqrt(4) + '<br>');
document.write(diag(4, 5) + '<br>');