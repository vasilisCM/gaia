const formDetails = JSON.parse(localStorage.getItem("form_details"));
const transactionDetails = JSON.parse(
  localStorage.getItem("transaction_details")
);
const title = JSON.parse(localStorage.getItem("title"));
const dates = JSON.parse(localStorage.getItem("dates"));
const persons = JSON.parse(localStorage.getItem("persons"));
const roomsBooked = JSON.parse(localStorage.getItem("roomsBooked"));
const coupon = JSON.parse(localStorage.getItem("coupon"));

const [fromDate, toDate] = dates;

// console.log(formDetails);

const {
  price,
  name: firstName,
  last_name: lastName,
  email,
  tel,
  quantity_double: quantityDouble,
  quantity_single: quantitySingle,
  room_id: roomId,
} = formDetails;

console.log(formDetails);

// const paypalEmail = transactionDetails.payer.email_address;
// const paypalAmount = transactionDetails.purchase_units[0].amount.value;

async function sendEmail() {
  try {
    const response = await fetch(thankyou_ajax_obj.ajax_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        action: "send_booking_email",
        security: thankyou_ajax_obj.send_booking_email_nonce,
        title: title,
        fromDate: fromDate,
        toDate: toDate,
        firstName: firstName,
        lastName: lastName,
        email: email,
        tel: tel,
        persons: persons,
        quantitySingle: quantitySingle,
        quantityDouble: quantityDouble,
        price: price,
        // paypalEmail: paypalEmail,
        // paypalAmount: paypalAmount,
        couponCode: coupon ? coupon.code : "",
        discountPercentage: coupon ? coupon.percentage : "",
        discountPrice: coupon ? coupon.discountPrice : "",
      }),
    });

    const data = await response.json();
    if (data.success) {
      console.log("Email sent successfully");
      localStorage.removeItem("transaction_details");
      localStorage.removeItem("form_details");
      localStorage.removeItem("coupon");
    } else {
      console.error("Failed to send email");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateACF() {
  try {
    const response = await fetch(thankyou_ajax_obj.ajax_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        action: "update_acf_quantity",
        security: thankyou_ajax_obj.update_acf_quantity_nonce,
        post_id: roomId,
        roomsBooked: roomsBooked,
      }),
    });

    const data = await response.json();
    if (data.success) {
      console.log("ACF field updated successfully");
      localStorage.removeItem("roomsBooked");
      localStorage.removeItem("persons");
    } else {
      console.error("Failed to update ACF field");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

if (formDetails) {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
      <h3>Summary</h3>
      <div>Retreat: <strong>${title}</strong></div>
      <div>Dates: <strong>${fromDate} to ${toDate}</strong></div>
      <div>First Name: <strong>${firstName}</strong></div>
      <div>Last Name: <strong>${lastName}</strong></div>
      <div>Email: <strong>${email}</strong></div>
      <div>Tel: <strong>${tel}</strong></div>
      <div>Persons: <strong>${persons}</strong></div>
      ${
        quantitySingle
          ? `<div><strong>${quantitySingle}</strong> single ${
              Number(quantitySingle) === 1 ? "room" : "rooms"
            }</div>`
          : ""
      }
      ${
        quantityDouble
          ? `<div><strong>${quantityDouble}</strong> double ${
              Number(quantityDouble) === 1 ? "room" : "rooms"
            }</div>`
          : ""
      }
      <div>Total Amount: <strong>${price}€</strong></div>

          ${
            coupon
              ? `<div>Coupon Code: <strong>${coupon.code}</strong></div>
             <div>Discount Percentage: <strong>${coupon.percentage}%</strong></div>
             <div>Discounted Price: <strong>${coupon.discountPrice}€</strong></div>`
              : ""
          }


    `;

  // Run both functions independently
  sendEmail();
  updateACF();
}
