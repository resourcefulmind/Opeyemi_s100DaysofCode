//Declare variables
const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const close = document.querySelector(".close");

//Add a listener to the button first as that is what the user will interact with first
btn.addEventListener("click", openModal);
//Add another listener for the close icon on the far right
close.addEventListener("click", closeModal);
//Add listener for the modal
modal.addEventListener("click", closeModal);

// For Open Modal, we prevent the form from refreshing by using the e.prevent method
function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}
//Close Modal
function closeModal() {
    modal.style.display = "none";
}


