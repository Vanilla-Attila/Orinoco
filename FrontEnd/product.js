 
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
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Select Lense
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
           
          
        </div>
        </div>
        <a href="#" class="btn btn-info text-warning btn-lg" onclick = "addProduct()">Add to Cart</a>
      </div>
    </div>`
    )
    let drop = document.getElementsByClassName('dropdown-menu')[0]
     lense.forEach(element => {
      drop.insertAdjacentHTML( 'beforeend' , '<a class="dropdown-item" href="#">'+ element + '</a>')
            
        })
    ;

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
    products.push(prduct);
    localStorage.setItem('products', JSON.stringify(products));
}