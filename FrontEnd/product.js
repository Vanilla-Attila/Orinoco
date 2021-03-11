 
document.addEventListener('load',getProduct())
 
 function getProduct(){

 let id = localStorage.getItem('ProdID')
 fetch('http://localhost:3000/api/cameras/'+id)
 .then(response => response.json())
 .then(data => {
     let product = document.getElementById('product')
     let lense = data.lenses
     let prod = data 
     product.innerHTML = '';
        
      product.insertAdjacentHTML('beforeend', `
        <div class="card border-info my-3 container" style="width: 42rem;">
          <img class="card-img-top" src="${data.imageUrl}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text text-justify">${data.description}</p>
          <h5 class="pt-2 text-right">$ ${data.price}</h5>
        
        
                    
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Select Lenses</label>
                </div>
                  <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose</option>
                  </select>
                </div>


        <div class="d-flex justify-content-center">
          <button id="add-to-cart" class="btn btn-info text-warning btn-lg" >Add to Cart</button>
        </div>
      </div>
    </div>`
    )
    let drop = document.getElementById('inputGroupSelect01')
     lense.forEach(element => {
      drop.insertAdjacentHTML( 'beforeend' , `<option value="${element}">${element}</option>`)
            
        })

    // data is array you can loop over it to get values 
    //select the parent to inject 
 
  document.getElementById('add-to-cart').addEventListener("click", ()=> addProduct(data))

 })
 .catch(error => console.log(error))
  }

   function addProduct(product){
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push(product);
     localStorage.setItem('products', JSON.stringify(products));
     window.location.href = "cart-page.html"
}