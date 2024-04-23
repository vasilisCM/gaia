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

/***/ "./src/js/pages/mykonos.js":
/*!*********************************!*\
  !*** ./src/js/pages/mykonos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mykonos = () => {\r\n  var swiper = new Swiper(\".carousel-text\", {\r\n    slidesPerView: \"auto\",\r\n    spaceBetween: 150,\r\n    centeredSlides: true,\r\n    autoplay: {\r\n      delay: 2500,\r\n      disableOnInteraction: false, // continue autoplay after user interactions\r\n    },\r\n    allowTouchMove: false,\r\n  });\r\n\r\n  var swiper2 = new Swiper(\".carousel-image\", {\r\n    slidesPerView: 1,\r\n    effect: \"fade\",\r\n    centeredSlides: true,\r\n    autoplay: {\r\n      delay: 2500,\r\n      disableOnInteraction: false, // continue autoplay after user interactions\r\n    },\r\n    allowTouchMove: false,\r\n  });\r\n};\r\n\r\nmykonos();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mykonos);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/pages/mykonos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/pages/mykonos.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;