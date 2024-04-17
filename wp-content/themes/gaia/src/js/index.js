import loader from "./global/loader.js";
import smoothScroll from "./global/smoothScroll.js";
import stickyHeader from "./global/stickyHeader.js";
import moveUpOnScroll from "./animations/moveUpOnScroll.js";
import backToTop from "./global/backToTop.js";

const body = document.querySelector(".body");
loader(body);

const header = document.querySelector(".header");
stickyHeader(header, "header--sticky");

// Main Grid
const imageLarge = document.querySelector(".main-grid__item-image-container");
const imagesSmall = document.querySelectorAll(".main-grid__item-image-s");
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
