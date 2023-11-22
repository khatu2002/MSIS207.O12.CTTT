var user = document.getElementById("user");
var password = document.getElementById("pwd");
var eyeIcon = document.getElementById("eye-con");
var eye = document.getElementById("hide-eye");
var eyeSlash = document.getElementById("hide-eye-slash");
var login = document.getElementById("login");
var hello = document.getElementById("hello");

eyeIcon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eye.style.display = "block";
        eyeSlash.style.display = "none";

    } else {
        password.type = "password";
        eye.style.display = "none";
        eyeSlash.style.display = "none";
    }
}

function loginClick() {
    var name = document.querySelector("#user-name");
    login.style.display = 'none';
    hello.style.display = 'block';
    if (user.value != '') {
        name.innerHTML = user.value;
    }
    else {
        name.innerHTML = 'Not enter username';
    }
}
function logoutClick() {
    login.style.display = 'block';
    hello.style.display = 'none';
}