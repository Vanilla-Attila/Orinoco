 
document.addEventListener('load',getProduct()) // on load calling the function


 
 function getProduct(){

 let id = localStorage.getItem('ProdID') // Geting the item from local storage
 
 fetch('http://localhost:3000/api/cameras/'+id) // Fetching the URL
  .then(response => response.json())           //  getting the response json object (still promise)
  .then(data => {                              // Taking the data from json
     let product = document.getElementById('product')
     let lense = data.lenses
     let prod = data 
     product.innerHTML = '';
        
      product.insertAdjacentHTML('beforeend', `
        <div class="container">
        <div class="row">
          <div class="card border-info my-3 container col-sm" style="width: 42rem;">
            <img class="card-img-top img-fluid" src="${data.imageUrl}" alt="Card image cap">
          <div class="card-body col-sm">
            <h5 class="card-title">${data.name}</h5>
              <p class="card-text text-justify">${data.description}</p>
            <h5 class="p-2 text-right">$ ${data.price}</h5> 
          <div class="input-group col-sm m-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Select Lenses</label>
        </div>
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose</option>
          </select>
        </div>
        <div class="d-flex justify-content-center mt-2">
          <button id="add-to-cart" class="btn btn-info text-warning btn-lg" >Add to Cart</button>
        </div>
        </div>
        </div>`
    )

    // Selecting lenses
    let drop = document.getElementById('inputGroupSelect01')
     lense.forEach(element => {
      drop.insertAdjacentHTML( 'beforeend' , `<option value="${element}">${element}</option>`)
            
        })

  // Add to cart
  document.getElementById('add-to-cart').addEventListener("click", ()=> addProduct(data))

 })
 .catch(error => console.log(error))
}

  
// Updating cart number
(function updateCartNumber(){
    let products =  localStorage.getItem('products')                    // Geting products from local storage
    let produtsArray = JSON.parse(products)                             // Converting json string to js object
    let cartIndex = document.getElementById('cart-index')
 cartIndex.innerText = produtsArray != null ? produtsArray.length : 0   // Ternary operator (if else in single line)
})()

   
// Adding product to local storage
function addProduct(product){
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    console.log(products)
    products.push(product);
     localStorage.setItem('products', JSON.stringify(products));
     window.location.href = "cart-page.html"
}