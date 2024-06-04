const singleRetreat = () => {
  console.log("Hello from Retreat Room");

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

  const errorContainer = document.querySelector(
    ".online-booking__error-message"
  );

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
  }

  let finalRoomNumber = 0;
  function updatePrice() {
    finalRoomNumber = 0;
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
    });

    const depositAmount = finalPrice * 0.2;

    // Format the prices with period as thousands separator and comma as decimal separator
    const formattedFinalPrice = finalPrice.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const formattedDepositAmount = depositAmount.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    document.getElementById(
      "room-price"
    ).textContent = `${formattedFinalPrice}€`; // UI
    document.getElementById(
      "deposit-amount"
    ).textContent = `${formattedDepositAmount}€`; // UI

    document.getElementById("booking-price").value = finalPrice; // Hidden field
    document.getElementById("deposit-price").value = depositAmount; // Hidden

    return finalRoomNumber;
  }

  termsCheckbox.addEventListener("click", (e) => {
    if (validateForm()) {
      errorContainer.textContent = "";
      e.target.checked
        ? paypalButton.classList.remove("hidden")
        : paypalButton.classList.add("hidden");
    } else {
      showErrorMessages();
      e.target.checked = false;
    }
  });

  // Add event listeners
  // document.querySelectorAll('input[name="type"]').forEach((element) => {
  //   element.addEventListener("change", updatePrice);
  // });

  quantityInputs.forEach((input) => {
    input.addEventListener("change", updatePrice);
  });

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
          localStorage.setItem("dates", JSON.stringify([fromDate, toDate]));
          localStorage.setItem("form_details", JSON.stringify(formObject));
          localStorage.setItem("transaction_details", JSON.stringify(details));

          // Redirect to thank you page
          window.location.href = thankYouPageUrl;
        });
      },
      onError: function (err) {
        console.error("PayPal Checkout onError", err);
      },
    })
    .render("#paypal-button-container");
};

singleRetreat();
