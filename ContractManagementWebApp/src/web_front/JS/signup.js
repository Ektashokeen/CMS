document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
  
    form.addEventListener("submit", function(event) {
        // Reset previous error messages
        confirmPassword.classList.remove("error");
  
        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            event.preventDefault(); // Prevent form submission
            confirmPassword.classList.add("error");
            alert("Passwords do not match!");
        }
    });
  });