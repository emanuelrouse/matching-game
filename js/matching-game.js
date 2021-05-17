'use strict'

// Global Variables
let numberOfFaces = 5;
const theLeftSide = document.querySelector('#left-side');

// Event Listeners
window.addEventListener("load", generateFaces);

function generateFaces() {
    // generate faces using a for loop
    for (let i = 0; i < numberOfFaces; i++) {
        const face = document.createElement("img");
        const randomTop = Math.floor(Math.random() * 400) + 1;
        const randomLeft = Math.floor(Math.random() * 400) + 1;

        face.src = ("images/smile.png");
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';

        theLeftSide.appendChild(face);
    }
}

