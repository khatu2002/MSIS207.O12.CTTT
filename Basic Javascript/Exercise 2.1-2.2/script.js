document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', () => {
        event.preventDefault();
        submitButton.value = 'Submitted!';
    });
});

// const eye = document.querySelector("#eye");
// const password = document.querySelector("input[type='password']");

// eye.addEventListener("click", () => {
//     if (password.getAttribute("type") === "password") {
//         password.setAttribute("type", "text");
//         eye.classList.add("fa-eye-slash");
//     } else {
//         password.setAttribute("type", "password");
//         eye.classList.remove("fa-eye-slash");
//     }
// });