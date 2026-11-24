/* Reusable Toast Notification Function */

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 3000);
}


/* Smooth Scrolling Function */

function scrollToBooking() {

    const bookingSection = document.getElementById("booking");

    if (bookingSection) {

        bookingSection.scrollIntoView({
            behavior: "smooth"
        });

        showToast("Redirecting to booking form!");
    }
}


/* Book Button Event Handling */

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        scrollToBooking();

    });
});


/* Ticket Prices */

const ticketPrices = {

    General: 4000,
    Premium: 7000,
    VIP: 10000

};


/* Select Booking Form Elements */

const matchSelect = document.getElementById("match");

const standSelect = document.getElementById("stand");

const quantityInput = document.getElementById("quantity");


/* Select Booking Summary Elements */

const summaryMatch = document.getElementById("summaryMatch");

const summaryStand = document.getElementById("summaryStand");

const summaryQuantity = document.getElementById("summaryQuantity");

const summaryTotal = document.getElementById("summaryTotal");


/* Function to Update Booking Summary */

function updateBookingSummary(showNotification = false) {

    if (!matchSelect || !standSelect || !quantityInput ||
        !summaryMatch || !summaryStand ||
        !summaryQuantity || !summaryTotal) {

        return;
    }

    const selectedMatch = matchSelect.value;

    const selectedStand = standSelect.value;

    const quantity = Number(quantityInput.value) || 0;

    const price = ticketPrices[selectedStand] || 0;

    const totalAmount = price * quantity;


    /* Display Selected Details */

    summaryMatch.textContent = selectedMatch || "Not Selected";

    summaryStand.textContent = selectedStand || "Not Selected";

    summaryQuantity.textContent = quantity;


    /* Display Total Price */

    summaryTotal.textContent =
        "₹" + totalAmount.toLocaleString("en-IN");


    /* Show Toast Notification */

    if (showNotification) {

        showToast("Booking summary updated successfully!");

    }

}


/* Match Dropdown Change Event */

if (matchSelect) {

    matchSelect.addEventListener("change", function () {

        updateBookingSummary(true);

    });

}


/* Stand Dropdown Change Event */

if (standSelect) {

    standSelect.addEventListener("change", function () {

        updateBookingSummary(true);

    });

}


/* Ticket Quantity Change Event */

if (quantityInput) {

    quantityInput.addEventListener("change", function () {

        updateBookingSummary(true);

    });

}


/* Update Summary When Quantity Is Typed */

if (quantityInput) {

    quantityInput.addEventListener("input", function () {

        updateBookingSummary();

    });

}


/* Display Initial Booking Summary */

updateBookingSummary();


/* Booking Form Submission */

const ticketForm = document.getElementById("ticketForm");

if (ticketForm) {

    ticketForm.addEventListener("submit", function (event) {

        event.preventDefault();

        showToast("Your ticket booking details submitted successfully!");

    });

}