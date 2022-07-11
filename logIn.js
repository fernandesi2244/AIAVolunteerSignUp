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
    // Go to viewMyTimeslots.html if the user is already logged in.
    if (sessionStorage.getItem("status") === "loggedIn") {
        window.location.href = "viewMyTimeslots.html";
        return;
    }
    // Autofill the email field with the user's email if they have logged in previously.
    const localStorageEmail = localStorage.getItem("userEmail");
    if (localStorageEmail !== null) {
        const emailInput = document.getElementById("email");
        emailInput.value = localStorageEmail;
    }
}

/**
 * Function that is called when the user clicks the log in button.
 * Grabs the email and password from the form and checks whether
 * the account exists. If it does, the user is logged in and
 * redirected to their . Else,
 * the user is notified with an alert.
 */
function handleSubmitBtnClick() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (signIn(email, password)) {
        alert(`Welcome back ${email}!`);
        localStorage.setItem("userEmail", email);
        sessionStorage.setItem("status", "loggedIn");
        window.location.href = "viewMyTimeslots.html";
    }
    else
        alert("Invalid email or password. Please try again!");
}

/**
 * Validate the given email and password in the user database.
 * @param {*} email the entered email
 * @param {*} password the entered password
 * @returns whether or not the user with the given email and password exists
 */
function signIn(email, password) {
    return email === "admin@gmail.com" && password === "admin";
}
