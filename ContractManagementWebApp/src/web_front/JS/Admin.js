document.addEventListener("DOMContentLoaded", function() {
    // Get references to the role selection elements and the admin options section
    const userButton = document.getElementById("user");
    const adminButton = document.getElementById("admin");
    const adminOptions = document.querySelector(".admin-options");

    // Function to handle role selection changes
    function handleRoleChange() {
        if (adminButton.checked) {
            adminOptions.style.display = "block";
        } else {
            adminOptions.style.display = "none";
        }
    }

    // Add event listeners for role change
    userButton.addEventListener("change", handleRoleChange);
    adminButton.addEventListener("change", handleRoleChange);

    // Initialize the form display state based on the default selected role
    handleRoleChange();
});