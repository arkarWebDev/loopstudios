let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");

hamburger.addEventListener("click", showMenu);

function showMenu() {
  hamburger.classList.toggle("open");
  menu.classList.toggle("hidden");
}
