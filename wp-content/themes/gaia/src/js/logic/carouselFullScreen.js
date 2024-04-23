const carouselFullScreen = (
  selector,
  slideSelector,
  visibleDesktop = 4,
  visibleTablet = 2,
  visibleMobile = 1,
  previousButton,
  nextButton,
  dotClass,
  autoplay = false
) => {
  console.log("fulll");
  // Dynamic generation of bullets
  const bulletsContainer = document.querySelector(
    `${selector} .carousel__dots`
  );

  if (bulletsContainer) {
    const totalSlides = document.querySelectorAll(
      `${selector} ${slideSelector}`
    ).length;

    for (let i = 0; i < totalSlides; i++) {
      const bullet = document.createElement("div");
      bullet.classList.add(dotClass);
      bullet.dataset.glideDir = `=${i}`;
      bulletsContainer.appendChild(bullet);
    }
  }

  const glideOptions = {
    perView: visibleDesktop,
    type: "carousel",
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    gap: 200,
    peek: {
      before: 0,
      after: 250,
    },
    breakpoints: {
      991: { perView: visibleTablet },
      767: { perView: visibleMobile },
    },
  };

  if (autoplay) {
    glideOptions.autoplay = 2500; // Change the autoplay interval as needed
  }

  const glide = new Glide(selector, glideOptions).mount();

  if (previousButton) {
    previousButton.addEventListener("click", () => {
      glide.go("<");
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      glide.go(">");
    });
  }
};

export default carouselFullScreen;
