const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const yearTarget = document.querySelector("[data-year]");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.dataset.open === "true";
    nav.dataset.open = String(!isOpen);
    menuButton.setAttribute("aria-expanded", String(!isOpen));
  });
}

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear().toString();
}
