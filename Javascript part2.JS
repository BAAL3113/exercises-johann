//using while loop
const myArray = [];
let i = 0;
while (i < 5) {
    myArray.push(i);
    document.write(i + '<br/>');
    i++;
}
document.write(myArray + '<br/>');
//using for loop
const myArray2 = [];
for (let i2 = 0; i2 < 5; i2++) {
    myArray2.push(i2);
    document.write(i2 + '<br/>');
}
document.write(myArray2 + '<br/>');
const myArray3 = [];
for (let i3 = 1; i3 <= 9; i3 += 2) {
    myArray3.push(i3);
    document.write(i3 + '<br/>');
}
document.write(myArray3 + '<br/>');
const myArray4 = [];
for (let i4 = 9; i4 >= 1; i4 -= 2) {
    myArray4.push(i4);
    document.write(i4 + '<br/>');
}
document.write(myArray4 + '<br/>');
const myArray5 = [2, 3, 4, 5, 6];
let total = 0;
for (let i5 = 0; i5 < myArray5.length; i5++) {
    total += myArray5[i5];
    document.write(total + '<br/>');
}
//nest "for" loop
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

function multiplyAll(arr) {
    let product = 1;
    for (let i7 = 0; i7 < arr.length; i7++) {
        for (let j2 = 0; j2 < arr.length; j2++) {
            product *= arr[i7][j2];
        }
    }
    return document.write(product);
}
multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);
//using forEach
const myArray7 = [1, 2, 3, 4, 5];
myArray7.forEach(function(item) {
    document.write(item + '<br/>');
});
//Iterate with JavaScript Do...While Loops
const ourArray = [];
let i8 = 0;

do {
    ourArray.push(i8);
    i8++;
} while (i8 < 5);
document.write(ourArray + '<br/>');
//Iterate with JavaScript While Loops
const ourArray2 = [];
let i9 = 0;


while (i9 < 5) {
    ourArray2.push(i9);
    i9++;
}
document.write(ourArray2 + '<br/>');
//Replace Loops with using Recursion
const myArray8 = [1, 2, 3, 4, 5];

//in this function, we are using recursion
function multiply(arr, num) {
    if (num > arr.length) {
        return 0;
    } else {
        arr[num - 1] *= 10;
        multiply(arr, num + 1);
    }
}
multiply(myArray8, 1);
document.write(myArray8 + '<br/>');
document.write(multiply2(myArray8, 1) + '<br/>');
//in this function, we are not using Recursion, we are using a loop
function multiply2(arr, n) {
    let product = 1;
    for (let ia = 0; ia < n; ia++) {
        product *= arr[ia];
    }
    return product;
}
multiply2(myArray8, 5);
document.write(myArray8 + '<br/>');
document.write(multiply2(myArray8, 5) + '<br/>');
//in this function, we are using recursion
function multiply3(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply3(arr, n - 1) * arr[n - 1];
    }
}
multiply3(myArray8, 5);
document.write(myArray8 + '<br/>');
document.write(multiply3(myArray8, 5) + '<br/>');
//in this function, we are using recursion
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}
sum(myArray8, 5);
document.write(myArray8 + '<br/>');
document.write(sum(myArray8, 5) + '<br/>');