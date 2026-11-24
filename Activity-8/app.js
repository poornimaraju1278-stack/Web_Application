
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


/* Booking Form Elements */

const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");


/* Booking Summary Elements */

const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryTotal = document.getElementById("summaryTotal");


/* Update Booking Summary */

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

    summaryMatch.textContent = selectedMatch || "Not Selected";
    summaryStand.textContent = selectedStand || "Not Selected";
    summaryQuantity.textContent = quantity;

    summaryTotal.textContent =
        "₹" + totalAmount.toLocaleString("en-IN");

    if (showNotification) {
        showToast("Booking summary updated successfully!");
    }
}


/* Booking Dropdown Events */

if (matchSelect) {
    matchSelect.addEventListener("change", function () {
        updateBookingSummary(true);
    });
}

if (standSelect) {
    standSelect.addEventListener("change", function () {
        updateBookingSummary(true);
    });
}

if (quantityInput) {

    quantityInput.addEventListener("change", function () {
        updateBookingSummary(true);
    });

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


/* Mobile Hamburger Menu */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("active");

        const isOpen = mainNav.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    /* Close Menu After Clicking a Navigation Link */

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });
}


/* Team Filter */

const teamFilter = document.getElementById("teamFilter");

const matchCards = document.querySelectorAll(".match-card");

const noMatches = document.getElementById("noMatches");


function filterMatches() {

    if (!teamFilter) {
        return;
    }

    const selectedTeam = teamFilter.value;

    let visibleCount = 0;

    matchCards.forEach(function (card) {

        const teams = card.dataset.team.split(" ");

        const show =
            selectedTeam === "all" || teams.includes(selectedTeam);

        card.style.display = show ? "" : "none";

        if (show) {
            visibleCount++;
        }

    });

    if (noMatches) {
        noMatches.hidden = visibleCount > 0;
    }

}


/* Team Filter Event */

if (teamFilter) {

    teamFilter.addEventListener("change", filterMatches);

}


/* Grid and List View */

const matchesContainer = document.getElementById("matchesContainer");

const gridViewBtn = document.getElementById("gridViewBtn");

const listViewBtn = document.getElementById("listViewBtn");


/* Grid View Button */

if (gridViewBtn && matchesContainer && listViewBtn) {

    gridViewBtn.addEventListener("click", function () {

        matchesContainer.classList.remove("list-view");

        gridViewBtn.classList.add("active-view");

        listViewBtn.classList.remove("active-view");

    });

}


/* List View Button */

if (listViewBtn && matchesContainer && gridViewBtn) {

    listViewBtn.addEventListener("click", function () {

        matchesContainer.classList.add("list-view");

        listViewBtn.classList.add("active-view");

        gridViewBtn.classList.remove("active-view");

    });

}


/* End of Activity 08 JavaScript */