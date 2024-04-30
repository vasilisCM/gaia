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

/***/ "./src/js/logic/carousel.js":
/*!**********************************!*\
  !*** ./src/js/logic/carousel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Initialize a draggable carousel with the provided elements and settings.\r\n *\r\n * @param {Element} carouselContainer - The element that contains the carousel's track, which contains all the carousel's slides.\r\n * @param {Element} carouselTrack - The element that contains all the carousel's slides.\r\n * @param {string} slideSelector - A CSS selector for each carousel slide, e.g., '.carousel__slide'.\r\n * @param {Element} nextButton - (Optional) The element that triggers the next carousel slide.\r\n * @param {Element} previousButton - (Optional) The element that triggers the previous carousel slide.\r\n * @param {Element} indicator - (Optional) An absolute positioned element representing the carousel's progress indicator.\r\n */\r\n\r\nconst carousel = (\r\n  carouselContainer,\r\n  carouselTrack,\r\n  slideSelector,\r\n  speed = 1,\r\n  nextButton = undefined,\r\n  previousButton = undefined,\r\n  indicator = undefined\r\n) => {\r\n  // Entrance\r\n  ScrollTrigger.create({\r\n    ease: \"power3.out\",\r\n  });\r\n\r\n  const draggableCarouselTimeline = gsap.timeline({\r\n    scrollTrigger: {\r\n      trigger: carouselContainer,\r\n      start: \"20% 100%\",\r\n      toggleActions: \"play reverse restart reverse\",\r\n    },\r\n  });\r\n\r\n  draggableCarouselTimeline.fromTo(\r\n    slideSelector,\r\n    {\r\n      opacity: 0,\r\n      x: \"20%\",\r\n    },\r\n    {\r\n      opacity: 1,\r\n      x: 0,\r\n      ease: \"power3.out\",\r\n      duration: 3,\r\n      stagger: { amount: 0.2, from: \"random\" },\r\n    }\r\n  );\r\n\r\n  // Initial UI State\r\n  carouselContainer.style.overflow = \"hidden\";\r\n  // Set the initial values for data attributes\r\n  carouselTrack.setAttribute(\"data-mouse-down-at\", \"0\");\r\n  carouselTrack.setAttribute(\"data-prev-percentage\", \"0\");\r\n\r\n  // Define a variable to track whether the mouse button is down\r\n  let isMouseDown = false;\r\n\r\n  if (previousButton) previousButton.style.visibility = \"hidden\";\r\n\r\n  // Calculate Carousel Track Width\r\n  const draggableCarouselWidth = carouselTrack.scrollWidth;\r\n\r\n  // Get All Slides\r\n  const carouselSlides = carouselContainer.querySelectorAll(slideSelector);\r\n\r\n  // Calculate All Slides Width\r\n  let totalSlideWidth = 0;\r\n  carouselSlides.forEach((slide) => {\r\n    // console.log(slide.offsetWidth);\r\n    totalSlideWidth += slide.offsetWidth;\r\n    // console.log(slide);\r\n  });\r\n\r\n  // console.log(totalSlideWidth);\r\n\r\n  // Calculate Each Slide Width\r\n  const slidesNumber = carouselSlides.length;\r\n  const slideWidth = draggableCarouselWidth / slidesNumber;\r\n\r\n  // console.log(slideWidth);\r\n\r\n  // CalculateOffsets\r\n  const offset = window.innerWidth - slideWidth;\r\n  const offsetTouch = window.screen.width - slideWidth;\r\n\r\n  // Carousel Timeline\r\n  const carouselTimeline = gsap.timeline({ paused: true });\r\n\r\n  carouselTimeline.fromTo(\r\n    carouselTrack,\r\n    {\r\n      x: \"0%\",\r\n    },\r\n    {\r\n      x: -totalSlideWidth + offset,\r\n      ease: \"none\",\r\n    }\r\n  );\r\n\r\n  // Mouse/ Touch Down\r\n  const click = (e) => {\r\n    console.log(carouselSlides.length);\r\n    isMouseDown = true;\r\n\r\n    carouselTrack.dataset.mouseDownAt = e.clientX;\r\n    carouselTimeline.pause();\r\n\r\n    // Scale down on click\r\n    gsap.to(carouselSlides, {\r\n      scale: 0.95,\r\n    });\r\n  };\r\n\r\n  const touch = (e) => {\r\n    carouselTrack.dataset.mouseDownAt = e.clientX;\r\n    carouselTimeline.pause();\r\n\r\n    // Scale down on click\r\n    gsap.to(carouselSlides, {\r\n      scale: 0.95,\r\n    });\r\n  };\r\n\r\n  carouselTrack.addEventListener(\"mousedown\", (e) => {\r\n    click(e);\r\n  });\r\n  carouselTrack.addEventListener(\"touchstart\", (e) => {\r\n    touch(e.touches[0]);\r\n  });\r\n\r\n  // Mouse/ Touch Move\r\n  const moveSwipe = (e) => {\r\n    if (carouselTrack.dataset.mouseDownAt === \"0\") return;\r\n    const mouseDelta =\r\n      parseFloat(carouselTrack.dataset.mouseDownAt) - e.clientX;\r\n    const sensitivity = speed * 0.1;\r\n    // const sensitivity = 1;\r\n\r\n    const maxDelta = window.innerWidth * 2 * sensitivity;\r\n\r\n    const percentage = (mouseDelta / maxDelta) * -100;\r\n    const nextPercentageUnconstrained =\r\n      parseFloat(carouselTrack.dataset.prevPercentage) + percentage;\r\n    const nextPercentage = Math.max(\r\n      Math.min(nextPercentageUnconstrained, 0),\r\n      -100\r\n    );\r\n\r\n    carouselTrack.dataset.percentage = nextPercentage;\r\n\r\n    // Use gsap.to to animate the timeline's progress\r\n    gsap.to(carouselTimeline, {\r\n      progress: Math.abs(nextPercentage / 100),\r\n    });\r\n  };\r\n\r\n  carouselTrack.addEventListener(\"mousemove\", (e) => {\r\n    moveSwipe(e);\r\n  });\r\n\r\n  carouselTrack.addEventListener(\"touchmove\", (e) => {\r\n    moveSwipe(e.touches[0]);\r\n  });\r\n\r\n  // Mouse/ Touch Leave\r\n  const leave = (e) => {\r\n    isMouseDown = false;\r\n    carouselTrack.dataset.mouseDownAt = \"0\";\r\n    carouselTrack.dataset.prevPercentage = carouselTrack.dataset.percentage;\r\n    carouselTimeline.pause();\r\n    gsap.to(carouselSlides, { scale: 1 });\r\n  };\r\n  carouselTrack.addEventListener(\"mouseup\", (e) => leave(e));\r\n  carouselTrack.addEventListener(\"touchend\", (e) => leave(e.touches[0]));\r\n\r\n  // Touch Move\r\n  carouselTrack.addEventListener(\"touchmove\", (e) => {\r\n    if (!isMouseDown) return;\r\n    e.preventDefault();\r\n    const x = e.touches[0].pageX - carouselTrack.offsetLeft;\r\n\r\n    const walk = x - mouseStartingPosition;\r\n    const newTranslateAmount = translateAmount + walk;\r\n\r\n    // Calculate the percentage of translation relative to the maximum allowed translation\r\n    const minTranslateAmount = 0;\r\n    const maxTranslateAmount = -totalSlideWidth + offsetTouch;\r\n    const percentage = (newTranslateAmount / maxTranslateAmount) * 100;\r\n\r\n    // Update the indicator position\r\n    if (indicator) {\r\n      if (percentage <= 100 && percentage >= 0)\r\n        indicator.style.left = `${percentage}%`;\r\n    }\r\n\r\n    if (newTranslateAmount > minTranslateAmount) {\r\n      gsap.to(carouselTrack, { x: `${minTranslateAmount}px` });\r\n    } else if (newTranslateAmount < maxTranslateAmount) {\r\n      gsap.to(carouselTrack, { x: `${maxTranslateAmount}px` });\r\n    } else {\r\n      gsap.to(carouselTrack, { x: `${newTranslateAmount}px` });\r\n    }\r\n  });\r\n\r\n  // Leave mouse when dragging outside the screen\r\n  window.addEventListener(\"mousemove\", (e) => {\r\n    if (isMouseDown) {\r\n      moveSwipe(e);\r\n\r\n      // Check if the cursor has moved outside a certain boundary (e.g., the window width)\r\n      if (e.clientX > window.innerWidth) {\r\n        leave();\r\n      }\r\n    }\r\n  });\r\n\r\n  // Firefox Bug Fix\r\n  const disableDrag = (e) => {\r\n    e.preventDefault();\r\n  };\r\n  carouselTrack.addEventListener(\"dragstart\", disableDrag);\r\n\r\n  // Next/ Previous Button Navigation\r\n  let currentSlide = 0;\r\n\r\n  const navigateWithArrow = (direction) => {\r\n    if (direction === \"next\") {\r\n      currentSlide++;\r\n      if (currentSlide >= slidesNumber) {\r\n        currentSlide = 0;\r\n        nextButton.style.visibility = \"hidden\";\r\n      }\r\n    } else if (direction === \"previous\") {\r\n      currentSlide--;\r\n      if (currentSlide < 0) {\r\n        currentSlide = slidesNumber - 1;\r\n        previousButton.style.visibility = \"hidden\";\r\n      }\r\n    }\r\n\r\n    const translateX = `-${slideWidth * currentSlide}px`;\r\n    gsap.to(carouselTrack, { x: translateX, duration: 0.3 });\r\n\r\n    // Calculate the percentage of translation relative to the maximum allowed translation\r\n    const maxTranslateAmount = -totalSlideWidth + window.innerWidth;\r\n    const percentage =\r\n      -((slideWidth * currentSlide) / maxTranslateAmount) * 100;\r\n\r\n    // Update the indicator position\r\n    if (!indicator) return;\r\n    if (percentage <= 100 && percentage >= 0)\r\n      gsap.to(indicator, { left: `${percentage}%` });\r\n\r\n    nextButton.style.visibility = \"visible\";\r\n    previousButton.style.visibility = \"visible\";\r\n  };\r\n\r\n  // Next Button\r\n  if (nextButton) {\r\n    nextButton.addEventListener(\"click\", () => navigateWithArrow(\"next\"));\r\n  }\r\n\r\n  // Previous Button\r\n  if (previousButton) {\r\n    previousButton.addEventListener(\"click\", () =>\r\n      navigateWithArrow(\"previous\")\r\n    );\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/logic/carousel.js?");

/***/ }),

/***/ "./src/js/logic/carouselFullScreen.js":
/*!********************************************!*\
  !*** ./src/js/logic/carouselFullScreen.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carouselFullScreen = (\r\n  selector,\r\n  slideSelector,\r\n  visibleDesktop = 4,\r\n  visibleTablet = 2,\r\n  visibleMobile = 1,\r\n  previousButton,\r\n  nextButton,\r\n  dotClass,\r\n  autoplay = false\r\n) => {\r\n  console.log(\"fulll\");\r\n  // Dynamic generation of bullets\r\n  const bulletsContainer = document.querySelector(\r\n    `${selector} .carousel__dots`\r\n  );\r\n\r\n  if (bulletsContainer) {\r\n    const totalSlides = document.querySelectorAll(\r\n      `${selector} ${slideSelector}`\r\n    ).length;\r\n\r\n    for (let i = 0; i < totalSlides; i++) {\r\n      const bullet = document.createElement(\"div\");\r\n      bullet.classList.add(dotClass);\r\n      bullet.dataset.glideDir = `=${i}`;\r\n      bulletsContainer.appendChild(bullet);\r\n    }\r\n  }\r\n\r\n  const glideOptions = {\r\n    perView: visibleDesktop,\r\n    type: \"carousel\",\r\n    animationTimingFunc: \"cubic-bezier(0.165, 0.840, 0.440, 1.000)\",\r\n    gap: 200,\r\n    peek: {\r\n      before: 0,\r\n      after: 250,\r\n    },\r\n    breakpoints: {\r\n      991: { perView: visibleTablet },\r\n      767: { perView: visibleMobile },\r\n    },\r\n  };\r\n\r\n  if (autoplay) {\r\n    glideOptions.autoplay = 2500; // Change the autoplay interval as needed\r\n  }\r\n\r\n  const glide = new Glide(selector, glideOptions).mount();\r\n\r\n  if (previousButton) {\r\n    previousButton.addEventListener(\"click\", () => {\r\n      glide.go(\"<\");\r\n    });\r\n  }\r\n\r\n  if (nextButton) {\r\n    nextButton.addEventListener(\"click\", () => {\r\n      glide.go(\">\");\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carouselFullScreen);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/logic/carouselFullScreen.js?");

/***/ }),

/***/ "./src/js/logic/customCursor.js":
/*!**************************************!*\
  !*** ./src/js/logic/customCursor.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Custom Cursor\r\nconst customCursor = (cursor) => {\r\n  const trackCursorPosition = function (e) {\r\n    cursor.style.top = e.pageY + \"px\";\r\n    cursor.style.left = e.pageX + \"px\";\r\n  };\r\n\r\n  // Imitate default cursor\r\n  window.addEventListener(\"mousemove\", trackCursorPosition);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customCursor);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/logic/customCursor.js?");

/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic_customCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/customCursor.js */ \"./src/js/logic/customCursor.js\");\n/* harmony import */ var _logic_carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/carousel.js */ \"./src/js/logic/carousel.js\");\n/* harmony import */ var _logic_carouselFullScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/carouselFullScreen.js */ \"./src/js/logic/carouselFullScreen.js\");\n\r\n\r\n\r\n\r\nconst home = () => {\r\n  console.log(\"Hello from home\");\r\n\r\n  // Carousel\r\n  const carouselElement = document.querySelector(\".carousel\");\r\n  const carouselContainer = document.querySelector(\".carousel__container\");\r\n  const carouselTrack = document.querySelector(\".carousel__track\");\r\n\r\n  const mm = gsap.matchMedia();\r\n\r\n  mm.add(\"(max-width: 991px)\", () => {\r\n    (0,_logic_carousel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(carouselContainer, carouselTrack, \".carousel__item\", 5);\r\n  });\r\n\r\n  mm.add(\"(min-width: 991px)\", () => {\r\n    (0,_logic_carousel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(carouselContainer, carouselTrack, \".carousel__item\", 2);\r\n  });\r\n\r\n  mm.add(\"(min-width: 2220px)\", () => {\r\n    (0,_logic_carousel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(carouselContainer, carouselTrack, \".carousel__item\", 0.01);\r\n  });\r\n\r\n  // Custom Cursor\r\n  const cursorDrag = document.querySelector(\".cursor\");\r\n  (0,_logic_customCursor_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cursorDrag);\r\n\r\n  // Hover\r\n  carouselElement.addEventListener(\"mouseover\", () => {\r\n    cursorDrag.classList.add(\"cursor--active\");\r\n  });\r\n\r\n  // Click\r\n  carouselElement.addEventListener(\"mousedown\", () => {\r\n    cursorDrag.classList.add(\"cursor--clicked\");\r\n\r\n    gsap.to(cursorDrag, {\r\n      scale: 0.9,\r\n    });\r\n  });\r\n\r\n  // Unclick\r\n  carouselElement.addEventListener(\"mouseup\", () => {\r\n    cursorDrag.classList.remove(\"cursor--clicked\");\r\n    gsap.to(cursorDrag, {\r\n      scale: 1,\r\n    });\r\n  });\r\n\r\n  // Leave\r\n  carouselElement.addEventListener(\"mouseout\", () => {\r\n    cursorDrag.classList.remove(\"cursor--active\");\r\n    cursorDrag.classList.remove(\"cursor--clicked\");\r\n  });\r\n};\r\n\r\nhome();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/pages/home.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/home.js");
/******/ 	
/******/ })()
;