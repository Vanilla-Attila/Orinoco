
// Updating cart number
(function updateCartNumber(){
    let products =  localStorage.getItem('products')
    let produtsArray = JSON.parse(products)
    let cartIndex = document.getElementById('cart-index')
    cartIndex.innerText = produtsArray != null ? produtsArray.length : 0 // Ternary operator (if else in single line)
})()

let datas = localStorage.getItem('order')


// Displaying order ID
let dataObj = JSON.parse(datas)

let orderId = document.getElementById('orderId')
orderId.innerText = dataObj.orderId

// Clearing local storage
localStorage.removeItem('products')