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

/***/ "./src/js/global/backToTop.js":
/*!************************************!*\
  !*** ./src/js/global/backToTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst backToTop = function (button, className) {\r\n  // Back to Top\r\n  console.log(\"Hello from Back to Top\");\r\n\r\n  window.addEventListener(\"scroll\", function () {\r\n    if (window.pageYOffset > 100) {\r\n      button.classList.add(`${className}`);\r\n    } else {\r\n      button.classList.remove(`${className}`);\r\n    }\r\n  });\r\n\r\n  button.addEventListener(\"click\", function (e) {\r\n    e.preventDefault();\r\n    window.scrollTo({\r\n      top: 0,\r\n      behavior: \"smooth\",\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backToTop);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/global/backToTop.js?");

/***/ }),

/***/ "./src/js/global/loader.js":
/*!*********************************!*\
  !*** ./src/js/global/loader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loader = (body) => {\r\n  const imgLoad = imagesLoaded(body);\r\n\r\n  // Router - It runs when the page reveals\r\n  const siteName = \"boilerplate.gr\";\r\n\r\n  // Loader Timeline - Waiting for Assets to load\r\n  const loadingTl = gsap.timeline({ onStart: () => console.log(\"Loading...\") });\r\n  loadingTl.to(\".loader__spinner\", {\r\n    rotate: \"360deg\",\r\n    duration: 1.3,\r\n    ease: \"none\",\r\n    repeat: -1,\r\n  });\r\n\r\n  // Page Reveal Timeline - Runs the Router\r\n  const pageRevealTl = gsap.timeline({\r\n    paused: true,\r\n    // onComplete: () => router(siteName),\r\n  });\r\n  pageRevealTl\r\n    .to(\".loader\", {\r\n      opacity: 0,\r\n    })\r\n    .to(\".loader\", { display: \"none\" }, \"<1\");\r\n\r\n  // ImagesLoaded\r\n  imgLoad.on(\"done\", () => {\r\n    console.log(\"Done\");\r\n    pageRevealTl.play();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/global/loader.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/loader.js */ \"./src/js/global/loader.js\");\n/* harmony import */ var _global_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/smoothScroll.js */ \"./src/js/global/smoothScroll.js\");\n/* harmony import */ var _global_stickyHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/stickyHeader.js */ \"./src/js/global/stickyHeader.js\");\n/* harmony import */ var _global_backToTop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/backToTop.js */ \"./src/js/global/backToTop.js\");\n\r\n\r\n\r\n\r\n\r\nconst body = document.querySelector(\".body\");\r\n(0,_global_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(body);\r\n\r\nconst header = document.querySelector(\".header\");\r\n(0,_global_stickyHeader_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(header, \"header--sticky\");\r\n\r\nconst backToTopButton = document.querySelector(\".back-to-top\");\r\n(0,_global_backToTop_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(backToTopButton, \"back-to-top--visible\");\r\n\r\nconsole.log(\"JavaScript\");\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/index.js?");

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