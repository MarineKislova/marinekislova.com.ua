import * as commonFunctions from "./modules/functions.js";

commonFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const menuItem = document.querySelector(".menu-item-has-children");
  const menuButton = menuItem?.querySelector(".menu-link");
  const megaMenu = document.getElementById("mega-menu-services");

  if (!menuItem || !menuButton || !megaMenu) return;

  function openMenu() {
    megaMenu.hidden = false;
    menuButton.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    megaMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  }

  // --- HOVER (desktop) ---
  menuItem.addEventListener("mouseenter", openMenu);
  menuItem.addEventListener("mouseleave", closeMenu);

  // --- CLICK ---
  menuButton.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // --- Клик вне ---
  document.addEventListener("click", function (e) {
    if (!menuItem.contains(e.target)) {
      closeMenu();
    }
  });

  // --- ESC ---
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  // бургер меню
  const burger = document.querySelector(".burger");
  const mobileMenu = document.getElementById("mobile-menu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    const isOpen = burger.getAttribute("aria-expanded") === "true";

    burger.setAttribute("aria-expanded", !isOpen);
    mobileMenu.hidden = isOpen;

    document.body.classList.toggle("menu-open");
  });

  //для аккордеона бургер меню
  const submenuToggle = document.querySelector(".submenu-toggle");
  const submenu = document.querySelector(".submenu");

  submenuToggle.addEventListener("click", () => {
    const isOpen = submenuToggle.getAttribute("aria-expanded") === "true";

    submenuToggle.setAttribute("aria-expanded", !isOpen);
    submenu.hidden = isOpen;
  });
});
