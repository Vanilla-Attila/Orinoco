 
document.addEventListener('load',getProduct())
 
 function getProduct(){

 let id = localStorage.getItem('ProdID')
 fetch('http://localhost:3000/api/cameras/'+id)
 .then(response => response.json())
 .then(data => {
     let product = document.getElementById('product')
     let lense = data.lenses
     product.innerHTML = '';
        
      product.insertAdjacentHTML('beforeend', `
        <div class="card border-info my-3 container" style="width: 42rem;">
          <img class="card-img-top" src="${data.imageUrl}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text text-justify">${data.description}</p>
          <h5 class="pt-2 text-right">$ ${data.price}</h5>
        <div class="dropdown">
           <button class="btn btn-info text-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Select Lense
          </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">         
        </div>
        </div>
        
                    
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Select Lenses</label>
                </div>
                  <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Lenses</option>
                    <option value="1">one</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>


        <div class="d-flex justify-content-center">
          <a href="./cart-page.html" class="btn btn-info text-warning btn-lg" onclick = "addProduct()">Add to Cart</a>
        </div>
      </div>
    </div>`
    )
    let drop = document.getElementById('inputGroupSelect01')[0]
     lense.forEach(element => {
      drop.insertAdjacentHTML( 'beforeend' , `<option class="dropdown-item" href="#">${element}</option>`)
            
        })

    // data is array you can loop over it to get values 
    //select the parent to inject 
  console.log(data)

 })
 .catch(error => console.log(error))
  }

   function addProduct(){
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}