// C�digo JavaScript aqu�

const loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit", function(event){
    event.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(username=== "admin" && password === "admin123"){
        alert("Bienvenido!!")
    }else{
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
})