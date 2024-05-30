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

eval("const singleRetreat = () => {\r\n  console.log(\"Hello from Retreat Room\");\r\n\r\n  // Control Input Elements for Rooms\r\n  const quantityInputs = document.querySelectorAll(\".quantity-input\");\r\n\r\n  function updateMaxValues() {\r\n    let sum = 0;\r\n    quantityInputs.forEach((input) => {\r\n      sum += parseInt(input.value);\r\n    });\r\n\r\n    quantityInputs.forEach((input) => {\r\n      const currentSum = sum - parseInt(input.value);\r\n      const maxValue = quantityField - currentSum;\r\n      input.max = maxValue;\r\n    });\r\n  }\r\n\r\n  // Initialize\r\n  updateMaxValues();\r\n\r\n  // Listen for changes\r\n  quantityInputs.forEach((input) => {\r\n    input.addEventListener(\"input\", function () {\r\n      updateMaxValues();\r\n    });\r\n  });\r\n\r\n  let finalRoomNumber = 0;\r\n\r\n  function updatePrice() {\r\n    finalRoomNumber = 0;\r\n    let finalPrice = 0;\r\n\r\n    const roomTypes = [\"single\", \"double\"];\r\n    let rooms = [];\r\n\r\n    quantityInputs.forEach((input, i) => {\r\n      rooms.push({\r\n        roomType: roomTypes[i],\r\n        roomNumber: input.value,\r\n      });\r\n    });\r\n\r\n    rooms.forEach((room) => {\r\n      finalPrice += Number(room.roomNumber) * Number(prices[room.roomType]);\r\n      finalRoomNumber += Number(room.roomNumber);\r\n    });\r\n\r\n    const depositAmount = finalPrice * 0.2;\r\n    // console.log(depositAmount);\r\n\r\n    document.getElementById(\"room-price\").textContent = `${finalPrice}€`; // UI\r\n    document.getElementById(\r\n      \"deposit-amount\"\r\n    ).textContent = `${depositAmount.toFixed(2)}€`; // UI\r\n\r\n    document.getElementById(\"booking-price\").value = finalPrice; // Hidden field\r\n    document.getElementById(\"deposit-price\").value = depositAmount.toFixed(2); // Hidden\r\n\r\n    return finalRoomNumber;\r\n  }\r\n\r\n  // Add event listeners\r\n  // document.querySelectorAll('input[name=\"type\"]').forEach((element) => {\r\n  //   element.addEventListener(\"change\", updatePrice);\r\n  // });\r\n\r\n  quantityInputs.forEach((input) => {\r\n    input.addEventListener(\"change\", updatePrice);\r\n  });\r\n\r\n  // Initialize PayPal button\r\n  paypal\r\n    .Buttons({\r\n      createOrder: function (data, actions) {\r\n        const form = document.getElementById(\"booking-form\");\r\n        const formData = new FormData(form);\r\n        const formObject = Object.fromEntries(formData.entries());\r\n\r\n        // Ensure deposit price is up to date\r\n        updatePrice();\r\n\r\n        return actions.order.create({\r\n          purchase_units: [\r\n            {\r\n              amount: {\r\n                value: formObject.deposit_price,\r\n              },\r\n            },\r\n          ],\r\n        });\r\n      },\r\n      onApprove: function (data, actions) {\r\n        return actions.order.capture().then(function (details) {\r\n          console.log(\r\n            \"Transaction completed by \" + details.payer.name.given_name\r\n          );\r\n          console.log(\"Transaction details: \", details);\r\n\r\n          // Gather form data and store it in local storage\r\n          const form = document.getElementById(\"booking-form\");\r\n          const formData = new FormData(form);\r\n          const formObject = Object.fromEntries(formData.entries());\r\n\r\n          localStorage.setItem(\"title\", JSON.stringify(title));\r\n          localStorage.setItem(\"roomsBooked\", JSON.stringify(finalRoomNumber));\r\n          localStorage.setItem(\"dates\", JSON.stringify([fromDate, toDate]));\r\n          localStorage.setItem(\"form_details\", JSON.stringify(formObject));\r\n          localStorage.setItem(\"transaction_details\", JSON.stringify(details));\r\n\r\n          // Redirect to thank you page\r\n          window.location.href = thankYouPageUrl;\r\n        });\r\n      },\r\n      onError: function (err) {\r\n        console.error(\"PayPal Checkout onError\", err);\r\n      },\r\n    })\r\n    .render(\"#paypal-button-container\");\r\n};\r\n\r\nsingleRetreat();\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/pages/singleRetreat.js?");

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