let cartProductDivDom = document.querySelector(".carts-products div");
let cartProductMenu = document.querySelector(".carts-products");
let badgeDom = document.querySelector(".badge");
let shoppingCartIcon = document.querySelector(".shoppingCart")
shoppingCartIcon.addEventListener('click', openCartMenu);

//Check If There Is Items In LocalStorage
let AddedItem = localStorage.getItem('productsInCarts') ? JSON.parse(localStorage.getItem('productsInCarts')) : [];


if (AddedItem) {
    AddedItem.map((item) => {
        cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });
    badgeDom.style.display = "block";
    badgeDom.innerHTML += AddedItem.length
}

//Open Cart menue

function openCartMenu() {

    if (cartProductDivDom.innerHTML != "") {
        if (cartProductMenu.style.display != 'block') {

            cartProductMenu.style.display = 'block'
        } else {
            cartProductMenu.style.display = 'none'
        }
    }

}