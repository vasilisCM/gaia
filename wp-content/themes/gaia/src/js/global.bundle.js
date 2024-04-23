/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animations/moveUpOnScroll.js":
/*!*********************************************!*\
  !*** ./src/js/animations/moveUpOnScroll.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Animation on Scroll (Now it works only for one section)\r\nconst moveUpOnScroll = (trigger, item) => {\r\n  const tl = gsap.timeline();\r\n\r\n  document.querySelectorAll(trigger).forEach((triggerElement) => {\r\n    // .closest(\"div\") should be refactored\r\n    tl.fromTo(\r\n      triggerElement.closest(\"div\").querySelectorAll(item),\r\n      { y: 0 },\r\n\r\n      {\r\n        y: -50,\r\n        scrollTrigger: {\r\n          trigger: triggerElement,\r\n          // markers: true,\r\n          start: \"top center\",\r\n          end: \"bottom center\",\r\n          ease: \"power4.out\",\r\n          scrub: 1,\r\n        },\r\n      }\r\n    );\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moveUpOnScroll);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/animations/moveUpOnScroll.js?");

/***/ }),

/***/ "./src/js/animations/moveUpTextbyLine.js":
/*!***********************************************!*\
  !*** ./src/js/animations/moveUpTextbyLine.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst moveUpTextByLine = () => {\r\n  let typeSplit = new SplitType(\"[animate]\", {\r\n    types: \"lines, words, chars\",\r\n    tagName: \"span\",\r\n  });\r\n  gsap.from(\"[animate] .line\", {\r\n    y: \"100%\",\r\n    opacity: 0,\r\n    duration: 1.5,\r\n    stagger: 0.3,\r\n    // ease: \"power1.out\",\r\n    ease: \"power4.out\",\r\n    delay: 0.2,\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moveUpTextByLine);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/animations/moveUpTextbyLine.js?");

/***/ }),

/***/ "./src/js/global/backToTop.js":
/*!************************************!*\
  !*** ./src/js/global/backToTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst backToTop = function (button, className) {\r\n  // Back to Top\r\n\r\n  window.addEventListener(\"scroll\", function () {\r\n    if (window.pageYOffset > 100) {\r\n      button.classList.add(`${className}`);\r\n    } else {\r\n      button.classList.remove(`${className}`);\r\n    }\r\n  });\r\n\r\n  button.addEventListener(\"click\", function (e) {\r\n    e.preventDefault();\r\n    window.scrollTo({\r\n      top: 0,\r\n      behavior: \"smooth\",\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backToTop);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/global/backToTop.js?");

/***/ }),

/***/ "./src/js/global/loader.js":
/*!*********************************!*\
  !*** ./src/js/global/loader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loader = (body) => {\r\n  const imgLoad = imagesLoaded(body);\r\n\r\n  // Loader Timeline - Waiting for Assets to load\r\n  const loadingTl = gsap.timeline();\r\n  loadingTl.to(\".loader__spinner\", {\r\n    rotate: \"360deg\",\r\n    duration: 1.3,\r\n    ease: \"none\",\r\n    repeat: -1,\r\n  });\r\n\r\n  // Page Reveal Timeline - Runs the Router\r\n  const pageRevealTl = gsap.timeline({\r\n    paused: true,\r\n    // onComplete: () => router(siteName),\r\n  });\r\n  pageRevealTl\r\n    .to(\".loader\", {\r\n      opacity: 0,\r\n    })\r\n    .to(\".loader\", { display: \"none\" }, \"<1\");\r\n\r\n  // ImagesLoaded\r\n  imgLoad.on(\"done\", () => {\r\n    // console.log(\"Done\");\r\n    pageRevealTl.play();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/global/loader.js?");

/***/ }),

/***/ "./src/js/global/smoothScroll.js":
/*!***************************************!*\
  !*** ./src/js/global/smoothScroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Smooth Scroll (Lenis)\r\nconst lenis = new Lenis({\r\n  duration: 1.2,\r\n  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(1 - t, 5)), // https://easings.net\r\n  direction: \"vertical\",\r\n  smooth: true,\r\n  smoothTouch: false,\r\n  touchMultiplier: 2,\r\n});\r\n\r\nconst raf = (time) => {\r\n  lenis.raf(time);\r\n  requestAnimationFrame(raf);\r\n};\r\n\r\nrequestAnimationFrame(raf);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lenis);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/global/smoothScroll.js?");

/***/ }),

/***/ "./src/js/global/stickyHeader.js":
/*!***************************************!*\
  !*** ./src/js/global/stickyHeader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst stickyHeader = (header, className) => {\r\n  let lastScrollPosition = 0;\r\n\r\n  const hideHeader = () => {\r\n    const distanceFromTop =\r\n      window.scrollY || document.documentElement.scrollTop;\r\n\r\n    if (distanceFromTop > lastScrollPosition) {\r\n      gsap.to(header, {\r\n        y: `-${header.getBoundingClientRect().height}`,\r\n      });\r\n    } else {\r\n      gsap.to(header, {\r\n        y: 0,\r\n      });\r\n      header.classList.add(className);\r\n    }\r\n\r\n    lastScrollPosition = distanceFromTop <= 0 ? 0 : distanceFromTop;\r\n\r\n    if (distanceFromTop == 0) {\r\n      header.classList.remove(className);\r\n    }\r\n  };\r\n\r\n  window.addEventListener(\"scroll\", hideHeader, false);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stickyHeader);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/global/stickyHeader.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/loader.js */ \"./src/js/global/loader.js\");\n/* harmony import */ var _global_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/smoothScroll.js */ \"./src/js/global/smoothScroll.js\");\n/* harmony import */ var _global_stickyHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/stickyHeader.js */ \"./src/js/global/stickyHeader.js\");\n/* harmony import */ var _animations_moveUpTextbyLine_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations/moveUpTextbyLine.js */ \"./src/js/animations/moveUpTextbyLine.js\");\n/* harmony import */ var _animations_moveUpOnScroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations/moveUpOnScroll.js */ \"./src/js/animations/moveUpOnScroll.js\");\n/* harmony import */ var _global_backToTop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global/backToTop.js */ \"./src/js/global/backToTop.js\");\n/* harmony import */ var _logic_carouselFullScreen_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logic/carouselFullScreen.js */ \"./src/js/logic/carouselFullScreen.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst global = () => {\r\n  // Loader\r\n  const body = document.querySelector(\".body\");\r\n  // loader(body);\r\n\r\n  // Sticky Header\r\n  const header = document.querySelector(\".header\");\r\n  (0,_global_stickyHeader_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(header, \"header--sticky\");\r\n\r\n  // Dropdown Menu\r\n  const dropdownMenu = document.querySelector(\".sub-menu\");\r\n  const dropdownBackground = document.querySelector(\r\n    \".main-menu__dropdown-background\"\r\n  );\r\n\r\n  header.addEventListener(\"mouseover\", (e) => {\r\n    let dropdownItem = header.querySelector(\".menu-item-has-children a\");\r\n    if (e.target === dropdownItem) {\r\n      header.classList.add(\"header--dropdown\");\r\n      dropdownBackground.classList.add(\"main-menu__dropdown-background--open\");\r\n      setTimeout(() => {\r\n        dropdownMenu.classList.add(\"dropdown--open\");\r\n      }, \"600\");\r\n    }\r\n  });\r\n\r\n  header.addEventListener(\"mouseout\", (e) => {\r\n    let dropdownItem = header.querySelector(\".menu-item-has-children a\");\r\n    if (e.target === dropdownItem) {\r\n      dropdownMenu.classList.remove(\"dropdown--open\");\r\n\r\n      setTimeout(() => {\r\n        dropdownBackground.classList.remove(\r\n          \"main-menu__dropdown-background--open\"\r\n        );\r\n        header.classList.remove(\"header--dropdown\");\r\n      }, \"300\");\r\n    }\r\n  });\r\n\r\n  // Hero Text Animation\r\n  (0,_animations_moveUpTextbyLine_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n  // Main Grid\r\n  const imageLarge = \".image-with-tiles\";\r\n  const imagesSmall = \".main-grid__item-image-s\";\r\n  if (imagesSmall) (0,_animations_moveUpOnScroll_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(imageLarge, imagesSmall);\r\n\r\n  // Back to Top\r\n  const backToTopButton = document.querySelector(\".back-to-top\");\r\n  (0,_global_backToTop_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(backToTopButton, \"back-to-top--visible\");\r\n\r\n  //////////////////////////\r\n  var swiper = new Swiper(\".carousel-text\", {\r\n    slidesPerView: \"auto\",\r\n    spaceBetween: 150,\r\n    centeredSlides: true,\r\n    autoplay: {\r\n      delay: 2500,\r\n      disableOnInteraction: false, // continue autoplay after user interactions\r\n    },\r\n    allowTouchMove: false,\r\n  });\r\n\r\n  var swiper2 = new Swiper(\".carousel-image\", {\r\n    slidesPerView: 1,\r\n    effect: \"fade\",\r\n    centeredSlides: true,\r\n    autoplay: {\r\n      delay: 2500,\r\n      disableOnInteraction: false, // continue autoplay after user interactions\r\n    },\r\n    allowTouchMove: false,\r\n  });\r\n\r\n  /////////////////////////\r\n  /*\r\n  // Footer Menu Items Rearrangement\r\n  const footerMenuList = document.querySelector(\".footer-menu__list\");\r\n  const footerMenuItemsExceptFirst = document.querySelectorAll(\r\n    \".footer-menu__list > li:not(:first-child)\"\r\n  );\r\n  const footerMenuCustomWrapper = document.createElement(\"div\");\r\n  footerMenuItemsExceptFirst.forEach((item) => {\r\n    footerMenuCustomWrapper.insertAdjacentElement(\"beforeend\", item);\r\n  });\r\n\r\n  footerMenuList.insertAdjacentElement(\"beforeend\", footerMenuCustomWrapper);\r\n*/\r\n\r\n  console.log(\"Global JavaScript\");\r\n};\r\n\r\n// Page Transition\r\nconst loadPageScript = (namespace) => {\r\n  const siteName = \"gaiaexclusiveretreats.com\";\r\n  const themeName = \"gaia\";\r\n  let url = window.location.origin;\r\n\r\n  // Check if we are in XAMPP environment\r\n  if (window.location.href.includes(\"localhost\")) {\r\n    console.log(\"We are in XAMPP environment\");\r\n\r\n    // Remove \"localhost\" from the URL\r\n    url += `/${siteName}`;\r\n  }\r\n\r\n  const scriptsDir = `wp-content/themes/${themeName}/src/js`;\r\n  const scriptUrl = `${url}/${scriptsDir}/${namespace}.bundle.js`;\r\n\r\n  // Create a <script> element with the desired JS file as its \"src\" and append it to the <body>\r\n  const script = document.createElement(\"script\");\r\n  script.src = scriptUrl;\r\n  script.async = true;\r\n  document.body.appendChild(script);\r\n};\r\n\r\nconst revealPageTransitionTl = gsap.timeline({\r\n  paused: true,\r\n  onStart: () => {\r\n    console.log(\"Revealing\");\r\n    global();\r\n  },\r\n  // onComplete: global,\r\n});\r\n\r\nconst hidePageTransitionTl = gsap.timeline({\r\n  paused: true,\r\n});\r\n\r\nhidePageTransitionTl.fromTo(\r\n  \".page-transition\",\r\n  {\r\n    opacity: 0,\r\n  },\r\n  {\r\n    duration: 1,\r\n    opacity: 1,\r\n  }\r\n);\r\n\r\nrevealPageTransitionTl.fromTo(\r\n  \".page-transition\",\r\n  {\r\n    opacity: 1,\r\n  },\r\n  {\r\n    duration: 1,\r\n    opacity: 0,\r\n    delay: 0.5,\r\n  }\r\n);\r\n\r\nbarba.init({\r\n  transitions: [\r\n    {\r\n      name: \"fade-transition\",\r\n      once(data) {\r\n        // Initial load animation\r\n        revealPageTransitionTl.play();\r\n      },\r\n      leave(data) {\r\n        const done = this.async(); // Get the async completion function\r\n        hidePageTransitionTl.restart();\r\n        hidePageTransitionTl.eventCallback(\"onComplete\", () => {\r\n          revealPageTransitionTl.play();\r\n          done(); // Call done when the hide transition is complete\r\n        });\r\n      },\r\n      enter(data) {\r\n        console.log(\"Switching to new page content...\");\r\n\r\n        // Apply new body class from next container\r\n        const bodyClassAttribute =\r\n          data.next.container.getAttribute(\"data-body-class\");\r\n        const nextBodyClasses = bodyClassAttribute\r\n          ? bodyClassAttribute.split(\" \")\r\n          : [];\r\n        document.body.className = [\"body\", ...nextBodyClasses].join(\" \");\r\n\r\n        // Reinitialize scripts or global functions\r\n        const namespace = data.next.namespace;\r\n        if (namespace) {\r\n          loadPageScript(namespace); // Ensure this is defined to load page-specific scripts\r\n        }\r\n        // global();\r\n\r\n        revealPageTransitionTl.restart();\r\n      },\r\n    },\r\n  ],\r\n});\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/index.js?");

/***/ }),

/***/ "./src/js/logic/carouselFullScreen.js":
/*!********************************************!*\
  !*** ./src/js/logic/carouselFullScreen.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carouselFullScreen = (\r\n  selector,\r\n  slideSelector,\r\n  visibleDesktop = 4,\r\n  visibleTablet = 2,\r\n  visibleMobile = 1,\r\n  previousButton,\r\n  nextButton,\r\n  dotClass,\r\n  autoplay = false\r\n) => {\r\n  console.log(\"fulll\");\r\n  // Dynamic generation of bullets\r\n  const bulletsContainer = document.querySelector(\r\n    `${selector} .carousel__dots`\r\n  );\r\n\r\n  if (bulletsContainer) {\r\n    const totalSlides = document.querySelectorAll(\r\n      `${selector} ${slideSelector}`\r\n    ).length;\r\n\r\n    for (let i = 0; i < totalSlides; i++) {\r\n      const bullet = document.createElement(\"div\");\r\n      bullet.classList.add(dotClass);\r\n      bullet.dataset.glideDir = `=${i}`;\r\n      bulletsContainer.appendChild(bullet);\r\n    }\r\n  }\r\n\r\n  const glideOptions = {\r\n    perView: visibleDesktop,\r\n    type: \"carousel\",\r\n    animationTimingFunc: \"cubic-bezier(0.165, 0.840, 0.440, 1.000)\",\r\n    gap: 200,\r\n    peek: {\r\n      before: 0,\r\n      after: 250,\r\n    },\r\n    breakpoints: {\r\n      991: { perView: visibleTablet },\r\n      767: { perView: visibleMobile },\r\n    },\r\n  };\r\n\r\n  if (autoplay) {\r\n    glideOptions.autoplay = 2500; // Change the autoplay interval as needed\r\n  }\r\n\r\n  const glide = new Glide(selector, glideOptions).mount();\r\n\r\n  if (previousButton) {\r\n    previousButton.addEventListener(\"click\", () => {\r\n      glide.go(\"<\");\r\n    });\r\n  }\r\n\r\n  if (nextButton) {\r\n    nextButton.addEventListener(\"click\", () => {\r\n      glide.go(\">\");\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carouselFullScreen);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/logic/carouselFullScreen.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;