const searchBtn = document.getElementById("search-btn");

const searchInput = document.querySelector(".search-input");

// document.querySelector('main')
const main = document.getElementById("main");

searchBtn.onclick = () => {
  searchInput.classList.toggle("active-search");
};

main.onclick = () => {
  searchInput.classList.remove("active-search");
};
