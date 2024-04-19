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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/loader.js */ \"./src/js/global/loader.js\");\n/* harmony import */ var _global_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/smoothScroll.js */ \"./src/js/global/smoothScroll.js\");\n/* harmony import */ var _global_stickyHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/stickyHeader.js */ \"./src/js/global/stickyHeader.js\");\n/* harmony import */ var _animations_moveUpTextbyLine_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations/moveUpTextbyLine.js */ \"./src/js/animations/moveUpTextbyLine.js\");\n/* harmony import */ var _animations_moveUpOnScroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations/moveUpOnScroll.js */ \"./src/js/animations/moveUpOnScroll.js\");\n/* harmony import */ var _global_backToTop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global/backToTop.js */ \"./src/js/global/backToTop.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst global = () => {\r\n  // Loader\r\n  const body = document.querySelector(\".body\");\r\n  (0,_global_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(body);\r\n\r\n  // Sticky Header\r\n  const header = document.querySelector(\".header\");\r\n  (0,_global_stickyHeader_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(header, \"header--sticky\");\r\n\r\n  // Dropdown Menu\r\n  const dropdownMenu = document.querySelector(\".sub-menu\");\r\n  const dropdownBackground = document.querySelector(\r\n    \".main-menu__dropdown-background\"\r\n  );\r\n\r\n  header.addEventListener(\"mouseover\", (e) => {\r\n    let dropdownItem = header.querySelector(\".menu-item-has-children a\");\r\n    if (e.target === dropdownItem) {\r\n      header.classList.add(\"header--dropdown\");\r\n      dropdownBackground.classList.add(\"main-menu__dropdown-background--open\");\r\n      setTimeout(() => {\r\n        dropdownMenu.classList.add(\"dropdown--open\");\r\n      }, \"600\");\r\n    }\r\n  });\r\n\r\n  header.addEventListener(\"mouseout\", (e) => {\r\n    let dropdownItem = header.querySelector(\".menu-item-has-children a\");\r\n    if (e.target === dropdownItem) {\r\n      dropdownMenu.classList.remove(\"dropdown--open\");\r\n\r\n      setTimeout(() => {\r\n        dropdownBackground.classList.remove(\r\n          \"main-menu__dropdown-background--open\"\r\n        );\r\n        header.classList.remove(\"header--dropdown\");\r\n      }, \"300\");\r\n    }\r\n  });\r\n\r\n  // Hero Text Animation\r\n  (0,_animations_moveUpTextbyLine_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n  // Main Grid\r\n  const imageLarge = \".image-with-tiles\";\r\n  const imagesSmall = \".main-grid__item-image-s\";\r\n  if (imagesSmall) (0,_animations_moveUpOnScroll_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(imageLarge, imagesSmall);\r\n\r\n  // Back to Top\r\n  const backToTopButton = document.querySelector(\".back-to-top\");\r\n  (0,_global_backToTop_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(backToTopButton, \"back-to-top--visible\");\r\n\r\n  // Footer Menu Items Rearrangement\r\n  const footerMenuList = document.querySelector(\".footer-menu__list\");\r\n  const footerMenuItemsExceptFirst = document.querySelectorAll(\r\n    \".footer-menu__list > li:not(:first-child)\"\r\n  );\r\n  const footerMenuCustomWrapper = document.createElement(\"div\");\r\n  footerMenuItemsExceptFirst.forEach((item) => {\r\n    footerMenuCustomWrapper.insertAdjacentElement(\"beforeend\", item);\r\n  });\r\n\r\n  footerMenuList.insertAdjacentElement(\"beforeend\", footerMenuCustomWrapper);\r\n\r\n  console.log(\"Global JavaScript\");\r\n};\r\n\r\n// Page Transition\r\nconst loadPageScript = (namespace) => {\r\n  const siteName = \"gaiaexclusiveretreats.com\";\r\n  const themeName = \"gaia\";\r\n  let url = window.location.origin;\r\n\r\n  // Check if we are in XAMPP environment\r\n  if (window.location.href.includes(\"localhost\")) {\r\n    console.log(\"We are in XAMPP environment\");\r\n\r\n    // Remove \"localhost\" from the URL\r\n    url += `/${siteName}`;\r\n  }\r\n\r\n  const scriptsDir = `wp-content/themes/${themeName}/src/js`;\r\n  const scriptUrl = `${url}/${scriptsDir}/${namespace}.bundle.js`;\r\n\r\n  // Create a <script> element with the desired JS file as its \"src\" and append it to the <body>\r\n  const script = document.createElement(\"script\");\r\n  script.src = scriptUrl;\r\n  script.async = true;\r\n  document.body.appendChild(script);\r\n};\r\n\r\n// barba.hooks.beforeEnter(() => {\r\n//   console.log(\"coming...\");\r\n//   // Animation\r\n//   gsap.fromTo(\r\n//     \".page-transition\",\r\n//     {\r\n//       backgroundColor: \"transparent\",\r\n//       opacity: 0,\r\n//     },\r\n//     {\r\n//       backgroundColor: \"#eceaea\",\r\n//       opacity: 1,\r\n//       delay: 3,\r\n//     }\r\n//   );\r\n// });\r\n\r\n// barba.hooks.beforeLeave(() => {\r\n//   console.log(\"leaving...\");\r\n\r\n//   // Animation\r\n//   gsap.fromTo(\r\n//     \".page-transition\",\r\n//     {\r\n//       backgroundColor: \"#eceaea\",\r\n//       opacity: 1,\r\n//     },\r\n//     {\r\n//       backgroundColor: \"transparent\",\r\n//       opacity: 0,\r\n//     }\r\n//   );\r\n// });\r\n\r\nbarba.init({\r\n  transitions: [\r\n    {\r\n      name: \"fade-transition\",\r\n      once(data) {\r\n        // Run on initial load\r\n        let tl = gsap.timeline();\r\n        tl.to(\".page-transition\", {\r\n          duration: 1,\r\n          opacity: 0,\r\n          onComplete: global,\r\n        });\r\n      },\r\n      leave(data) {\r\n        // Animation to run when leaving a page\r\n        return new Promise((resolve) => {\r\n          let tl = gsap.timeline({\r\n            onComplete: () => {\r\n              console.log(\"Page covered, ready to switch content.\");\r\n              resolve(); // Resolve the promise when animation completes\r\n            },\r\n          });\r\n          tl.to(\".page-transition\", { duration: 1, opacity: 1 });\r\n        });\r\n      },\r\n      enter(data) {\r\n        console.log(\"Switching to new page content...\");\r\n\r\n        const bodyClassAttribute =\r\n          data.next.container.getAttribute(\"data-body-class\");\r\n        const nextBodyClasses = bodyClassAttribute\r\n          ? bodyClassAttribute.split(\" \")\r\n          : [];\r\n        document.body.className = [\"body\", ...nextBodyClasses].join(\" \");\r\n\r\n        global();\r\n        const namespace = data.next.namespace;\r\n        if (namespace) loadPageScript(namespace);\r\n\r\n        // Animation to run when entering a page\r\n        return new Promise((resolve) => {\r\n          let tl = gsap.timeline({\r\n            onComplete: () => {\r\n              console.log(\"New content revealed.\");\r\n              resolve(); // Resolve the promise when animation completes\r\n            },\r\n          });\r\n          tl.to(\".page-transition\", { duration: 1, opacity: 0, delay: 0.5 });\r\n        });\r\n      },\r\n    },\r\n  ],\r\n});\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/index.js?");

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