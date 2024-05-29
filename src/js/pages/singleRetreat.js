const singleRetreat = () => {
  console.log("Hello from Retreat Room");

  // Control Input Elements for Rooms
  const quantityInputs = document.querySelectorAll(".quantity-input");

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

  function updatePrice() {
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
    });

    const depositAmount = finalPrice * 0.2;
    // console.log(depositAmount);

    document.getElementById("room-price").textContent = `${finalPrice}€`; // UI
    document.getElementById(
      "deposit-amount"
    ).textContent = `${depositAmount.toFixed(2)}€`; // UI

    document.getElementById("booking-price").value = finalPrice; // Hidden field
    document.getElementById("deposit-price").value = depositAmount.toFixed(2); // Hidden
  }

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
