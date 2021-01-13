// let productsInCarts = localStorage.getItem('productsInCarts');

let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");
// let productsCintainerDoms = document.querySelector(".products");
// if(productsInCarts) {
//     let items = JSON.parse(productsInCarts);
//   console.log(items)
//     drawProductsInCarts(items);
// }


function drawFavoritesInCarts(allroducts = []) {
    console.log(allroducts)
    if(JSON.parse(localStorage.getItem('productsFvorite')).length === 0) {
      noProductsDom.innerHTML = 'There Is No Products'
    }
  let products = JSON.parse(localStorage.getItem('productsFvorite')) || allroducts;
  console.log(products)
  let productUi = products.map((item)=>{
    return `
    <div class="product-item">
    <img src="${item.imageUrl}" class="product-item-img" alt="image">
    
    <div class="product-item-desc">
      <h2>${item.title}</h2>
      <p>lorem ipusem ,asda asdasda sadsada</p>
      <span>Size: ${item.size}</span><br>

    </div>
    
    <div class="product-item-actions">
      <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From Favorite</button> 
    </div>
  </div>`;
});

productsDom.innerHTML = productUi.join("");
}

drawFavoritesInCarts()

function removeItemFromCart(id) {
  console.log(id)
  let productsFvorite = localStorage.getItem('productsFvorite');
  if(productsFvorite) {
    let items = JSON.parse(productsFvorite);
    let itemFiltered = items.filter((item)=> item.id != id);
    // console.log(itemFiltered )
    // drawProductsInCarts(productsInCarts)
    localStorage.setItem('productsFvorite', JSON.stringify(itemFiltered));
    drawFavoritesInCarts(itemFiltered)
  }

}
