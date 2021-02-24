// to do list
/**
 *  Make a request and recive the data from the server     done
 * Select the camers card parent as we are going to inject the dom from JS request  done need to all all vlaues 
 * store the product id in the local storage for the product details 
 * click on product deatils 
 * navigate to product details 
 * 
 *  */ 

 // Product page  
 /**
  * get the value of product id from local storage 
  * send the id to the server to get the product details 
  * inject the dom with details from js 
  * when click add to cart create an array in localstorgae with cardItem and push that id to it .
  *  
  */

  // ajax   or xmlhttprequest or fetch
 fetch('http://localhost:3000/api/cameras')
 .then(response => response.json())
 .then(data => {
    // data is array you can loop over it to get values 
    //select the parent to inject 
    let parent = document.getElementById('camera-cards')
parent.innerHTML = '';
    data.forEach(element => {

         parent.insertAdjacentHTML('beforeend', `
        <div class="card border-info my-3 shadow" style="width: 32rem;">
            <img class="card-img-top" src="${element.imageUrl}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Retro D-4500 Mark-X</h5>
              <p class="card-text text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore cumque voluptatibus nisi quo qui quae repellat quaerat. Est esse, tempora non recusandae laudantium tenetur molestias excepturi sunt ipsa velit.</p>
              <h5 class="pt-2 text-right">$799</h5>
              <a href="#" class="btn btn-info text-warning btn-lg">Details</a>
            </div>
          </div>`)
    });

 })
 .catch(error => console.log(error))