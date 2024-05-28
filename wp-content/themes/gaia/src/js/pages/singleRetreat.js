const singleRetreat = () => {
  console.log("Hello from Retreat Room");

  function updatePrice() {
    const roomType = document.querySelector('input[name="type"]:checked').value;
    const quantityElement = document.querySelector('input[name="quantity"]');
    let quantity = quantityElement.value;

    // Ensure quantity is at least 1
    if (quantity < 1) quantity = 1;

    // const prices = {
    //   single: 15800,
    //   double: 9500,
    // };

    const room = {
      type: roomType,
      price: prices[roomType],
    };

    const finalPrice = room.price * quantity;
    const depositAmount = finalPrice * 0.2;

    document.getElementById("room-price").textContent = `${finalPrice}€`; // UI
    document.getElementById(
      "deposit-amount"
    ).textContent = `${depositAmount.toFixed(2)}€`; // UI

    document.getElementById("booking-price").value = finalPrice; // Hidden field
    document.getElementById("deposit-price").value = depositAmount.toFixed(2); // Hidden
  }

  // Add event listeners
  document.querySelectorAll('input[name="type"]').forEach((element) => {
    element.addEventListener("change", updatePrice);
  });
  document
    .querySelector('input[name="quantity"]')
    .addEventListener("change", updatePrice);

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
