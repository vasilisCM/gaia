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

/***/ "./src/js/pages/thankYou.js":
/*!**********************************!*\
  !*** ./src/js/pages/thankYou.js ***!
  \**********************************/
/***/ (() => {

eval("const formDetails = JSON.parse(localStorage.getItem(\"form_details\"));\r\nconst transactionDetails = JSON.parse(\r\n  localStorage.getItem(\"transaction_details\")\r\n);\r\nconst title = JSON.parse(localStorage.getItem(\"title\"));\r\nconst dates = JSON.parse(localStorage.getItem(\"dates\"));\r\nconst persons = JSON.parse(localStorage.getItem(\"persons\"));\r\nconst roomsBooked = JSON.parse(localStorage.getItem(\"roomsBooked\"));\r\nconst coupon = JSON.parse(localStorage.getItem(\"coupon\"));\r\n\r\nconst [fromDate, toDate] = dates;\r\n\r\n// console.log(formDetails);\r\n\r\nconst {\r\n  price,\r\n  name: firstName,\r\n  last_name: lastName,\r\n  email,\r\n  tel,\r\n  quantity_double: quantityDouble,\r\n  quantity_single: quantitySingle,\r\n  room_id: roomId,\r\n} = formDetails;\r\n\r\nconsole.log(formDetails);\r\n\r\n// const paypalEmail = transactionDetails.payer.email_address;\r\n// const paypalAmount = transactionDetails.purchase_units[0].amount.value;\r\n\r\nasync function sendEmail() {\r\n  try {\r\n    const response = await fetch(thankyou_ajax_obj.ajax_url, {\r\n      method: \"POST\",\r\n      headers: {\r\n        \"Content-Type\": \"application/x-www-form-urlencoded\",\r\n      },\r\n      body: new URLSearchParams({\r\n        action: \"send_booking_email\",\r\n        security: thankyou_ajax_obj.send_booking_email_nonce,\r\n        title: title,\r\n        fromDate: fromDate,\r\n        toDate: toDate,\r\n        firstName: firstName,\r\n        lastName: lastName,\r\n        email: email,\r\n        tel: tel,\r\n        persons: persons,\r\n        quantitySingle: quantitySingle,\r\n        quantityDouble: quantityDouble,\r\n        price: price,\r\n        // paypalEmail: paypalEmail,\r\n        // paypalAmount: paypalAmount,\r\n        couponCode: coupon ? coupon.code : \"\",\r\n        discountPercentage: coupon ? coupon.percentage : \"\",\r\n        discountPrice: coupon ? coupon.discountPrice : \"\",\r\n      }),\r\n    });\r\n\r\n    const data = await response.json();\r\n    if (data.success) {\r\n      console.log(\"Email sent successfully\");\r\n      localStorage.removeItem(\"transaction_details\");\r\n      localStorage.removeItem(\"form_details\");\r\n      localStorage.removeItem(\"coupon\");\r\n    } else {\r\n      console.error(\"Failed to send email\");\r\n    }\r\n  } catch (error) {\r\n    console.error(\"Error:\", error);\r\n  }\r\n}\r\n\r\nasync function updateACF() {\r\n  try {\r\n    const response = await fetch(thankyou_ajax_obj.ajax_url, {\r\n      method: \"POST\",\r\n      headers: {\r\n        \"Content-Type\": \"application/x-www-form-urlencoded\",\r\n      },\r\n      body: new URLSearchParams({\r\n        action: \"update_acf_quantity\",\r\n        security: thankyou_ajax_obj.update_acf_quantity_nonce,\r\n        post_id: roomId,\r\n        roomsBooked: roomsBooked,\r\n      }),\r\n    });\r\n\r\n    const data = await response.json();\r\n    if (data.success) {\r\n      console.log(\"ACF field updated successfully\");\r\n      localStorage.removeItem(\"roomsBooked\");\r\n      localStorage.removeItem(\"persons\");\r\n    } else {\r\n      console.error(\"Failed to update ACF field\");\r\n    }\r\n  } catch (error) {\r\n    console.error(\"Error:\", error);\r\n  }\r\n}\r\n\r\nif (formDetails) {\r\n  const detailsContainer = document.getElementById(\"details-container\");\r\n  detailsContainer.innerHTML = `\r\n      <h3>Summary</h3>\r\n      <div>Retreat: <strong>${title}</strong></div>\r\n      <div>Dates: <strong>${fromDate} to ${toDate}</strong></div>\r\n      <div>First Name: <strong>${firstName}</strong></div>\r\n      <div>Last Name: <strong>${lastName}</strong></div>\r\n      <div>Email: <strong>${email}</strong></div>\r\n      <div>Tel: <strong>${tel}</strong></div>\r\n      <div>Persons: <strong>${persons}</strong></div>\r\n      ${\r\n        quantitySingle\r\n          ? `<div><strong>${quantitySingle}</strong> single ${\r\n              Number(quantitySingle) === 1 ? \"room\" : \"rooms\"\r\n            }</div>`\r\n          : \"\"\r\n      }\r\n      ${\r\n        quantityDouble\r\n          ? `<div><strong>${quantityDouble}</strong> double ${\r\n              Number(quantityDouble) === 1 ? \"room\" : \"rooms\"\r\n            }</div>`\r\n          : \"\"\r\n      }\r\n      <div>Total Amount: <strong>${price}€</strong></div>\r\n\r\n          ${\r\n            coupon\r\n              ? `<div>Coupon Code: <strong>${coupon.code}</strong></div>\r\n             <div>Discount Percentage: <strong>${coupon.percentage}%</strong></div>\r\n             <div>Discounted Price: <strong>${coupon.discountPrice}€</strong></div>`\r\n              : \"\"\r\n          }\r\n\r\n\r\n    `;\r\n\r\n  // Run both functions independently\r\n  sendEmail();\r\n  updateACF();\r\n}\r\n\n\n//# sourceURL=webpack://boilerplate/./src/js/pages/thankYou.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/pages/thankYou.js"]();
/******/ 	
/******/ })()
;