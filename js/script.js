// Opens and closes the menu on small screens
const toggle = document.getElementById("menuToggle");
const links = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});
