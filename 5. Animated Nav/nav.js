const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active-element");

menuToggle.addEventListener("click", () => {
  for (let active = 0; active < activeElements.length; active++) {
    activeElements[active].classList.toggle("active");
  }
  console.log("yes");
});
