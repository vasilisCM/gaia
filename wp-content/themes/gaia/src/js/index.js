import loader from "./global/loader.js";
import smoothScroll from "./global/smoothScroll.js";
import stickyHeader from "./global/stickyHeader.js";
import moveUpTextByLine from "./animations/moveUpTextbyLine.js";
import moveUpOnScroll from "./animations/moveUpOnScroll.js";
import backToTop from "./global/backToTop.js";

const global = () => {
  // Loader
  const body = document.querySelector(".body");
  // loader(body);

  // Sticky Header
  const header = document.querySelector(".header");
  stickyHeader(header, "header--sticky");

  // Dropdown Menu
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
  moveUpTextByLine();

  // Main Grid
  const imageLarge = ".image-with-tiles";
  const imagesSmall = ".main-grid__item-image-s";
  if (imagesSmall) moveUpOnScroll(imageLarge, imagesSmall);

  // Back to Top
  const backToTopButton = document.querySelector(".back-to-top");
  backToTop(backToTopButton, "back-to-top--visible");

  /*
  // Footer Menu Items Rearrangement
  const footerMenuList = document.querySelector(".footer-menu__list");
  const footerMenuItemsExceptFirst = document.querySelectorAll(
    ".footer-menu__list > li:not(:first-child)"
  );
  const footerMenuCustomWrapper = document.createElement("div");
  footerMenuItemsExceptFirst.forEach((item) => {
    footerMenuCustomWrapper.insertAdjacentElement("beforeend", item);
  });

  footerMenuList.insertAdjacentElement("beforeend", footerMenuCustomWrapper);
*/

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
        if (namespace) {
          loadPageScript(namespace); // Ensure this is defined to load page-specific scripts
        }
        // global();

        revealPageTransitionTl.restart();
      },
    },
  ],
});
