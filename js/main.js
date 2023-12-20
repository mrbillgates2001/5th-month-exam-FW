const firstName = document.querySelector("#Firstname");
const lastName = document.querySelector("#Lastname");
const userName = document.querySelector("#Username");
const password = document.querySelector("#Password");
const confirmPassword = document.querySelector("#confirmPasswordError");
const btnForm = document.getElementById('regForm')
btnForm.addEventListener("click",function (e) {
    e.preventDefault()
    if(firstName.value.length>0 && lastName.value.length>0 && userName.value.length>0 && password.value.length>0 && confirmPassword.value.length>0){
        window.location.href="./pages/login.html"
        console.log("true");
    }else{
        alert("Fill all the gaps given, please!")
    }
})