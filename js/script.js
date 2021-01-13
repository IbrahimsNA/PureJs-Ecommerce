

let productsCintainerDom = document.querySelector(".products");


var products = productsDB;
//Display Products
let DrawItemsUi;

(DrawItemsUi = function (products = []) {

    let productUi = products.map((item) => {
        console.log(item)
        return `
        <div class="product-item" style="border:${item.isMe === "Y" ? "2px solid green" : ""}">
        <img src="${item.imageUrl}" class="product-item-img" alt="image">
        
        <div class="product-item-desc">
          <a onclick='saveItemData(${item.id})'>${item.title}</a>
          <p>${item.desc}</p>
          <span>Size: ${item.size}</span>

          ${item.isMe && "<button class='editBtn' onclick='editProduct(" + item.id + ")'> Edit Product </button>"}
        </div>
        
        <div class="product-item-actions">
          <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
          <i class="favorite fas fa-heart"
          style="color:${item.liked == true ? "red" : ""}"
          onclick="addToFavorite(${item.id})"></i>
        </div>
      </div>`
    })

    productsCintainerDom.innerHTML = productUi.join("");
})(JSON.parse(localStorage.getItem("products")) || products);

function addedToCart(id) {

    if (localStorage.getItem("username")) {
        let products = JSON.parse(localStorage.getItem("products")) || products
        let product = products.find((item) => item.id === id);
        let isProductInCart = AddedItem.some((i) => i.id === product.id);

        if (isProductInCart) {
            AddedItem = AddedItem.map((p) => {
                if (p.id === product.id) p.qty += 1;
                return p;
            })
            // product.qty += 1;
        } else {
            AddedItem.push(product);
        }
        // UI
        cartProductDivDom.innerHTML = "";
        AddedItem.forEach(item => {
            cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
        })

        // Save Data
        localStorage.setItem("productsInCarts", JSON.stringify(AddedItem));

        // Add Counter Of Items
        let cartProductsItems = document.querySelectorAll(".carts-products div p")
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductsItems.length
    } else {
        window.location = "signIn.html";
    }

}


// search('HeadPhone Item',products)
function getUniqueArr(arr, filterType) {
    let unique = arr
        .map((item) => item[filterType])
        .map((item, i, final) => final.indexOf(item) === i && i)
        .filter((item) => arr[item])
        .map((item) => arr[item]);

    return unique;

}



function saveItemData(id) {
    console.log(id);
    localStorage.setItem('productId', id)
    window.location = 'cartDetails.html'
}

let input = document.getElementById('search');

input.addEventListener('keyup', function (e) {
    // if(e.keyCode === 13) {
    //     search(e.target.value, products)
    // }
    search(e.target.value, JSON.parse(localStorage.getItem("products")));
    if (e.target.value.trim() === "")
        DrawItemsUi(JSON.parse(localStorage.getItem('products')));

});

function search(title, myArray) {
    // for(var i = 0;i < myArray.length; i++){
    //     if(myArray[i].title === title){
    //         console.log(myArray[i])
    //     }
    // }
    // let arr = myArray.filter(item => item.title == title)
    // let arr = myArray.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1)
    let arr = myArray.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))

    console.log(arr);
    DrawItemsUi(arr)
}

let favoritesItems = localStorage.getItem("productsFavorite")
    ? JSON.parse(localStorage.getItem("username")) : [];

function addToFavorite(id) {
    if (localStorage.getItem("username")) {
        let choosenItem = products.find((item) => item.id === id);
        choosenItem.liked = true;
        favoritesItems = [...favoritesItems, choosenItem];
        let uniqueProducts = getUniqueArr(favoritesItems, 'id');
        localStorage.setItem("productsFvorite", JSON.stringify(uniqueProducts));
        products.map(item => {
            if (item.id === choosenItem.id) {
                item.liked = true;
            }
        })
        localStorage.setItem("products", JSON.stringify(products));
        DrawItemsUi(products)
    } else {
        window.location = "login.html";
    }

}


// Filter Products By Size
let sizeFilter = document.getElementById("size-filter");
sizeFilter.addEventListener("change", getProductsFilteredBySize);
function getProductsFilteredBySize(e) {
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem('products')) || products;

    if (val === 'all') {
        DrawItemsUi(products);
    } else {
        products = products.filter(i => i.size === val);
        DrawItemsUi(products);
    }
}

// Edit Product
function editProduct(id) {
    console.log("ID", id)
    localStorage.setItem("editProduct", id);
    window.location = "editProduct.html";
}