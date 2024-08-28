document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const forgetPasswordLink = document.querySelector(".gap");
  
    form.addEventListener("submit", function(event) {
        // Basic validation to check if fields are not empty
        if (email.value === "" || password.value === "") {
            event.preventDefault(); // Prevent form submission
            alert("Please fill in both the email and password fields.");
        }
    });
  
    forgetPasswordLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        alert("Redirecting to password recovery...");
        // Here you can add logic to redirect to a password recovery page or open a modal
    });
  });