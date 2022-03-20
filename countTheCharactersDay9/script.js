// The task here is to for the app to be able to increment character count as an input is entered into the placeholder.

// initialize variables
// create a variable to reference the input
const input = document.querySelector("input");
//create a variable to reference the span element that keeps track of the character count
const count = document.querySelector(".count");
//create a variable to reference the span element for word
const wordCount = document.querySelector("#word-count"); 

//create a function to get the word count
function getWordCount (input) {
    //remove the whitespace from whatever value is input
    let value = input.value.trim();
    //if it's an empty string, return zero
    if (!value) return 0;
    // Otherwise, return the word count
    return value.split(/\s+/).length;
}

//to keep track of what is entered and have it displayed, all that is needed is to keep track of the length of the input.
function getCharacterCount () {
    count.innerHTML = input.value.length;
}

function updateCounts () {
    wordCount.textContent = getWordCount(this);
    getCharacterCount();
}

input.addEventListener("keyup", updateCounts);
