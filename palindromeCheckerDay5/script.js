// Having read some articles and discovered what a palindrome really is, I discovered that the logical thing to do is to check if a string is a palindrome — ignoring punctuation, case and spacing. A palindrome is a word that can be spelt the same way forwards or backwards

const btn = document.querySelector(".btn"); //target the button
const result = document.querySelector(".result"); //target the result to be displayed after the word has been checked

btn.addEventListener("click", palindrome);


function palindrome() {
    //declare a variable "checkWord" and assign the queryselector that checks the value of the targeted class 
    const checkWord = document.querySelector(".input-text").value;
    //Since the palindrome can either have even or odd characters, divide the word into two equal parts whether they are even or odd
    let wordLength = checkWord.length;

    //take out first half of the word
    let startWord = checkWord.substring(0, Math.floor(wordLength / 2)).toLowerCase();
    //Do same for second half of word
    let endWord = checkWord.substring(wordLength - Math.floor(wordLength / 2)).toLowerCase();

    //second half will look the same as first half if reversed
    let flipping = [...endWord].reverse().join("");

    if (startWord == flipping) {
        result.innerHTML = `${checkWord} is a palindrome`;
    } else {
        result.innerHTML =  `${checkWord} is NOT a palindrome`;
    }
}