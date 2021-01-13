
// function signUp() {
   
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
//     let email = document.getElementById('email').value;
//     console.log(username, password, email)
//     localStorage.setItem("username",username)
//     localStorage.setItem("password",password)
//     localStorage.setItem("email",email)
    
// }

let username = document.querySelector('#username');
let password = document.querySelector('#password');
let email = document.querySelector('#email');
let btn_register = document.querySelector('#signUp')

btn_register.addEventListener('click', signUp);

function  signUp(e) {
    e.preventDefault();

    if(!username.value || !password.value || !email.value) {
        alert('Please Fill Data')
     }
     else {
    console.log(username.value, password.value, email.value);

    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("email", email.value);

    setTimeout(()=> {
        window.location = "signIn.html";
    },1500)
}
}