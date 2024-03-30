//login
const login = ()=>{
    if(usernameInput.value && pswdInput.value){
        console.log(usernameInput.value,pswdInput.value);
        sessionStorage.setItem("username",usernameInput.value)
        sessionStorage.setItem("password",pswdInput.value)
        //navigate to dash board
        window.location = "home.html"
    }else{
        alert("please fill the form completely!!!")
    }
}