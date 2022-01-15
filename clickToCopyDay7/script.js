//declare all variables
const btn = document.querySelector(".btn");
const discountCode = document.querySelector(".discount");
//initialize the es6 function that will copy the text
const copyDiscountCode = (e) => {
    //prevent click from reloading as button is inside form or disable onSubmit in html
    e.preventDefault();
    //select the discount code from the input
    discountCode.select();
    //set the selection range
    discountCode.setSelectionRange(0, 9999);
    //execute the copy command
    navigator.clipboard.writeText(discountCode.value);
    //change the content of the button to the current state of copied
    btn.textContent = "Copied!!!"
    //create a timeout for the new content to display on the button and change back to the old content after a short period of time
    setTimeout(() => {
        btn.textContent = "Copy";
    }, 4000);
};

//add event listener
btn.addEventListener("click", copyDiscountCode);