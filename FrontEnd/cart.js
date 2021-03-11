
// Trying display items in cart
//document.addEventListener('load', displayCart())

let products =  localStorage.getItem('products')
let produtsArray = JSON.parse(products)
console.log(produtsArray)


function displayCart (){
    let order = localStorage.getItem('order')
    fetch('http://localhost:3000/api/cameras/' + order)
 .then(response => response.json())
 .then(data => {
     
 })
}

let obj = {
    contact : {
        firstName : document.getElementById('firstName').value ,
lastNmae : 
},
    products : ['1','2']
}
//  Trying change cart icon counter number
let cartIndex = document.getElementById('cart-index').innerText


// Plus - minus quantity counter (it is partly working if there is no error before this)
document.querySelector('.btn-minus').setAttribute('disabled', 'disabled')

let quantityCount

let price = document.getElementById('price').innerText

function quantityPrice(){
    if (quantityCount < 0){
        quantityCount = 0
    }
    let totalQuantity = price * quantityCount
    document.getElementById('price').innerText = totalQuantity
}

document.querySelector('.btn-plus').addEventListener('click', function (){
    quantityCount = document.getElementById('quantity').value
    quantityCount ++
    document.getElementById('quantity').value = quantityCount

       if (quantityCount > 1) {
    document.querySelector('.btn-minus').removeAttribute('disabled')
    document.querySelector('.btn-minus').classList.remove('disabled')
}

    quantityPrice()
})

document.querySelector('.btn-minus').addEventListener('click', function (){
    quantityCount = document.getElementById('quantity').value
    quantityCount --
    document.getElementById('quantity').value = quantityCount

    if (quantityCount === 1) {
    document.querySelector('.btn-minus').setAttribute('disabled', 'disabled')
}
    quantityPrice()
})

// Trying add to cart icon
cartIndex.innerText = quantityCount