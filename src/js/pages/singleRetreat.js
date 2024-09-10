const singleRetreat = () => {
  console.log("Hello from Retreat Rooms");

  // Read values from the main element's data attributes
  const main = document.querySelector(
    'main[data-barba-namespace="singleRetreat"]'
  );
  if (!main) return; // Exit if main element is not found

  const adminAjaxUrl = main.getAttribute("data-admin-url");
  const thankYouPageUrl = main.getAttribute("data-thank-you-page-url");
  const title = main.getAttribute("data-post-title");
  const prices = JSON.parse(main.getAttribute("data-prices"));
  const quantityField = parseInt(main.getAttribute("data-quantity"), 10);
  const fromDate = main.getAttribute("data-from-date");
  const toDate = main.getAttribute("data-to-date");
  const coupons = JSON.parse(main.getAttribute("data-coupons"));

  console.log(quantityField);

  // Assume we have a coupon object
  const coupon = { name: "CM2024", percentage: 20 };

  // Control Input Elements for Rooms
  const form = document.getElementById("booking-form");
  const quantityInputs = document.querySelectorAll(".quantity-input");
  const termsContainer = document.querySelector(
    ".online-booking__terms-container"
  );
  const termsCheckbox = document.querySelector(
    ".contact-form__acceptance-field"
  );
  const paypalButton = document.querySelector("#paypal-button-container");
  const submitButton = document.querySelector("#submit-button");

  const errorContainer = document.querySelector(
    ".online-booking__error-message"
  );

  const couponCodeInput = document.querySelector(
    ".online-booking__coupon-code"
  );
  const applyCouponButton = document.querySelector(
    ".online-booking__coupon-button"
  );
  const couponMessage = document.querySelector(
    ".online-booking__coupon-message"
  );

  const roomPriceElement = document.getElementById("room-price");
  const discountPriceElement = document.getElementById("discount-price");

  let couponRedeemed = false;
  let activeCoupon = null;

  function updateMaxValues() {
    let sum = 0;
    quantityInputs.forEach((input) => {
      sum += parseInt(input.value);
    });

    quantityInputs.forEach((input) => {
      const currentSum = sum - parseInt(input.value);
      const maxValue = quantityField - currentSum;
      input.max = maxValue;
    });
  }

  // Initialize
  updateMaxValues();

  // Listen for changes
  quantityInputs.forEach((input) => {
    input.addEventListener("input", function () {
      updateMaxValues();
      if (input.value === "") {
        input.value = 0; // Set to 0 if the input is empty
      }
    });
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhoneNumber(phone) {
    const re = /^\+?\d{9,15}$/;
    return re.test(String(phone));
  }

  function validateForm() {
    const requiredFields = form.querySelectorAll("input[required]");
    let isValid = true;
    let zeroRoomNumber = Array.from(quantityInputs).every(
      (input) => parseInt(input.value) === 0
    );
    isValid = zeroRoomNumber ? false : true;

    requiredFields.forEach((field) => {
      field.addEventListener("input", () => {
        termsCheckbox.checked = false;
        // paypalButton.classList.add("hidden");
        submitButton.classList.add("hidden");
      });
      if (!field.value.trim()) {
        isValid = false;
      }
    });

    const emailField = form.querySelector("input[name='email']");
    const phoneField = form.querySelector("input[name='tel']");

    if (!validateEmail(emailField.value)) {
      isValid = false;
    } else if (!validatePhoneNumber(phoneField.value)) {
      isValid = false;
    }

    // Check if the sum of quantities exceeds the maximum limit
    let sum = 0;
    quantityInputs.forEach((input) => {
      sum += parseInt(input.value) || 0;
    });

    if (sum > quantityField) {
      isValid = false;
    }

    return isValid;
  }

  function showErrorMessages() {
    const emailField = form.querySelector("input[name='email']");
    const phoneField = form.querySelector("input[name='tel']");

    if (!validateEmail(emailField.value)) {
      errorContainer.textContent = "Please enter a valid email address.";
    } else if (!validatePhoneNumber(phoneField.value)) {
      errorContainer.textContent = "Please enter a valid phone number.";
    } else {
      errorContainer.textContent = "Please fill all the fields!";
    }

    // Additional error message for quantity limit
    let sum = 0;
    quantityInputs.forEach((input) => {
      sum += parseInt(input.value) || 0;
    });

    if (sum > quantityField) {
      errorContainer.textContent = `The total quantity cannot exceed ${quantityField}. Please adjust your input.`;
    }
  }

  let finalRoomNumber = 0;
  let totalPersons = 0;
  let discountPrice = 0;

  function updatePrice() {
    finalRoomNumber = 0;
    totalPersons = 0;
    let finalPrice = 0;

    const roomTypes = ["single", "double"];
    let rooms = [];

    quantityInputs.forEach((input, i) => {
      rooms.push({
        roomType: roomTypes[i],
        roomNumber: input.value,
      });
    });

    rooms.forEach((room) => {
      finalPrice += Number(room.roomNumber) * Number(prices[room.roomType]);
      finalRoomNumber += Number(room.roomNumber);

      // Calculate total persons
      if (room.roomType === "single") {
        totalPersons += Number(room.roomNumber);
      } else if (room.roomType === "double") {
        totalPersons += Number(room.roomNumber) * 2;
      }
    });

    if (finalRoomNumber !== 0 && validateForm()) {
      termsContainer.classList.remove("hidden");
    } else {
      // Reset Terms and PayPal Button State
      // termsContainer.classList.add("hidden");
      termsCheckbox.checked = false;
      // paypalButton.classList.add("hidden");
      submitButton.classList.add("hidden");
    }

    // Apply coupon if redeemed
    if (couponRedeemed) {
      discountPrice = finalPrice * ((100 - activeCoupon.percentage) / 100);
      discountPriceElement.classList.remove("hidden");
      roomPriceElement.classList.add("strikethrough");
    } else {
      discountPrice = finalPrice;
      discountPriceElement.classList.add("hidden");
      roomPriceElement.classList.remove("strikethrough");
    }

    // const depositAmount = discountPrice * 0.2;
    const depositAmount = discountPrice;

    // Format the prices with period as thousands separator and comma as decimal separator
    const formattedFinalPrice = finalPrice.toLocaleString("de-DE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    const formattedDiscountPrice = discountPrice.toLocaleString("de-DE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    const formattedDepositAmount = depositAmount.toLocaleString("de-DE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    // Update UI
    document.getElementById("total-persons").textContent = `${totalPersons}`;
    document.getElementById(
      "room-price"
    ).textContent = `${formattedFinalPrice}€`;
    document.getElementById(
      "discount-price"
    ).textContent = `${formattedDiscountPrice}€`;
    document.getElementById(
      "deposit-amount"
    ).textContent = `${formattedDepositAmount}€`;

    // Update Values
    document.getElementById("booking-price").value = finalPrice; // Hidden field
    document.getElementById("discount-price-value").value = discountPrice; // Hidden field for discounted price
    document.getElementById("deposit-price").value = depositAmount; // Hidden

    return [finalRoomNumber, totalPersons];
  }

  [finalRoomNumber, totalPersons] = updatePrice();

  applyCouponButton.addEventListener("click", () => {
    if (couponRedeemed) {
      couponMessage.textContent = "Coupon already applied!";
      couponMessage.classList.remove("hidden");
      return;
    }

    const enteredCoupon = couponCodeInput.value.trim();
    const foundCoupon = coupons.find((coupon) => coupon.name === enteredCoupon);

    if (foundCoupon) {
      couponRedeemed = true;
      activeCoupon = foundCoupon;
      couponMessage.textContent = "Coupon applied successfully!";
      couponMessage.classList.remove("hidden");
      updatePrice();
    } else {
      couponMessage.textContent = "Invalid coupon code!";
      couponMessage.classList.remove("hidden");
    }
  });

  termsCheckbox.addEventListener("click", (e) => {
    if (validateForm()) {
      errorContainer.textContent = "";
      // e.target.checked
      //   ? paypalButton.classList.remove("hidden")
      //   : paypalButton.classList.add("hidden");

      e.target.checked
        ? submitButton.classList.remove("hidden")
        : submitButton.classList.add("hidden");
    } else {
      showErrorMessages();
      e.target.checked = false;

      // Reset invalid quantity inputs to 0
      let sum = 0;
      quantityInputs.forEach((input) => {
        sum += parseInt(input.value) || 0;
      });

      if (sum > quantityField) {
        quantityInputs.forEach((input) => {
          input.value = 0;
        });
        updatePrice(); // Recalculate price after resetting inputs
      }
    }
  });

  // Add event listeners
  // document.querySelectorAll('input[name="type"]').forEach((element) => {
  //   element.addEventListener("change", updatePrice);
  // });

  quantityInputs.forEach((input) => {
    input.addEventListener("change", updatePrice);
  });

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Ensure deposit price is up to date
    updatePrice();

    // Gather form data and store it in local storage
    const form = document.getElementById("booking-form");
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    localStorage.setItem("title", JSON.stringify(title));
    localStorage.setItem("roomsBooked", JSON.stringify(finalRoomNumber));
    localStorage.setItem("persons", JSON.stringify(totalPersons));
    localStorage.setItem("dates", JSON.stringify([fromDate, toDate]));
    localStorage.setItem("form_details", JSON.stringify(formObject));
    // localStorage.setItem("transaction_details", JSON.stringify(details));

    // Store coupon details
    if (couponRedeemed) {
      localStorage.setItem(
        "coupon",
        JSON.stringify({
          code: coupon.name,
          percentage: coupon.percentage,
          discountPrice: discountPrice,
        })
      );
    }

    // Redirect to thank you page
    window.location.href = thankYouPageUrl;
  });

  /*
  // Initialize PayPal button
  paypal
    .Buttons({
      createOrder: function (data, actions) {
        const form = document.getElementById("booking-form");
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());

        // Ensure deposit price is up to date
        updatePrice();

        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: formObject.deposit_price,
              },
            },
          ],
        });
      },
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          console.log(
            "Transaction completed by " + details.payer.name.given_name
          );
          console.log("Transaction details: ", details);

          // Gather form data and store it in local storage
          const form = document.getElementById("booking-form");
          const formData = new FormData(form);
          const formObject = Object.fromEntries(formData.entries());

          localStorage.setItem("title", JSON.stringify(title));
          localStorage.setItem("roomsBooked", JSON.stringify(finalRoomNumber));
          localStorage.setItem("persons", JSON.stringify(totalPersons));
          localStorage.setItem("dates", JSON.stringify([fromDate, toDate]));
          localStorage.setItem("form_details", JSON.stringify(formObject));
          localStorage.setItem("transaction_details", JSON.stringify(details));

          // Store coupon details
          if (couponRedeemed) {
            localStorage.setItem(
              "coupon",
              JSON.stringify({
                code: coupon.name,
                percentage: coupon.percentage,
                discountPrice: discountPrice,
              })
            );
          }

          // Redirect to thank you page
          window.location.href = thankYouPageUrl;
        });
      },
      onError: function (err) {
        console.error("PayPal Checkout onError", err);
      },
    })
    .render("#paypal-button-container");
*/
};
singleRetreat();
