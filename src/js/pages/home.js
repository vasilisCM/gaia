import customCursor from "../logic/customCursor.js";
import carousel from "../logic/carousel.js";
import carouselFullScreen from "../logic/carouselFullScreen.js";
import CarouselGlide from "../logic/carouselGlide.js";

const home = () => {
  console.log("Hello from home");

  // Carousel
  const carouselElement = document.querySelector(".carousel");
  const carouselContainer = document.querySelector(".carousel__container");
  const carouselTrack = document.querySelector(".carousel__track");

  const carouselActive = !carouselElement.classList.contains("carousel--not-active");

  if (carouselActive) {
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
  }

  // Testimonial Carousel
  const testimonialCarousel = new CarouselGlide(
    ".carousel-glide",
    ".carousel-glide .carousel-glide__slide",
    1, 1, 1,
    ".carousel-glide__button--previous",
    ".carousel-glide__button--next",
    "carousel-glide__dots",
    "carousel-glide__dot"
  );
  testimonialCarousel.init();

  const testimonialSlides = document.querySelectorAll(".carousel-glide__slide");

  testimonialSlides.forEach((slide) => {
    const textElement = slide.querySelector(".carousel-glide__text");
    const toggleElement = slide.querySelector(".carousel-glide__toggle");

    if (!textElement || !toggleElement) {
      return;
    }

    toggleElement.addEventListener("click", () => {
      const isExpanded = textElement.getAttribute("data-expanded") === "1";
      const fullText = textElement.getAttribute("data-full-text");
      const shortText = textElement.getAttribute("data-short-text");

      if (!fullText || !shortText) {
        return;
      }

      if (isExpanded) {
        textElement.textContent = shortText;
        textElement.setAttribute("data-expanded", "0");
        toggleElement.textContent = "show more";
      } else {
        textElement.textContent = fullText;
        textElement.setAttribute("data-expanded", "1");
        toggleElement.textContent = "show less";
      }
    });
  });

  // Custom Cursor
  const cursorDrag = document.querySelector(".cursor");
  customCursor(cursorDrag);

  if (carouselActive) {
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
  }
};

home();

export default home;
