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

eval("const singleRetreat = () => {\r\n  console.log(\"Hello from Retreat Room\");\r\n\r\n  // Control Input Elements for Rooms\r\n  const form = document.getElementById(\"booking-form\");\r\n  const quantityInputs = document.querySelectorAll(\".quantity-input\");\r\n  const termsContainer = document.querySelector(\r\n    \".online-booking__terms-container\"\r\n  );\r\n  const termsCheckbox = document.querySelector(\r\n    \".contact-form__acceptance-field\"\r\n  );\r\n  const paypalButton = document.querySelector(\"#paypal-button-container\");\r\n\r\n  const errorContainer = document.querySelector(\r\n    \".online-booking__error-message\"\r\n  );\r\n\r\n  function updateMaxValues() {\r\n    let sum = 0;\r\n    quantityInputs.forEach((input) => {\r\n      sum += parseInt(input.value);\r\n    });\r\n\r\n    quantityInputs.forEach((input) => {\r\n      const currentSum = sum - parseInt(input.value);\r\n      const maxValue = quantityField - currentSum;\r\n      input.max = maxValue;\r\n    });\r\n  }\r\n\r\n  // Initialize\r\n  updateMaxValues();\r\n\r\n  // Listen for changes\r\n  quantityInputs.forEach((input) => {\r\n    input.addEventListener(\"input\", function () {\r\n      updateMaxValues();\r\n    });\r\n  });\r\n\r\n  function validateEmail(email) {\r\n    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n    return re.test(String(email).toLowerCase());\r\n  }\r\n\r\n  function validatePhoneNumber(phone) {\r\n    const re = /^\\+?\\d{9,15}$/;\r\n    return re.test(String(phone));\r\n  }\r\n\r\n  function validateForm() {\r\n    const requiredFields = form.querySelectorAll(\"input[required]\");\r\n    let isValid = true;\r\n    let zeroRoomNumber = Array.from(quantityInputs).every(\r\n      (input) => parseInt(input.value) === 0\r\n    );\r\n    isValid = zeroRoomNumber ? false : true;\r\n\r\n    requiredFields.forEach((field) => {\r\n      field.addEventListener(\"input\", () => {\r\n        termsCheckbox.checked = false;\r\n        paypalButton.classList.add(\"hidden\");\r\n      });\r\n      if (!field.value.trim()) {\r\n        isValid = false;\r\n      }\r\n    });\r\n\r\n    const emailField = form.querySelector(\"input[name='email']\");\r\n    const phoneField = form.querySelector(\"input[name='tel']\");\r\n\r\n    if (!validateEmail(emailField.value)) {\r\n      isValid = false;\r\n    } else if (!validatePhoneNumber(phoneField.value)) {\r\n      isValid = false;\r\n    }\r\n\r\n    // Check if the sum of quantities exceeds the maximum limit\r\n    let sum = 0;\r\n    quantityInputs.forEach((input) => {\r\n      sum += parseInt(input.value) || 0;\r\n    });\r\n\r\n    if (sum > quantityField) {\r\n      isValid = false;\r\n    }\r\n\r\n    return isValid;\r\n  }\r\n\r\n  function showErrorMessages() {\r\n    const emailField = form.querySelector(\"input[name='email']\");\r\n    const phoneField = form.querySelector(\"input[name='tel']\");\r\n\r\n    if (!validateEmail(emailField.value)) {\r\n      errorContainer.textContent = \"Please enter a valid email address.\";\r\n    } else if (!validatePhoneNumber(phoneField.value)) {\r\n      errorContainer.textContent = \"Please enter a valid phone number.\";\r\n    } else {\r\n      errorContainer.textContent = \"Please fill all the fields!\";\r\n    }\r\n\r\n    // Additional error message for quantity limit\r\n    let sum = 0;\r\n    quantityInputs.forEach((input) => {\r\n      sum += parseInt(input.value) || 0;\r\n    });\r\n\r\n    if (sum > quantityField) {\r\n      errorContainer.textContent = `The total quantity cannot exceed ${quantityField}. Please adjust your input.`;\r\n    }\r\n  }\r\n\r\n  let finalRoomNumber = 0;\r\n  let totalPersons = 0;\r\n\r\n  function updatePrice() {\r\n    finalRoomNumber = 0;\r\n    totalPersons = 0;\r\n    let finalPrice = 0;\r\n\r\n    const roomTypes = [\"single\", \"double\"];\r\n    let rooms = [];\r\n\r\n    quantityInputs.forEach((input, i) => {\r\n      rooms.push({\r\n        roomType: roomTypes[i],\r\n        roomNumber: input.value,\r\n      });\r\n    });\r\n\r\n    rooms.forEach((room) => {\r\n      finalPrice += Number(room.roomNumber) * Number(prices[room.roomType]);\r\n      finalRoomNumber += Number(room.roomNumber);\r\n\r\n      // Calculate total persons\r\n      if (room.roomType === \"single\") {\r\n        totalPersons += Number(room.roomNumber);\r\n      } else if (room.roomType === \"double\") {\r\n        totalPersons += Number(room.roomNumber) * 2;\r\n      }\r\n    });\r\n\r\n    if (finalRoomNumber !== 0 && validateForm()) {\r\n      termsContainer.classList.remove(\"hidden\");\r\n    } else {\r\n      // Reset Terms and PayPal Button State\r\n      // termsContainer.classList.add(\"hidden\");\r\n      termsCheckbox.checked = false;\r\n      paypalButton.classList.add(\"hidden\");\r\n    }\r\n\r\n    const depositAmount = finalPrice * 0.2;\r\n\r\n    // Format the prices with period as thousands separator and comma as decimal separator\r\n    const formattedFinalPrice = finalPrice.toLocaleString(\"de-DE\", {\r\n      minimumFractionDigits: 0,\r\n      maximumFractionDigits: 0,\r\n    });\r\n\r\n    const formattedDepositAmount = depositAmount.toLocaleString(\"de-DE\", {\r\n      minimumFractionDigits: 0,\r\n      maximumFractionDigits: 0,\r\n    });\r\n\r\n    // Update UI\r\n    document.getElementById(\"total-persons\").textContent = `${totalPersons}`;\r\n    document.getElementById(\r\n      \"room-price\"\r\n    ).textContent = `${formattedFinalPrice}€`;\r\n    document.getElementById(\r\n      \"deposit-amount\"\r\n    ).textContent = `${formattedDepositAmount}€`;\r\n\r\n    // Update Values\r\n    document.getElementById(\"booking-price\").value = finalPrice; // Hidden field\r\n    document.getElementById(\"deposit-price\").value = depositAmount; // Hidden\r\n\r\n    return [finalRoomNumber, totalPersons];\r\n  }\r\n\r\n  [finalRoomNumber, totalPersons] = updatePrice();\r\n\r\n  termsCheckbox.addEventListener(\"click\", (e) => {\r\n    if (validateForm()) {\r\n      errorContainer.textContent = \"\";\r\n      e.target.checked\r\n        ? paypalButton.classList.remove(\"hidden\")\r\n        : paypalButton.classList.add(\"hidden\");\r\n    } else {\r\n      showErrorMessages();\r\n      e.target.checked = false;\r\n\r\n      // Reset invalid quantity inputs to 0\r\n      let sum = 0;\r\n      quantityInputs.forEach((input) => {\r\n        sum += parseInt(input.value) || 0;\r\n      });\r\n\r\n      if (sum > quantityField) {\r\n        quantityInputs.forEach((input) => {\r\n          input.value = 0;\r\n        });\r\n        updatePrice(); // Recalculate price after resetting inputs\r\n      }\r\n    }\r\n  });\r\n\r\n  // Add event listeners\r\n  // document.querySelectorAll('input[name=\"type\"]').forEach((element) => {\r\n  //   element.addEventListener(\"change\", updatePrice);\r\n  // });\r\n\r\n  quantityInputs.forEach((input) => {\r\n    input.addEventListener(\"change\", updatePrice);\r\n  });\r\n\r\n  // Initialize PayPal button\r\n  paypal\r\n    .Buttons({\r\n      createOrder: function (data, actions) {\r\n        const form = document.getElementById(\"booking-form\");\r\n        const formData = new FormData(form);\r\n        const formObject = Object.fromEntries(formData.entries());\r\n\r\n        // Ensure deposit price is up to date\r\n        updatePrice();\r\n\r\n        return actions.order.create({\r\n          purchase_units: [\r\n            {\r\n              amount: {\r\n                value: formObject.deposit_price,\r\n              },\r\n            },\r\n          ],\r\n        });\r\n      },\r\n      onApprove: function (data, actions) {\r\n        return actions.order.capture().then(function (details) {\r\n          console.log(\r\n            \"Transaction completed by \" + details.payer.name.given_name\r\n          );\r\n          console.log(\"Transaction details: \", details);\r\n\r\n          // Gather form data and store it in local storage\r\n          const form = document.getElementById(\"booking-form\");\r\n          const formData = new FormData(form);\r\n          const formObject = Object.fromEntries(formData.entries());\r\n\r\n          localStorage.setItem(\"title\", JSON.stringify(title));\r\n          localStorage.setItem(\"roomsBooked\", JSON.stringify(finalRoomNumber));\r\n          localStorage.setItem(\"persons\", JSON.stringify(totalPersons));\r\n          localStorage.setItem(\"dates\", JSON.stringify([fromDate, toDate]));\r\n          localStorage.setItem(\"form_details\", JSON.stringify(formObject));\r\n          localStorage.setItem(\"transaction_details\", JSON.stringify(details));\r\n\r\n          // Redirect to thank you page\r\n          window.location.href = thankYouPageUrl;\r\n        });\r\n      },\r\n      onError: function (err) {\r\n        console.error(\"PayPal Checkout onError\", err);\r\n      },\r\n    })\r\n    .render(\"#paypal-button-container\");\r\n};\r\n\r\nsingleRetreat();\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/pages/singleRetreat.js?");

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