// let productsInCarts = localStorage.getItem('productsInCarts');

let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");
// let productsCintainerDoms = document.querySelector(".products");
// if(productsInCarts) {
//     let items = JSON.parse(productsInCarts);
//   console.log(items)
//     drawProductsInCarts(items);
// }


function drawProductsInCarts(allroducts = []) {
    console.log(allroducts)
    if(JSON.parse(localStorage.getItem('productsInCarts')).length === 0) {
      noProductsDom.innerHTML = 'There Is No Products'
    }
  let products = JSON.parse(localStorage.getItem('productsInCarts')) || allroducts;
  console.log(products)
  let productUi = products.map((item)=>{
    return `
    <div class="product-item">
    <img src="${item.imageUrl}" class="product-item-img" alt="image">
    
    <div class="product-item-desc">
      <h2>${item.title}</h2>
      <p>${item.desc}</p>
      <span>Size: ${item.size}</span><br>
      <span>Quantity: ${item.qty}</span>
    </div>
    
    <div class="product-item-actions">
      <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From Cart</button> 
    </div>
  </div>`;
});

productsDom.innerHTML = productUi.join("");
}

drawProductsInCarts()

function removeItemFromCart(id) {
  console.log(id)
  let productsInCarts = localStorage.getItem('productsInCarts');
  if(productsInCarts) {
    let items = JSON.parse(productsInCarts);
    let itemFiltered = items.filter((item)=> item.id != id);
    // console.log(itemFiltered )
    // drawProductsInCarts(productsInCarts)
    localStorage.setItem('productsInCarts', JSON.stringify(itemFiltered));
    drawProductsInCarts(itemFiltered)
  }

}
