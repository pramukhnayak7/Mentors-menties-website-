function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        window.location.href = "mentor.html";
    } else {
        document.getElementById("message").innerText = "Invalid username or password";
    }
}
