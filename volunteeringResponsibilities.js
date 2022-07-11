"use-strict";

/**
 * Handles the logic for the log in page.
 */

document.addEventListener("DOMContentLoaded", startUp());

/**
 * Runs any code that needs to be run when the page loads.
 * @returns {undefined}
 */
function startUp() {
    if (sessionStorage.getItem("status") === "loggedIn") {
        const logInTab = document.getElementById("logInTab");
        logInTab.style.display = "none";
    }
    else {
        const profileTab = document.getElementById("profileTab");
        profileTab.style.display = "none";
    }
}
