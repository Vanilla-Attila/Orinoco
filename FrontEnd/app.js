// Updating cart number   IIFE Immediately Ivoked Function Expression
(function updateCartNumber(){
    let products =  localStorage.getItem('products')
    let produtsArray = JSON.parse(products)                                 // Converting json string to JS object
    let cartIndex = document.getElementById('cart-index')
    cartIndex.innerText = produtsArray != null ? produtsArray.length : 0    // Ternary operator (if else in single line)
})()

  

  // Fetching the URL
  fetch('http://localhost:3000/api/cameras') 
    .then(response => response.json()) //  getting the response json object (still promise)
    .then(data => { // Taking the data from json 
    let parent = document.getElementById('camera-cards')
    parent.innerHTML = '';
    data.forEach(element => { // Looping over the data array to get values
      
       // Insert the datas as last elements (beforeend)
      parent.insertAdjacentHTML('beforeend', `
        <div class="card border-info my-3 shadow" style="width: 32rem;">
            <img class="card-img-top img-fluid" src="${element.imageUrl}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text text-justify">${element.description}</p>
              <h5 class="pt-2 text-right">$ ${element.price}</h5>
              <a href="#" class="btn btn-info text-warning btn-lg" onclick="GetProduct('${element._id}')">Details</a>
            </div>
          </div>`)
    });

 })
 .catch(error => console.log(error)) // catching errors if we have (promise will rejected if network error)


function GetProduct(id){
localStorage.setItem('ProdID',id) // Seting item to local storage
window.location.href = "single-product-page.html"

 }




