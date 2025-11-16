/*
As an example of what we mean, let’s consider a sumOfTripledEvens function. It will:

1. Take in an array.
2. For every even number, it will triple it.
3. Then it will sum all those even numbers.

Can you think of how you could implement a function like that using pseudocode?

We need to perform an operation only on the even numbers.
We need to transform those numbers by multiplying them by 3.
Finally, we need to add the result up from the previous transformation.

*/

// made use of array methods and arrow functions
function sumOfTripleEvensA(arrayOfNumbers) {
    let newArray = arrayOfNumbers.filter((number) => number % 2 == 0)
    newArray = newArray.map(number => number * 3)
    newArray = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0,)
    return newArray
}

// model solution
function sumOfTripleEvensB(arrayOfNumbers) {
    let newArray = array
    .filter((number) => number % 2 === 0)
    .map((number) => number * 3)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return newArray
}

let array = [1,2,3,4]
let outputA = sumOfTripleEvensA(array)
let outputB = sumOfTripleEvensB(array)
console.log(outputA)
console.log(outputB)

console.log()

/*
Go to the array methods exercises at the end of the JavaScript.info array methods article and do the following exercises only:
    1. Translate border-left-width to borderLeftWidth
    2. Filter range
    3. Filter range "in place"
    4. Sort in decreasing order
    5. Copy and sort array
    6. Shuffle an array
    7. Filter unique array members
*/

/*
1. Translate border-left-width to borderLeftWidth
    Write the function camelize(str) that changes dash-separated words 
    like “my-short-string” into camel-cased “myShortString”.
    That is: removes all dashes, each word after dash becomes uppercased.
*/

function camelize(str) {
    let newStr = str.split("-") // removes dashes by removing delimiter
    .map((word, index) => (index > 0) ? word[0].toUpperCase() + word.slice(1) : word)  // capitalizes the first letter of each word (first word exclusive)
    .reduce((accumulator, newValue) => accumulator + newValue) // concatenates the words from the array into a single array
    
    return newStr
}

// MODEL SOLUTION
function camelizeMODEL(str) {
    let newStr = str.split("-") // removes dashes by removing delimiter
    .map((word, index) => (index > 0) ? word[0].toUpperCase() + word.slice(1) : word)  // capitalizes the first letter of each word (first word exclusive)
    .join('') // concatenates the words from the array into a single array
    
    return newStr
}

let result = camelize("background-color")
console.log(result)

/*
2. Filter range
Write a function filterRange(arr, a, b) that gets an array arr, 
looks for elements with values higher or equal to a and lower or equal 
to b and return a result as an array.

The function should not modify the array. It should return the new array.

*/

function filterRange(arr, a, b) {
    return arr.filter((item) => (item >= a && item <= b))
}

let arr = [5, 3, 8, 1];
let result2 = filterRange(arr, 1, 4)
console.log(result2)
console.log(arr)

/*
    3. Filter range "in place"
Write a function filterRangeInPlace(arr, a, b) that gets an array arr
and removes from it all values except those that are between a and b. 
The test is: a ≤ arr[i] ≤ b.
*/

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1); // removes the number if it isn't in the range (a,b) exclusive
            i--; // if a number is removed from the array, then the index of the rest of the numbers will
                 // (n-1), therefore we need to go back -1 to traverse all numbers in the array.
        }
    }
}

let arr3 = [5, 3, 8, 1];
filterRangeInPlace(arr3, 1, 4)
console.log(arr3)

console.log()
/*
    4. Sort in decreasing order

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10
*/

function decreasing(array) {
    array.sort((a, b) => a - b); // or can be array.sort().reverse() but maybe have a greater complexity?
}
let arr4 = [5, 2, 1, -10, 8];
decreasing(arr4)
console.log(arr4)

console.log()
/*
    5. Copy and sort array
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

function copySorted(arr) {
    let newArray = arr.slice().sort() // slice copies all the items in an array into a new one. sort will sort each strings based on their unicode
    return newArray
}

let arr5 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr5)
console.log(sorted)
console.log(arr5)

console.log()
/*
    6. Shuffle an array
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.


    first idea:
    function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
        let removedNumber = array.splice(i, 1)[0] // temporarily remove the current number
        let randomPosition = Math.floor(Math.random() * (array.length + 1)) // chooses any index between 0 and array.length
        array.splice(randomPosition, 0, removedNumber) // insert in that random index the temporarily removed number
    }
    console.log(array)
}
    cons: too complicated. upon testing the function the distribution of 'randomness' doesn't seem random and biases other permutations more than others
*/

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let randomPosition = Math.floor(Math.random() * (i + 1)); // chooses any index between 0 and array.length
        let currentPosition = i;
        [array[currentPosition], array[randomPosition]] = [array[randomPosition], array[currentPosition]]; // Fisher-Yates algorithm
    }
}
// counts of appearances for all possible permutations
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}
  
  // show counts of all possible permutations
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}

/*
    7. Filter unique array members
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:
function unique(arr) {
    }

    let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    alert( unique(strings) ); // Hare, Krishna, :-O
*/

// Approach 1: Use a for loop to iterate through each item in the argument array
function unique1(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){ // iterate through every single item in the argument array
        if (!newArray.includes(arr[i])) newArray.push(arr[i]); // if the current item is not included in the newArray, push that item.
    }
    return newArray;
}

// Approach 2: Use a for-let to iterate through the argument array
function unique2(arr) {
    let newArray = [];
    for (let item of arr) {
        if (!newArray.includes(item)) newArray.push(item);
    }
    return newArray
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique1(strings)); // Hare, Krishna, :-O

console.log(unique2(strings)); // Hare, Krishna, :-O