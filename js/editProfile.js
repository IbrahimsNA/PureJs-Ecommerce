// Get Data From LocalStorage
let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");

// Variables
let userInput = document.getElementById("changeName");
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("edit-profile-form");

// Settings Values Of Inputs
userInput.value = get_user;
userEmailInput.value = get_email;


// Events
editForm.addEventListener("submit", editProfileData)


// if(myProducts.length != 0) {
//     productsLength.innerHTML = productsLength.length;
// } else {
//     productsLength.remove();
// }

function editProfileData(e) {
    e.preventDefault();

    localStorage.setItem("username", userInput.value);
    localStorage.setItem("email", userEmailInput.value);
    
    setTimeout(() => {
        window.location = "profile.html";
    }, 500);
}