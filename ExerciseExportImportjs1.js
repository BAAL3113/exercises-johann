//Use export to Share a Code Block
document.write("Use export to Share a Code Block");
export const add = (x, y) => {
    return x + y;
}
const add2 = (x, y) => {
    return x + y;
}
add2(1, 2);
document.write(add2(1, 2) + '<br>');
export { add2 };

const add3 = (x, y) => {
    let z = x + y;
    return z;
}
add3(1, 2);
document.write(add3(1, 2) + '<br>');


export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}