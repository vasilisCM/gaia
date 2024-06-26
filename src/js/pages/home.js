import customCursor from "../logic/customCursor.js";
import carousel from "../logic/carousel.js";
import carouselFullScreen from "../logic/carouselFullScreen.js";

const home = () => {
  console.log("Hello from home");

  // Carousel
  const carouselElement = document.querySelector(".carousel");
  const carouselContainer = document.querySelector(".carousel__container");
  const carouselTrack = document.querySelector(".carousel__track");

  const mm = gsap.matchMedia();

  mm.add("(max-width: 991px)", () => {
    carousel(carouselContainer, carouselTrack, ".carousel__item", 7);
  });

  mm.add("(min-width: 991px)", () => {
    carousel(carouselContainer, carouselTrack, ".carousel__item", 2);
  });

  mm.add("(min-width: 2220px)", () => {
    carousel(carouselContainer, carouselTrack, ".carousel__item", 0.1);
  });

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
