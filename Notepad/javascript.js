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

let name = "reniel"
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

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed!",
    () => alert("You cancelled execution!")
  );

  // replacing to arrow functions

