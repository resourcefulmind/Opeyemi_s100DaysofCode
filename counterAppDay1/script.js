//create variables that will target different elements on the dom
// for event delegation
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        count.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains("subtract")) {
        count.innerHTML--;
        setColor();
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setColor();
    }
});

//To change the color of the results of the counts to red if the count is negative, white in neutral and green in positive
function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    } else if (count.innerHTML < 0) {
        count.style.color = "#ffa751";
    } else {
        count.style.color = "#fff";
    }
};



