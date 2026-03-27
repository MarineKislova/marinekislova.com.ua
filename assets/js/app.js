import * as commonFunctions from "./modules/functions.js";

commonFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  //меню
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
  const mobileMenuLinks = mobileMenu.querySelectorAll('a[href*="#"]');

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

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Проверяем, что ссылка ведет на текущую страницу (якорь)
      const href = link.getAttribute("href");

      // Если это просто ссылка на другую страницу, меню закроется само при переходе.
      // Если это якорь (например, /#contact или #process):
      if (href.includes("#")) {
        closeBurgerMenu();
      }
    });
  });

  // Выносим логику закрытия в отдельную функцию, чтобы не дублировать код
  function closeBurgerMenu() {
    burger.classList.remove("active");
    burger.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
    document.body.classList.remove("menu-open");
  }

  //модальное окно для связи из header
  const openModalBtn = document.querySelectorAll(".open-modal");
  const modal = document.getElementById("contact-modal");
  const closeBtn = modal.querySelector(".modal__close");
  const overlay = modal.querySelector(".modal__overlay");

  function openModal() {
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  openModalBtn.forEach((item) => {
    item.addEventListener("click", openModal);
  });
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
