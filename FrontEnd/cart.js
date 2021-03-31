
// Trying display items in cart
//document.addEventListener('load', displayCart())

let products =  localStorage.getItem('products')
let produtsArray = JSON.parse(products)
console.log(produtsArray)


document.addEventListener('load',displayCart())
function displayCart (){
    updateCartNumber()

    let parent = document.getElementById("my-cart")
    parent.innerHTML = '';
    produtsArray.forEach(element => {
         parent.insertAdjacentHTML('beforeend', `
            <tr>
                <th class="text-left" scope="row"><img src="${element.imageUrl}" width="40px" height="40px"
                class="mr-4 cart-pic" alt="A camera" id="cartItem">${element.name}</th>
                <td class="text-center">${element.lenses[0]}</td>
                <td class="input-group justify-content-center">
                    <button class="input-group-prepend btn btn-minus disabled btn-danger" onclick="minus('${element.name}')">-</button>
                    <input class="input-group-text input-st quantity" id="${element.name}" type="text" value="1">
                    <button class="btn btn-plus btn-success" onclick="plus('${element.name}')">+</button>
                </td>
                <td class="text-center price" id="${element.name + 'price'}" data-price = "${element.price}">${element.price}</td>
                <td class="text-right id="${element.name}"><button type="button" class="btn btn-danger" onclick="Remove('${element._id}')">Remove</button></td>
             </tr>
            `)
    });
     calculateTotal()

}


// let obj = {
//     contact : {
//         firstName : document.getElementById('firstName').value ,
//         lastName : document.getElementById('lastName').value,
// },
//     products : ['1','2']
// }
//  Trying change cart icon counter number

function updateCartNumber(){
let cartIndex = document.getElementById('cart-index')
cartIndex.innerText = produtsArray.length

}

// Plus - minus quantity counter (it is partly working if there is no error before this)
// document.querySelector('.btn-minus').setAttribute('disabled', 'disabled')

let quantityCount

let price = document.querySelectorAll('.price').innerText

// function quantityPrice(id){
//     quantityCount = document.getElementById(id).value
//     if (quantityCount < 0){
//         quantityCount = 0
//     }
//     let totalQuantity = price * quantityCount
//     document.getElementById(id + 'price').innerText = totalQuantity
// }

function calculateTotal(){

    let total = 0 
    const allPrice = [...document.getElementsByClassName('price')]
    allPrice.forEach(item=>{
        total += Number.parseInt( item.innerText)
    })
let totalDiv = document.getElementById('total-price')

totalDiv.innerText = total

}

function plus(id){

console.log(id)
     quantityCount = document.getElementById(id).value
    quantityCount ++
    document.getElementById(id).value = quantityCount
    let price = document.getElementById(id +'price').dataset.price
    console.log(price)
    let totalQuantity = price * quantityCount

document.getElementById(id + 'price').innerText = totalQuantity
calculateTotal()
}

function minus(id){

console.log(id)
     quantityCount = document.getElementById(id).value
    quantityCount --
    document.getElementById(id).value = quantityCount
    let price = document.getElementById(id +'price').dataset.price
    console.log(price)
    let totalQuantity = price * quantityCount

document.getElementById(id + 'price').innerText = totalQuantity
calculateTotal()
}


// document.querySelector('.btn-plus').addEventListener('click', function (){
//     quantityCount = document.querySelectorAll('.quantity').value
//     quantityCount ++
//     document.querySelectorAll('.quantity').value = quantityCount

//        if (quantityCount > 1) {
//     document.querySelector('.btn-minus').removeAttribute('disabled')
//     document.querySelector('.btn-minus').classList.remove('disabled')
// }

//     quantityPrice()
// })



// document.querySelector('.btn-minus').addEventListener('click', function (){
//     quantityCount = document.querySelectorAll('.quantity').value
//     quantityCount --
//     document.querySelectorAll('.quantity').value = quantityCount

//     if (quantityCount === 1) {
//     document.querySelector('.btn-minus').setAttribute('disabled', 'disabled')
// }
    // quantityPrice()


// Trying add to cart icon
// cartIndex.innerText = 

function Remove(id){
    console.log(id)

    // let products = [];
    //     products = JSON.parse(localStorage.getItem('products'));
    // products.indexOf()
    // products.slice()
   let index 
     produtsArray.forEach((element ,item) => {

    if  (element._id == id ){
index = item
return
    } 
       
   });
      console.log('old array', produtsArray)

   produtsArray.splice(index,1)
    localStorage.setItem('products', JSON.stringify(produtsArray));
    displayCart()
   console.log('new array', produtsArray)
  // the last line  
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
    if (firstName.value === '' || lastName.value === '' || email.value === '' || city.value === '' || address.value === ''){

        return
    }else{
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
             // send the opject using fetch method and post to the order and get the data then store it insode local storage and redirect to the confirmation page 
             // inside confirmation page get the data from local storage then show the Order Id .
             
             // search for using fetch with Post  .
    console.log(data)
}
}) 

