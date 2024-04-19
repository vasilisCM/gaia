import loader from "./global/loader.js";
import smoothScroll from "./global/smoothScroll.js";
import stickyHeader from "./global/stickyHeader.js";
import moveUpTextByLine from "./animations/moveUpTextbyLine.js";
import moveUpOnScroll from "./animations/moveUpOnScroll.js";
import backToTop from "./global/backToTop.js";

const global = () => {
  // Loader
  const body = document.querySelector(".body");
  loader(body);

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

barba.hooks.beforeEnter(() => {
  console.log("coming...");
});

barba.hooks.beforeLeave(() => {
  console.log("leaving...");
});

barba.init({
  // debug: true,
  transitions: [
    {
      name: "general-transition",
      once: (data) => {
        console.log("init...");
        global();
      },

      leave: function (data) {
        console.log("leave init...");
      },

      enter: (data) => {
        console.log("next...");

        // Retrieve the body class from the next container, if available
        const bodyClassAttribute =
          data.next.container.getAttribute("data-body-class");
        const nextBodyClasses = bodyClassAttribute
          ? bodyClassAttribute.split(" ")
          : [];

        // Classes that should always remain on the body
        const permanentClasses = ["body"];

        // Construct the new class list for the body
        document.body.className = [
          ...permanentClasses,
          ...nextBodyClasses,
        ].join(" ");

        // Run global script
        global();

        // Load each page's script
        const namespace = data.next.namespace;
        if (namespace) loadPageScript(namespace);
        console.log("Transition to " + namespace);
      },
    },
  ],
});
