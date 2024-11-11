const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const backdrop = document.querySelector(".backdrop");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("block");
  nav.classList.toggle("hidden");
  backdrop.classList.toggle("hidden");
});

const arrowKeys = document.querySelectorAll(".arrow-key");

arrowKeys.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const parentDiv = e.target.closest("div");

    const featuresItems = parentDiv.querySelector(".features-items");
    const companyItems = parentDiv.querySelector(".company-items");

    if (featuresItems) {
      featuresItems.classList.toggle("hidden");
      arrow.classList.toggle("fa-chevron-down");
      arrow.classList.toggle("fa-chevron-up");
    }

    if (companyItems) {
      companyItems.classList.toggle("hidden");
      arrow.classList.toggle("fa-chevron-down");
      arrow.classList.toggle("fa-chevron-up");
    }
  });
});

const menu = document.getElementById("menu");
const closeBtn = document.querySelector(".menu-btn-close");

closeBtn.addEventListener("click", closeMenu);

function closeMenu() {
  menu.classList.add("hidden");
  backdrop.classList.toggle("hidden");
}
