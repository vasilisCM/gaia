import loader from "./global/loader.js";
import smoothScroll from "./global/smoothScroll.js";
import stickyHeader from "./global/stickyHeader.js";
import moveUpTextByLine from "./animations/moveUpTextbyLine.js";
import moveUpOnScroll from "./animations/moveUpOnScroll.js";
import backToTop from "./global/backToTop.js";

// Loader
const body = document.querySelector(".body");
loader(body);

// Sticky Header
const header = document.querySelector(".header");
stickyHeader(header, "header--sticky");

// Dropdown Menu
const menuItemWithChildren = document.querySelector(".menu-item-has-children");
const dropdownMenu = document.querySelector(".sub-menu");
const dropdownBackground = document.querySelector(
  ".main-menu__dropdown-background"
);

header.addEventListener("mouseover", (e) => {
  let dropdownItem = header.querySelector(".menu-item-has-children a");
  if (e.target === dropdownItem) {
    header.classList.add("header--dropdown");
    dropdownBackground.classList.add("main-menu__dropdown-background--open");
    setTimeout(() => {
      dropdownMenu.classList.add("dropdown--open");
    }, "600");
  }
});

header.addEventListener("mouseout", (e) => {
  let dropdownItem = header.querySelector(".menu-item-has-children a");
  if (e.target === dropdownItem) {
    dropdownMenu.classList.remove("dropdown--open");

    setTimeout(() => {
      dropdownBackground.classList.remove(
        "main-menu__dropdown-background--open"
      );
      header.classList.remove("header--dropdown");
    }, "300");
  }
});

// Hero Text Animation
console.log(document.querySelector("[animate]"));
moveUpTextByLine();

// Main Grid
const imageLarge = ".image-with-tiles";
const imagesSmall = ".main-grid__item-image-s";
if (imagesSmall) moveUpOnScroll(imageLarge, imagesSmall);

const backToTopButton = document.querySelector(".back-to-top");
backToTop(backToTopButton, "back-to-top--visible");

const footerMenuList = document.querySelector(".footer-menu__list");
const footerMenuItemsExceptFirst = document.querySelectorAll(
  ".footer-menu__list > li:not(:first-child)"
);
const footerMenuCustomWrapper = document.createElement("div");
footerMenuItemsExceptFirst.forEach((item) => {
  footerMenuCustomWrapper.insertAdjacentElement("beforeend", item);
});

footerMenuList.insertAdjacentElement("beforeend", footerMenuCustomWrapper);

console.log("JavaScript");
