var user = document.getElementById("user");
var password = document.getElementById("pwd");
var eyeIcon = document.getElementById("eye-icon");
var eye = document.getElementById("hide-eye");
var eyeSlash = document.getElementById("hide-eye-slash");
var login = document.getElementById("login");
var hello = document.getElementById("hello");

eyeIcon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eye.style.display = "none";
        eyeSlash.style.display = "block";
    } else {
        password.type = "password";
        eye.style.display = "block";
        eyeSlash.style.display = "none";
    }
}

function validateCredentials(username, password) {
    // Check if the surname has extra spaces or contains special characters
    const surnameRegex = /^[a-zA-Z\s']*$/;
    if (!surnameRegex.test(username.trim())) {
        alert("Invalid Username. Surname should only contain letters and spaces.");
        return false;
    }

    // Check if the password contains special characters other than '@'
    const passwordRegex = /^[^\s@]+$/;
    if (!passwordRegex.test(password)) {
        alert("Invalid Password. Password should not contain special characters other than '@'.");
        return false;
    }

    // If both checks pass, return true indicating valid credentials
    return true;
}

function loginClick() {
    var name = document.querySelector("#user-name");
    login.style.display = 'none';
    hello.style.display = 'block';

    // Validate entered credentials
    if (validateCredentials(user.value, password.value)) {
        if (user.value != '') {
            name.innerHTML = user.value;
        } else {
            name.innerHTML = 'Not enter username';
        }
    } else {
        // Invalid credentials, show alert and reset password field
        alert("Invalid Name or Password.");
        password.value = '';
    }
}

function logoutClick() {
    login.style.display = 'block';
    hello.style.display = 'none';
}
