let productId = JSON.parse(localStorage.getItem('productId'));
let products = JSON.parse(localStorage.getItem('products'));
let itemDetails = document.querySelector(".itemDetails");
console.log(productId,products)
let productDetails = products.find((item) => item.id == productId);
console.log(productDetails)

itemDetails.innerHTML = `
<img src="${productDetails.imageUrl}" class="item-productImg-details" />
<h2>${productDetails.title}</h2>
<p>${productDetails.desc}</p>
<p>${productDetails.size}</p><br>
<p>${productDetails.qty}</p>
`