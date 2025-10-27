/*
const a = "a"
const b = "b"

if (a<b) {
    console.log(`${a} is greater than ${b}`);
}
else if (a>b){
    console.log(`${a} is less than ${b}`);
}
else {
    console.log(`${a} and ${b} are equal.` )
}

let name = "name"
console.log(name)


let chromosome = "y";

let gender = (chromosome == "x") ? "male" : "female";
console.log(`You're child is a ${gender}`)


switch(new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break
}

console.log(`The day today is ${day}`)


for (i=1; i<6; i++) {
    console.log(i)
}
console.log("happy new year!")


function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
}

checkAge(18);


function checkAge(age) {
    return (age > 18) ? True: confirm("Did parents allow you?");
}

function checkAge(age) {
    return (age > 18) || confirm("Did parents allow you?");
}


function min(a, b) {
    if (a<b) {
        return a;
    } else {
        return b;
    }
}

function min(a, b) {
    return (a<b)? a: b;
}



for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i)
}

console.log("")

for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}

console.log("")

for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}

console.log("")
let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i ++;
}




while (true) {
    let userInput = +prompt("Write a number greater than 100: ")
    if (userInput > 100 || userInput === "") break;
}
*/

/**
 * 
 * An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.

 */

function checkPrimeNumbers(number) {
    if (number <= 1) return;
    let outputString = ``;
    outer: for (let i = 2; i <= number; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) continue outer;
      }
      outputString += `${i}, `;
    }
    return outputString;
  }

console.log(checkPrimeNumbers(10))