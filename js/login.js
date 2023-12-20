const userName = document.querySelector("#UsernameID");
const password = document.querySelector("#PasswordID");
const btnID = document.getElementById('btnLogin_ID')
btnLogin_ID.addEventListener("click",function (e) {
    e.preventDefault()
    if(userName.value.length>0 && password.value.length>0){
        window.location.href="./home.html"
        console.log("true");
    }else{
        alert("malumotni (toliq) kiriting")
    }
})