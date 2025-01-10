function login() {
    var Username = 'admin'
    var Password = 'admin123'
    var Username = document.getElementById('user0').value
    var Password = document.getElementById('user1').value
    if (Username === Username && Password === Password) {
        window.location.href = "index.html"
    } else {
        alert('Incorrect password')
    }
}
document.getElementById('loginbttn').addEventListener('click', login)

