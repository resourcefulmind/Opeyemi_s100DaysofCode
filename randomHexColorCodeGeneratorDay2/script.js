// // The task is to be able to generate random color codes every time the "generate button is clicked" and also set the color a the background color whenever the button is clicked
// // hex color codes usually contain a mix of 6 digits and letters

// //generate a set of random numbers with the math.random method 
// let color = Math.random();
// //convert the random number generated to string so we can have the numbers run to base 16
// color = Math.random().toString(16);
// //use substring on the result to get the 6 digits you need starting from after the decimal
// color = Math.random().toString(16).substring(2, 8);

// console.log(color);


const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");


const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    //add the hex color and change the background
    document.body.style.background = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateColor);