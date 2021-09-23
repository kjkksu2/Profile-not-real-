// Header Background
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  header.classList.toggle("active", window.scrollY > 50);
});

// Home Content
const homeContent = document.querySelector(".home__content");

window.addEventListener("scroll", () => {
  homeContent.style.transform = "translateY(" + 0.5 * window.scrollY + "px)";
});
