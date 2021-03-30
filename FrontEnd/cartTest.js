const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const address = document.getElementById('address');
const city = document.getElementById('city');
const zip = document.getElementById('zip');



function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-group col-md-6 form-group error'
    const small = formControl.querySelector('small')
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group col-md-6 form-group success'
}

function isValidEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    if(firstName.value === '') {
        showError(firstName, 'First name is required')
    } else {
        showSuccess(firstName)
    }
    if(lastName.value === '') {
        showError(lastName, 'Last name is required')
    } else {
        showSuccess(lastName)
    }
    if(email.value === '') {
        showError(email, 'Email is required')
    } else if (!isValidEmail(email.value)){
        showError(email, 'Email is not valid')
    } else {
        showSuccess(email)
    }
    if(password.value === '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password)
    }
    if(address.value === '') {
        showError(address, 'Address is required')
    } else {
        showSuccess(address)
    }
    if(city.value === '') {
        showError(city, 'City is required')
    } else {
        showSuccess(city)
    }
    if(zip.value === '') {
        showError(zip, 'ZIP code is required')
    } else {
        showSuccess(zip)
    }
}) 

