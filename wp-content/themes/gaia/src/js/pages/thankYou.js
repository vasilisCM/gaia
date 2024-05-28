const formDetails = JSON.parse(localStorage.getItem("form_details"));
const transactionDetails = JSON.parse(
  localStorage.getItem("transaction_details")
);
const title = JSON.parse(localStorage.getItem("title"));
const dates = JSON.parse(localStorage.getItem("dates"));

const [fromDate, toDate] = dates;

// console.log("title", title);
// console.log("dates", fromDate, toDate);
// console.log("Form Details:", formDetails);
// console.log("Transaction Details:", transactionDetails);

const {
  price,
  name: firstName,
  last_name: lastName,
  email,
  tel,
  type,
  quantity,
} = formDetails;

const paypalEmail = transactionDetails.payer.email_address;
const paypalAmount = transactionDetails.purchase_units[0].amount.value;

if (formDetails && transactionDetails) {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
      <h3>Summary</h3>
      <div>${title}</div>
      <div>${fromDate} to ${toDate}</div>
      <div>First Name: ${firstName}</div>
      <div>Email: ${email}</div>
      <div>Tel: ${tel}</div>
      <div>Room Type: ${type.charAt(0).toUpperCase() + type.slice(1)}</div>
      <div>Persons: ${quantity}</div>
      <div>Total Price: ${price}€</div>
      <h3>Transaction Details</h3>
      <div>PayPal Email: ${paypalEmail}</div>
      <div>Deposit Paid: ${paypalAmount}€</div>
    `;

  // Send email with booking details
  fetch(thankyou_ajax_obj.ajax_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      action: "send_booking_email",
      security: thankyou_ajax_obj.nonce,
      title: title,
      fromDate: fromDate,
      toDate: toDate,
      firstName: firstName,
      lastName: lastName,
      email: email,
      tel: tel,
      type: type,
      quantity: quantity,
      price: price,
      paypalEmail: paypalEmail,
      paypalAmount: paypalAmount,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    })
    .catch((error) => console.error("Error:", error));
}
