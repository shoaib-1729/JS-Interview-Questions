const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const link = document.querySelector("#div2 a")

// Adding event listeners to all the elements

function firstDiv() {
    console.log("One clicked.");
}

function secondDiv(e) {
    console.log("Two clicked.");
    // prevents the event to propagate further
    // e.stopPropagation()
}

function thirdDiv() {
    console.log("Three clicked.");
}

function forthDiv() {
    console.log("Four clicked.");
}

function handleLink(e) {
    // prevents the default action
    e.preventDefault();
    // e.stopPropagation();
}

// Bubbling phase (default: bottom to top, that is event propagates from child to parent)
div1.addEventListener("click", firstDiv, false);
div2.addEventListener("click", secondDiv, false);
div3.addEventListener("click", thirdDiv, false);
div4.addEventListener("click", forthDiv, false);
link.addEventListener("click", handleLink, false);


// Capturing phase (set manually : top to bottom, that is event propagates from parent to child)
// div1.addEventListener("click", firstDiv, true);
// div2.addEventListener("click", secondDiv, true);
// div3.addEventListener("click", thirdDiv, true);
// div4.addEventListener("click", forthDiv, true);
// link.addEventListener("click", handleLink, true);