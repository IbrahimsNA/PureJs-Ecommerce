let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let createForm = document.getElementById("create-form");
let inputFile = document.getElementById("upload-image-file");
let productImage;
let productSizeValue;


// Events
// productSizeSelect.addEventListener("change", getProductSize);
createForm.addEventListener('submit', createProductFun)
inputFile.addEventListener("change", uploadImage)
// Functions
// function getProductSize(e) {
//     console.log(e.target.value)
// }

function createProductFun(e) {
    e.preventDefault();
    let allproducts = JSON.parse(localStorage.getItem('products')) || productsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;
    let sizeValue = productSizeSelect.value;
    if(nameValue && descValue && sizeValue){

        let obj = {
            id: allproducts  ? allproducts.length + 1 : 1,
            qty: 1,
            size: sizeValue,
            title: nameValue,
            desc: descValue,
            imageUrl: productImage,
            isMe: "Y"
        };
        let newProducts = allproducts ? [...allproducts, obj] : [obj];
        localStorage.setItem("products", JSON.stringify(newProducts));
        productName.value = "";
        productName.value = "";
        productSizeSelect.value = "";
        setTimeout(() => {
            window.location = "index.html";
        }, 500)
    } else {
        alert("Insert Data ...")
    }
}
    // upload Image
function uploadImage() {
    
    let file = this.files[0];
    let types = ["image/jpeg" , "image/png"];
    if(!types.includes(file.type)) {
        alert("Type Not Supported");
        return;
    }

    if(file.size > 2 * 1024 * 1024){
        console.log("Image Not Exced 2MG");
        return;
    }
    getImageBase64(file)

    // productImage = URL.createObjectURL(file)
}

function getImageBase64(file) {
    let reader = new FileReader();
    
    reader.readAsDataURL(file);

    reader.onload = function() {
    productImage = reader.result;
    };
    reader.onerror = function() {
        console.log("Error !!");
    };
};
