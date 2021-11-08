var question="what's my name?, " +"Answer me please";
var answer=" my name is Johann";
document.write(question,"<br/>");
document.write(answer,"<br/>");
let name2="Johann";
document.write(name2+"<br/>");
let age=37;
document.write(age+"<br>");
let isMarried=true;
document.write(isMarried+"<br/>");
let isMarried2=false;
document.write(isMarried2+"<br/>");
if(isMarried==true){
    document.write("you are married <br/>");
    document.write("FINALLY!!! <br/>");
}
else{
    document.write("you are not married <br/>");

}
document.write("My name is Johann".length+"<br/>");
document.write("My name is Johann".toUpperCase()+"<br/>");
age++;
document.write(age+"<br/>");
let age2=19;
document.write(age2+"<br/>");
let diference=age-age2;
document.write(diference+"<br/>");
document.write(name2[0]+"<br/>");
let Array2=[3,2,1];
document.write(Array2[0]+"<br/>");
let SecondDigit2=Array2[1];
document.write(SecondDigit2+"<br/>");
Array2.push(4);
document.write(Array2+"<br/>");
const oneDown2=Array2.pop();
document.write(oneDown2+"<br/>");
document.write(Array2+"<br/>");
const firstDown2=Array2.shift();
document.write(firstDown2+"<br/>");
document.write(Array2+"<br/>");
const firstInsert2=Array2.unshift(1);
document.write(firstInsert2+"<br/>");
document.write(Array2+"<br/>");
Array2.unshift(6,6,6);
document.write(Array2+"<br/>");
function sentence2(){
    document.write("Hello World <br/>");
}
sentence2();
function expression2(name){
    document.write("Hello "+name+"<br/>");
}
expression2("Johann");
function sum2(num){
    return num+1;
}
document.write(sum2(4)+"<br/>");