/*function loadScript(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

function loadScript2(url, callback) {

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}*/
//Use export to Share a Code Block
document.write("Use export to Share a Code Block <br/>");
export const add = (x, y) => {
    return x + y;
}
add(1, 2);
document.write(add(1, 2) + '<br/>');
const add2 = (x, y) => {
    return x + y;
}

export { add2 };
document.write(add2(1, 2) + '<br/>');
/*const uppercaseString = (string) => {
    return string.toUpperCase();
}
export { uppercaseString };
//document.write(uppercaseString('Hello') + '<br/>');
const lowercaseString = (string) => {
    return string.toLowerCase()
}
export { lowercaseString };
document.write(lowercaseString('HELLO') + '<br/>');*/
//Reuse JavaScript Code Using import
document.write("Reuse JavaScript Code Using import <br/>");
/*import { add, uppercaseString, lowercaseString } from './part3.js';*/