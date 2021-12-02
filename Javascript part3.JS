//Use export to Share a Code Block
document.write("Use export to Share a Code Block");
export const add = (x, y) => {
    return x + y;
}
const add = (x, y) => {
    return x + y;
}

export { add };

const uppercaseString = (string) => {
    return string.toUpperCase();
}
export { uppercaseString };

const lowercaseString = (string) => {
    return string.toLowerCase()
}
export { lowercaseString };
//Reuse JavaScript Code Using import
document.write("Reuse JavaScript Code Using import");
/*import { add, uppercaseString, lowercaseString } from './part3.js';*/