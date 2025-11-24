// JS file
// Method 2
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World (2)");

// Method 3
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    alert("Hello World (3)");
});

// Method 1 (Named Function Use Case)

const alertFunction = function(){
    alert("YAY! YOU DID IT!");
}

// Method 2 (Named Function Use Case)
const btnNamedFunction2 = document.querySelector("#btnNamedFunction2");
btnNamedFunction2.onclick = alertFunction;

// Method 3 (Named Function Use Case)
const btnNamedFunction3 = document.querySelector("#btnNamedFunction3");
btnNamedFunction3.addEventListener("click", alertFunction);

btn2.addEventListener("click", function (e){
    console.log(e.target.style.background = "blue");
})



// attaching listeners to groups of nodes...
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each node
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})