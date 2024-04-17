import moveUpOnScroll from "../animations/moveUpOnScroll.js";
import carousel from "../logic/carousel.js";
import customCursor from "../logic/customCursor.js";

const home = () => {
  console.log("Hello from home");

  const imageLarge = document.querySelector(".main-grid__item-image-container");
  const imagesSmall = document.querySelectorAll(".main-grid__item-image-s");

  moveUpOnScroll(imageLarge, imagesSmall);

  // Carousel
  const carouselElement = document.querySelector(".carousel");
  const carouselContainer = document.querySelector(".carousel__container");
  const carouselTrack = document.querySelector(".carousel__track");
  carousel(carouselContainer, carouselTrack, ".carousel__item");

  // Custom Cursor
  const cursorDrag = document.querySelector(".cursor");
  customCursor(cursorDrag);

  // Hover
  carouselElement.addEventListener("mouseover", () => {
    cursorDrag.classList.add("cursor--active");
  });

  // Click
  carouselElement.addEventListener("mousedown", () => {
    cursorDrag.classList.add("cursor--clicked");

    gsap.to(cursorDrag, {
      scale: 0.9,
    });
  });

  // Unclick
  carouselElement.addEventListener("mouseup", () => {
    cursorDrag.classList.remove("cursor--clicked");
    gsap.to(cursorDrag, {
      scale: 1,
    });
  });

  // Leave
  carouselElement.addEventListener("mouseout", () => {
    cursorDrag.classList.remove("cursor--active");
    cursorDrag.classList.remove("cursor--clicked");
  });
};

home();

export default home;
