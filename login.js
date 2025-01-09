function login() {
    var username = document.getElementById("#user0").value;
    var password = document.getElementById("#password").value;

    //
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        
        window.location.href = "index.html"; 
    } else {
        alert("Invalid username or password.");
    }
}