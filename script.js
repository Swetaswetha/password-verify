var namee = document.getElementById("username")
var nameError = document.getElementById("nameError")
var password = document.getElementById("password")
var passworderror = document.getElementById("passworderror")
var repassword = document.getElementById("repassword")
var repassworderror = document.getElementById("repassworderror")
var submiterror = document.getElementById("submiterror")
var btn = document.getElementById("btn")

btn.addEventListener("click", function (event) {
    event.preventDefault();

    var validateusername = /^[0-9A-Za-z]{6,16}$/

    if (namee.value === "") {
        nameError.textContent = "Enter Username"
    }
    else if (!validateusername.test(namee.value)) {
        nameError.textContent = "Enter Valid Username"
    }
    else {
        nameError.textContent = ""
    }

    var validpassword = /^(?=.?[0-9])(?=.?[A-Za-z]).{8,32}$/

    if (password.value == "") {
        passworderror.textContent = "Enter Password"
    }
    else if (!validpassword.test(password.value)) {
        passworderror.textContent = ""
    }
    else {
        passworderror.textContent = ""
    }

    if (repassword.value == "") {
        repassworderror.textContent = "Enter Confirm Password"
    }
    else if (password.value !== repassword.value) {
        submiterror.textContent = "Password doesn't match"
        repassworderror.textContent = "Enter Correct password"
    }
    else {
        repassworderror.textContent = ""
        submiterror.textContent = "Password verified Form Submitted"
        submiterror.style.color = "green"
        form.reset()
    }
})