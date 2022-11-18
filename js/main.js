let username = document.getElementById('name');
let password = document.getElementById('password');
let email = document.getElementById('address');
let result = document.createElement('span');
let signin = document.getElementById('signin')
result.style = "margin-left: -40px; color: red; margin-bottom: 13px";

signin.addEventListener('click', () => {
    localStorage["flag"] = false;
    localStorage["name"] = "";
    localStorage["password"] = "";
})

function signup() {
    if (username.value === "") {
        result.innerHTML = "User name required";
        username.insertAdjacentElement("afterend", result);
    }

    else if (password.value === "") {
        result.innerHTML = "Password required";
        password.insertAdjacentElement("afterend", result);
    }

    else if (email.value === "") {
        result.innerHTML = "Email address required";
        email.insertAdjacentElement("afterend", result);
    }

    else {
        localStorage["flag"] = true;
        localStorage["name"] = username.value;
        localStorage["password"] = password.value;
        window.location.href = "./loginForm.html";
    }
}

