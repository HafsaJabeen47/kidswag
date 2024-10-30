// Get modal element
const modal = document.getElementById("myModal");
// Get button that opens the modal
const openModalBtn = document.getElementById("openModalBtn");
// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".close-btn");

// When the user clicks the button, open the modal
openModalBtn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
