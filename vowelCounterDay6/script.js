//A word will be in entered and checked for the number of vowels it has.
const checkWord = document.querySelector(".input-text");
const btn = document.querySelector(".btn"); //target the button
const result = document.querySelector(".result"); //target the result to be displayed after the word has been checked

btn.addEventListener("click", vowelCount);


function vowelCount() {
    //create a variable to store the number of vowels in the word
    let wordVowelCount = 0;
    //create another variable that will convert the word input to lowercase
    let wordInput = checkWord.value.toLowerCase();
    //loop through the lowercase word and increment the variable that stores the number of vowels
    for (let i = 0; i < wordInput.length; i++) {
        //create a variable to store each of the letters of the word being iterated 
        let letter = wordInput[i];
        //and use regex to check if the letters match the vowels of the alphabet and increase the wordVowelCount count if it does match
        if (letter.match(/([a,e,i,o,u])/)) {
            wordVowelCount++;
        }
    }
    //add the result to the display
    result.innerHTML = `${checkWord.value.toUpperCase()} has ${wordVowelCount} vowels`;

}