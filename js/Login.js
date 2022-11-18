let head = document.getElementById('top');
if ((localStorage['flag']) == 'true'){
    head.innerHTML = `Hello <span style="color: rgb(160, 160, 23);"> ${localStorage["name"]}!</span>`;
}
let username = document.getElementById('user');
let correctuser = localStorage["name"];
let correctpassword = localStorage["password"];
let password = document.getElementById('password');
let result = document.createElement('span');
result.style = "margin-left: -40px; color: red; margin-bottom: 13px";

function Login() {
    if (username.value === "") {
        result.innerHTML = "User name required";
        username.insertAdjacentElement("afterend", result);
    }

    else if (password.value === "") {
        result.innerHTML = "Password required";
        password.insertAdjacentElement("afterend", result);
    }

    else if (username.value == correctuser && password.value == correctpassword) {
        // result.innerHTML = "Login Successful";
        // username.insertAdjacentElement("beforebegin", result);
        window.location.href = "../Lab 14/index.html";
    }

    else {
        result.innerHTML = "Incorrect username or password!";
        username.insertAdjacentElement("beforebegin", result);
    }
}
