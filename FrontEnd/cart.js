
// Getting product from local storage
let products =  localStorage.getItem('products')

// Converting json string to JS obj
let produtsArray = JSON.parse(products)



document.addEventListener('load',displayCart())

// Displaying cart
function displayCart (){

    updateCartNumber()

    let parent = document.getElementById("my-cart")
    parent.innerHTML = '';
    produtsArray.forEach(element => {
         parent.insertAdjacentHTML('beforeend', `
            <tr class="col-sm">
                <th class="text-left" scope="row"><img src="${element.imageUrl}" width="40px" height="40px"
                class="mr-4 cart-pic" alt="A camera" id="cartItem">${element.name}</th>
                <td class="text-center">${element.lenses[0]}</td>
                <td class="input-group justify-content-center">
                    <button class="input-group-prepend btn btn-minus btn-danger" onclick="minus('${element.name}')">-</button>
                        <input class="input-group-text input-st quantity" id="${element.name}" type="text" value="1">
                    <button class="btn btn-plus btn-success" onclick="plus('${element.name}')">+</button>
                </td>
                <td class="text-center price" id="${element.name + 'price'}" data-price = "${element.price}">${element.price}</td>
                <td class="text-right id="${element.name}"><button type="button" class="btn btn-danger" onclick="Remove('${element._id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                 <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                 <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg></button></td>
            </tr>
            `)
    });
     calculateTotal()

}

// Updating cart number
function updateCartNumber(){
    let cartIndex = document.getElementById('cart-index')
    cartIndex.innerText = produtsArray != null ? produtsArray.length : 0  // Ternary operator (if else in single line)
}


let quantityCount

let price = document.querySelectorAll('.price').innerText

// Calculating total price
function calculateTotal(){

    let total = 0 
    const allPrice = [...document.getElementsByClassName('price')] // Rest parameters
    allPrice.forEach(item=>{
        total += Number.parseInt(item.innerText)                   // Parsing string to integer
    })
let totalDiv = document.getElementById('total-price')

totalDiv.innerText = total

}


// Plus button
function plus(id){
    quantityCount = document.getElementById(id).value
    quantityCount ++
    document.getElementById(id).value = quantityCount
    let price = document.getElementById(id +'price').dataset.price
    let totalQuantity = price * quantityCount

document.getElementById(id + 'price').innerText = totalQuantity
calculateTotal()
}

let btnMinus = document.getElementsByClassName('btn-minus')

// Minus button
function minus(id){

console.log(id)
    quantityCount = document.getElementById(id).value
    if (quantityCount <= 0) {
        btnMinus.disabled = true 
        return
    } else {
        btnMinus.disabled = false 
    }
    quantityCount --
    
    document.getElementById(id).value = quantityCount
    let price = document.getElementById(id +'price').dataset.price
    console.log(price)
    let totalQuantity = price * quantityCount

    
document.getElementById(id + 'price').innerText = totalQuantity


calculateTotal()
}

// Remove button
function Remove(id){    
   let index 
    produtsArray.forEach((element ,item) => {

    if  (element._id == id ){
        index = item
        return
    } 
       
   });
    
   produtsArray.splice(index,1)
   localStorage.setItem('products', JSON.stringify(produtsArray));
    displayCart() 
    updateCartNumber()
    calculateTotal()
}

// Form validations

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');



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
    if (firstName.value === '' || lastName.value === '' || email.value === '' || !isValidEmail(email.value) || city.value === '' || address.value === ''){

        return
    } else {

    // Mapping each element to new array
    let pd = produtsArray.map(item => item._id )
    let data = {
        contact : {
            firstName : firstName.value ,
            lastName : lastName.value, 
            email :email.value,
            city : city.value ,
            address : address.value
        }, 
        products: pd
    }
            // Sending object (using fetch) 
            fetch('http://localhost:3000/api/cameras/order', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(data)
            }).then(function (response) {
                return response.json()
            }).then(function(datas) {
                localStorage.setItem('order', JSON.stringify(datas))
                window.location.href = "order-confirmation.html"
            }).catch(function (error) {
                console.log(error)
            })             
}
}) 

