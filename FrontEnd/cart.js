
// Trying display items in cart
document.addEventListener('load', displayCart())

function displayCart (){
    let order = localStorage.getItem('order')
    fetch('http://localhost:3000/api/cameras/' + order)
 .then(response => response.json())
 .then(data => {
     let cartItem = document.getElementById('cartImet')
     
     cartItem.innerHTML = '';

     cartItem.insertAdjacentHTML('beforeend', `
         <tr>
          <th class="text-center" scope="row"><img src="${data.imageUrl}" width="40px" height="40px"
              class="mr-4 cart-pic" alt="A camera" id="cartItem">${data.name}</th>
          <td class="text-center">${data.lenses}</td>
          <td class="input-group justify-content-center">
            <button class="input-group-prepend btn btn-minus disabled btn-danger">-</button>
            <input class="input-group-text input-st" id="quantity" type="text" value="1">
            <button class="btn btn-plus btn-success">+</button>
          </td>
          <td class="text-center price" id="price">${data.price}</td>
          <td class="text-center"><button type="button" class="btn btn-danger">Remove</button></td>
        </tr>
     `)
 })
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