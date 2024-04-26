import loader from "./global/loader.js";
import lenis from "./global/smoothScroll.js";
import stickyHeader from "./global/stickyHeader.js";
import moveUpTextByLine from "./animations/moveUpTextbyLine.js";
import clipPathTextByWord from "./animations/clipPathTextByWord.js";
import moveUpOnScroll from "./animations/moveUpOnScroll.js";
import accordion from "./logic/accordion.js";
import backToTop from "./global/backToTop.js";
import carouselFullScreen from "./logic/carouselFullScreen.js";

const global = () => {
  // Loader
  const body = document.querySelector(".body");
  // loader(body);

  // Go to Top of the Page
  lenis.scrollTo(0, {
    duration: 0,
  });

  // Sticky Header
  const header = document.querySelector(".header");
  stickyHeader(header, "header--sticky");

  const mm = gsap.matchMedia();

  // Dropdown Menu
  header.classList.remove("header--dropdown"); // Reset Header State
  const dropdownMenu = document.querySelector(".sub-menu");
  const dropdownBackground = document.querySelector(
    ".main-menu__dropdown-background"
  );

  // Dropdown Timeline

  mm.add("(min-width: 991px)", () => {
    const dropdownTl = gsap.timeline({
      paused: true,
      onStart: () => header.classList.add("header--dropdown"),
      onReverseComplete: () => header.classList.remove("header--dropdown"),
    });
    dropdownTl
      .fromTo(
        dropdownBackground,
        {
          visibility: "hidden",
          opacity: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },
        {
          visibility: "visible",
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }
      )
      .fromTo(
        dropdownMenu,
        {
          visibility: "hidden",
          opacity: 0,
        },
        {
          visibility: "visible",
          opacity: 1,
        }
      );

    // Interaction to Open Dropdown
    header.addEventListener("mouseover", (e) => {
      let dropdownItem = header.querySelector(".menu-item-has-children > a");

      if (e.target === dropdownItem) {
        dropdownTl.play();
      }
    });

    // Interaction to Close Dropdown
    const main = document.querySelector("main");
    main.addEventListener("click", (e) => {
      dropdownTl.reverse();
    });

    main.addEventListener("wheel", (e) => {
      dropdownTl.reverse();
    });
  });

  // Mobile Menu

  // Move All into one Menu List

  mm.add("(max-width: 991px)", () => {
    const mainMenuList1 = document.querySelector(
      ".main-menu--1 .main-menu__list"
    );
    const mainMenuList2 = document.querySelector(
      ".main-menu--2 .main-menu__list"
    );
    mainMenuList2.querySelectorAll("li").forEach((item) => {
      mainMenuList1.insertAdjacentElement("beforeend", item);
    });
  });

  // Hero Text Animation
  moveUpTextByLine();
  // clipPathTextByWord();

  // Main Grid
  const imageLarge = ".image-with-tiles";
  const imagesSmall = ".main-grid__item-image-s";
  if (imagesSmall) moveUpOnScroll(imageLarge, imagesSmall);

  // FAQ
  accordion(".faq-accordion__item", ".faq-accordion__content");

  // Back to Top
  const backToTopButton = document.querySelector(".back-to-top");
  backToTop(backToTopButton, "back-to-top--visible");

  console.log("Global JavaScript");
};

// Page Transition
const loadPageScript = (namespace) => {
  const siteName = "gaiaexclusiveretreats.com";
  const themeName = "gaia";
  let url = window.location.origin;

  // Check if we are in XAMPP environment
  if (window.location.href.includes("localhost")) {
    console.log("We are in XAMPP environment");

    // Remove "localhost" from the URL
    url += `/${siteName}`;
  }

  const scriptsDir = `wp-content/themes/${themeName}/src/js`;
  const scriptUrl = `${url}/${scriptsDir}/${namespace}.bundle.js`;

  // Create a <script> element with the desired JS file as its "src" and append it to the <body>
  const script = document.createElement("script");
  script.src = scriptUrl;
  script.async = true;
  document.body.appendChild(script);
};

const revealPageTransitionTl = gsap.timeline({
  paused: true,
  onStart: () => {
    console.log("Revealing");
    global();
  },
  // onComplete: global,
});

const hidePageTransitionTl = gsap.timeline({
  paused: true,
});

hidePageTransitionTl.fromTo(
  ".page-transition",
  {
    opacity: 0,
  },
  {
    duration: 1,
    opacity: 1,
  }
);

revealPageTransitionTl.fromTo(
  ".page-transition",
  {
    opacity: 1,
  },
  {
    duration: 1,
    opacity: 0,
    delay: 0.5,
  }
);

barba.init({
  transitions: [
    {
      name: "fade-transition",
      once(data) {
        // Initial load animation
        revealPageTransitionTl.play();
      },
      leave(data) {
        const done = this.async(); // Get the async completion function
        hidePageTransitionTl.restart();
        hidePageTransitionTl.eventCallback("onComplete", () => {
          revealPageTransitionTl.play();
          done(); // Call done when the hide transition is complete
        });
      },
      enter(data) {
        console.log("Switching to new page content...");

        // Apply new body class from next container
        const bodyClassAttribute =
          data.next.container.getAttribute("data-body-class");
        const nextBodyClasses = bodyClassAttribute
          ? bodyClassAttribute.split(" ")
          : [];
        document.body.className = ["body", ...nextBodyClasses].join(" ");

        // Reinitialize scripts or global functions
        const namespace = data.next.namespace;
        console.log(namespace);
        if (namespace) {
          loadPageScript(namespace); // Ensure this is defined to load page-specific scripts
        }
        // global();

        revealPageTransitionTl.restart();
      },
    },
  ],
});
