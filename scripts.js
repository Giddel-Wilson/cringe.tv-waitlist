function removeEmailInput() {
    var emailInput = document.querySelector('input[type="email"]');
    emailInput.remove();
}
document.querySelector('button[type="submit"]').addEventListener('click', removeEmailInput);
