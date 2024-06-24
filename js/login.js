document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple check for username and password
    if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        window.location.href = "/html/task.html"; // Redirect to index.html
    } else {
        document.getElementById("login-error").textContent = "Invalid username or password.";
    }
});
