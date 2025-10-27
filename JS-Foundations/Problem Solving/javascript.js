/*
Solving Fizz Buzz

To demonstrate this workflow in action, let’s solve Fizz Buzz
Understanding the problem

    Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 
    However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
    For numbers which are multiples of both three and five print FizzBuzz.

This is the big picture problem we will be solving. But we can always make it clearer by rewording it.

PSEUDOCODE:
    1. Write a program that allows the user to enter a number, 
    2. print each number between one and the number the user entered, 
        a. but for numbers that divide by 3 without a remainder print Fizz instead. 
        b. For numbers that divide by 5 without a remainder print Buzz 
        c. and finally for numbers that divide by both 3 and 5 without a remainder print FizzBuzz.

    When a user inputs a number
    Loop from 1 to the entered number
    If the current number is divisible by 3 then print "Fizz"
    If the current number is divisible by 5 then print "Buzz"
    If the current number is divisible by 3 and 5 then print "FizzBuzz"
    Otherwise print the current numbera
*/

// 1. When a user inputs a number...
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// 2. Loop from 1 to the entered number
for (let i = 1; i <= answer; i++) {
    // 5. If the current number is divisible by 3 and 5 then print "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) { // 3. If the current number is divisible by 3 then print "Fizz"
        console.log("Fizz")
    } else if (i % 5 === 0) { // 4.  If the current number is divisible by 5 then print "Buzz"
        console.log("Buzz")
    } else {
        console.log(i)
    }
}