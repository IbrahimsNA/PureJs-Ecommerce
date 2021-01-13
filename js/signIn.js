let username = document.querySelector("#username");
let password = document.querySelector("#password");
let signIn = document.querySelector("#signIn");
let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

signIn.addEventListener('click', login);

function login(e){
    e.preventDefault()
    if(!username.value || !password.value) {
        alert("Please Fill The Data")
    }else {
        if(getUser && getUser.trim() === username.value.trim() && getPassword && getPassword === password.value.trim()) {

            setTimeout(()=>{
                window.location = "index.html";
            })
        }else{
            alert("Please Insert Correct Data")
        }
    }
}