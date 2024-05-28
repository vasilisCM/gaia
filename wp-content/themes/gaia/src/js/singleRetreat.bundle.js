/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/pages/singleRetreat.js":
/*!***************************************!*\
  !*** ./src/js/pages/singleRetreat.js ***!
  \***************************************/
/***/ (() => {

eval("const singleRetreat = () => {\r\n  console.log(\"Hello from Retreat Room\");\r\n\r\n  function updatePrice() {\r\n    const roomType = document.querySelector('input[name=\"type\"]:checked').value;\r\n    const quantityElement = document.querySelector('input[name=\"quantity\"]');\r\n    let quantity = quantityElement.value;\r\n\r\n    // Ensure quantity is at least 1\r\n    if (quantity < 1) quantity = 1;\r\n\r\n    // const prices = {\r\n    //   single: 15800,\r\n    //   double: 9500,\r\n    // };\r\n\r\n    const room = {\r\n      type: roomType,\r\n      price: prices[roomType],\r\n    };\r\n\r\n    const finalPrice = room.price * quantity;\r\n    const depositAmount = finalPrice * 0.2;\r\n\r\n    document.getElementById(\"room-price\").textContent = `${finalPrice}€`; // UI\r\n    document.getElementById(\r\n      \"deposit-amount\"\r\n    ).textContent = `${depositAmount.toFixed(2)}€`; // UI\r\n\r\n    document.getElementById(\"booking-price\").value = finalPrice; // Hidden field\r\n    document.getElementById(\"deposit-price\").value = depositAmount.toFixed(2); // Hidden\r\n  }\r\n\r\n  // Add event listeners\r\n  document.querySelectorAll('input[name=\"type\"]').forEach((element) => {\r\n    element.addEventListener(\"change\", updatePrice);\r\n  });\r\n  document\r\n    .querySelector('input[name=\"quantity\"]')\r\n    .addEventListener(\"change\", updatePrice);\r\n\r\n  // Initialize PayPal button\r\n  paypal\r\n    .Buttons({\r\n      createOrder: function (data, actions) {\r\n        const form = document.getElementById(\"booking-form\");\r\n        const formData = new FormData(form);\r\n        const formObject = Object.fromEntries(formData.entries());\r\n\r\n        // Ensure deposit price is up to date\r\n        updatePrice();\r\n\r\n        return actions.order.create({\r\n          purchase_units: [\r\n            {\r\n              amount: {\r\n                value: formObject.deposit_price,\r\n              },\r\n            },\r\n          ],\r\n        });\r\n      },\r\n      onApprove: function (data, actions) {\r\n        return actions.order.capture().then(function (details) {\r\n          console.log(\r\n            \"Transaction completed by \" + details.payer.name.given_name\r\n          );\r\n          console.log(\"Transaction details: \", details);\r\n\r\n          // Gather form data and store it in local storage\r\n          const form = document.getElementById(\"booking-form\");\r\n          const formData = new FormData(form);\r\n          const formObject = Object.fromEntries(formData.entries());\r\n\r\n          localStorage.setItem(\"title\", JSON.stringify(title));\r\n          localStorage.setItem(\"dates\", JSON.stringify([fromDate, toDate]));\r\n          localStorage.setItem(\"form_details\", JSON.stringify(formObject));\r\n          localStorage.setItem(\"transaction_details\", JSON.stringify(details));\r\n\r\n          // Redirect to thank you page\r\n          window.location.href = thankYouPageUrl;\r\n        });\r\n      },\r\n      onError: function (err) {\r\n        console.error(\"PayPal Checkout onError\", err);\r\n      },\r\n    })\r\n    .render(\"#paypal-button-container\");\r\n};\r\n\r\nsingleRetreat();\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/pages/singleRetreat.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/pages/singleRetreat.js"]();
/******/ 	
/******/ })()
;