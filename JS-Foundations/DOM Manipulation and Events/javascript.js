/*
    Copy the example above into files on your own computer. To make it work, you’ll need to supply the rest of the HTML skeleton and either link your JavaScript file or put the JavaScript into a script tag on the page. Make sure everything is working before moving on!

    Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

    a <p> with red text that says “Hey I’m red!” - Completed
    an <h3> with blue text that says “I’m a blue h3!” - Completed
    a <div> with a black border and pink background color with the following elements inside of it:
        another <h1> that says “I’m in a div”
        a <p> that says “ME TOO!”
    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

*/
// JAVASCRIPT FILE

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// exercise section:
    // a <p> with red text that says “Hey I’m red!”
const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I’m red!";
redParagraph.style.color = "red";
container.appendChild(redParagraph);

    // an <h3> with blue text that says “I’m a blue h3!”
const blueHeader3 = document.createElement("h3");
blueHeader3.textContent = "I'm a blue h3!";
blueHeader3.style.color = "blue";
container.appendChild(blueHeader3);

    // a <div> with a black border and pink background color with the following elements inside of it:
const pinkDiv = document.createElement("div");
pinkDiv.style.border = "1px solid black";
pinkDiv.style.backgroundColor = "pink";
        // another <h1> that says “I’m in a div”
const blackHeader1 = document.createElement("h1");
blackHeader1.textContent = "I'm in a div";
pinkDiv.appendChild(blackHeader1);
        // a <p> that says “ME TOO!”
const blackParagraph = document.createElement("p");
blackParagraph.textContent = "ME TOO!";
pinkDiv.appendChild(blackParagraph);

// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
container.appendChild(pinkDiv);

