const hambuger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListiner("click", () => {
  navMenu.classList.toggle("active");
});
