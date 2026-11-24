
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


/* Booking Form Submission */

const ticketForm = document.getElementById("ticketForm");

if (ticketForm) {

    ticketForm.addEventListener("submit", function (event) {

        event.preventDefault();

        showToast("Your ticket booking details submitted successfully!");

    });

}