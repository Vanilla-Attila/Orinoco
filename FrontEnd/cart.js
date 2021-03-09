// let cart = getElementById('add-to-cart')

// for (let i = 0; i < cart.length; i++ ) {
//     console.log(my loop)
// }

document.querySelector('.btn-minus').setAttribute('disabled', 'disabled')

let quantityCount

let price = document.getElementById('price').innerText

function quantityPrice(){
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

