const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
    // Generate number between 1 and 10
    //First the math.random will generate a number and when it is multiplied by 10, it will make it a whole number. However it still won't give a value up to 10 so add 1 to it and then math.floor to round it up to the nearest integer or whole number
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = randomNumber;
};

btn.addEventListener("click", generateNumber);



