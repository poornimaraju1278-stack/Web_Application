
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
    } else {
        window.location.href = "booking.html";
    }
}


/* Book Button Event Handling */

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        const bookingSection = document.getElementById("booking");

        if (bookingSection) {
            event.preventDefault();
            scrollToBooking();
        }
    });
});


/* Ticket Prices */

const ticketPrices = {
    General: 4000,
    Premium: 7000,
    VIP: 10000
};


/* Booking Form Elements */

const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");

const quantityInput =
    document.getElementById("quantity") ||
    document.getElementById("tickets");


/* Booking Summary Elements */

const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryTotal = document.getElementById("summaryTotal");


/* Update Booking Summary */

function updateBookingSummary(showNotification = false) {
    if (!matchSelect || !standSelect || !quantityInput) {
        return;
    }

    const selectedMatch = matchSelect.value;
    const selectedStand = standSelect.value;

    let quantity = Number(quantityInput.value) || 0;

    if (quantity < 0) {
        quantity = 0;
    }

    const price = ticketPrices[selectedStand] || 0;
    const totalAmount = price * quantity;

    if (summaryMatch) {
        summaryMatch.textContent =
            selectedMatch || "Not Selected";
    }

    if (summaryStand) {
        summaryStand.textContent =
            selectedStand || "Not Selected";
    }

    if (summaryQuantity) {
        summaryQuantity.textContent = quantity;
    }

    if (summaryTotal) {
        summaryTotal.textContent =
            "₹" + totalAmount.toLocaleString("en-IN");
    }

    if (showNotification && summaryMatch && summaryTotal) {
        showToast("Booking summary updated successfully!");
    }
}


/* Match Dropdown Change */

if (matchSelect) {
    matchSelect.addEventListener("change", function () {
        updateBookingSummary(true);
    });
}


/* Stand Dropdown Change */

if (standSelect) {
    standSelect.addEventListener("change", function () {
        updateBookingSummary(true);
    });
}


/* Ticket Quantity Change */

if (quantityInput) {
    quantityInput.addEventListener("input", function () {
        updateBookingSummary();
    });
}


/* Booking Form Submission */

const ticketForm = document.getElementById("ticketForm");

if (ticketForm) {
    ticketForm.addEventListener("submit", function (event) {
        event.preventDefault();

        updateBookingSummary();

        showToast("Your ticket booking details submitted successfully!");
    });
}


/* Reset Booking Form */

if (ticketForm) {
    ticketForm.addEventListener("reset", function () {
        setTimeout(function () {
            updateBookingSummary();
        }, 0);
    });
}


/* Display Initial Booking Summary */

updateBookingSummary();
