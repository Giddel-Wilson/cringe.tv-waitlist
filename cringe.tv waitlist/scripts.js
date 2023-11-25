function removeEmailInput() {
    // Get the email input element
    var emailInput = document.querySelector('input[type="email"]');

    // Remove the element from the DOM
    emailInput.remove();
}

// Add an event listener to the form submit button
document.querySelector('button[type="submit"]').addEventListener('click', removeEmailInput);