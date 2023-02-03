const form = document.querySelector('#form')
const fName = document.querySelector('#first-name')
const lName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {

    const fNameValue = fName.value.trim()
    const lNameValue = lName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if (fNameValue === '') {
        errorValidationFname(fName, 'Firts name cannot be empty')
    } else {
        return
    }

    if (lNameValue === '') {
        errorValidationLname(lName, 'Last name cannot be empty')
    } else {
        return
    }

    if (emailValue === '') {
        errorValidationEmail(email, 'Looks like this is not an email')
    } else {
        return
    }

    if (passwordValue === '') {
        errorValidationPassword(password, 'Password cannot be empty')
    } else {
        return
    }
}


function errorValidationFname(input, message) {
    const spanFname = document.querySelector('#requiredFname')
    spanFname.innerText = message
    fName.className = "error"
}

function errorValidationLname(input, message) {
    const spanLname = document.querySelector('#requiredLname')
    spanLname.innerText = message
    lName.className = "error"
}

function errorValidationEmail(input, message) {
    const spanEmail = document.querySelector('#requiredEmail')
    spanEmail.innerText = message
    email.className = 'error'
    email.placeholder = 'email@exemplo/com'
}

function errorValidationPassword(input, message) {
    const spanPassword = document.querySelector('#requiredPassword')
    spanPassword.innerText = message
    password.className= 'error'
}