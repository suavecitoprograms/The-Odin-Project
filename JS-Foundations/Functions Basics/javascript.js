/*
For now, just write each function and test the output with console.log.
*/

// Write a function called add7 that takes one number and returns that number + 7.
// add7(10) should return 17

function add7(number) {
    return number + 7;
} // or can be rewritten as:
console.log(add7(10))

add7 = number => number + 7;
console.log(add7(10))


// Write a function called multiply that takes 2 numbers and returns their product.
// multiply(3, 2) should return 6

function multiply(a, b) {
    return a*b;
} // or can be written as:
console.log(multiply(3, 2))

const multiplyShortened = (a,b) => a*b;
console.log(multiplyShortened(3, 2))

//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// capitalize("abcd") should return "Abcd"
// capitalize("ABCD") should return "Abcd"
// capitalize("aBcD") should return "Abcd"
function capitalize(string) {
    if (string.length > 0) {
        return string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase();
    }
} // or can be written as
console.log(capitalize("abcd"))
console.log(capitalize("ABCD"))
console.log(capitalize("aBcD"))

const capitalizeShortened = (string) => (string.length >0) ? string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase(): null; 
console.log(capitalizeShortened("abcd"))
console.log(capitalizeShortened("ABCD"))
console.log(capitalizeShortened("aBcD"))

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"
function lastLetter(string) {
    if (string.length > 0) {
        return string.slice(-1)
    }
} // or can be rewritten as
console.log(lastLetter("abcd"))

const lastLetterShortened = (string) => (string.length > 0) ? string.slice(-1): null;
console.log(lastLetter("abcd"))