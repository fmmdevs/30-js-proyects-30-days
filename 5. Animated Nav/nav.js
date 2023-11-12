const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active-element");

menuToggle.addEventListener("click", () => {
  for (let active = 0; active < activeElements.length; active++) {
    activeElements[active].classList.toggle("active");
  }

  console.log(menuToggle.childNodes);
  console.log(menuToggle.childNodes[1]);
  // otra forma de seleccionar elementos
  const navBtnIcon = menuToggle.childNodes[1];
  navBtnIcon.classList.toggle("fa-times");

  const pageBg = document.querySelector(".main-container");

  if (navBtnIcon.classList.contains("fa-times")) {
    pageBg.style.filter = "blur(3px)";
  } else {
    setTimeout(function () {
      pageBg.style.filter = "blur(0)";
    }, 500);
  }

  const listItems = document.querySelectorAll(".main-nav-list a");
  listItems.forEach(function (item, index) {
    // console.log(index);
    // console.log((item.style.transition = `all. 5s linear ${index * 0.3}s`));
    item.style.transition = `all. 5s linear ${index * 0.3}s`;
  });
});
