console.log("El archivo JavaScript se ha cargado correctamente");

let user = document.getElementById("user");
let password = document.getElementById("password");
let submit = document.getElementById("button");
let visible = document.getElementById("visible");
    
let usuarios = [
    {nombre: "lautaro", dni: "44103072"}
];

visible.addEventListener("change", () => {
    password.type = visible.checked ? "text" : "password";
    console.log("Cambio de visibilidad:", password.type);
});

submit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Botón de envío clicado");
    if(password.value !== "" && user.value !== ""){
        let acceso = usuarios.find(e => e.nombre === user.value && e.dni === password.value);
        if (acceso) {
            console.log("Acceso concedido");
            window.location.href = "../pages/plataforma.html"; // Reemplaza "nueva_pagina.html" con la URL de tu nueva página

        } else {
            console.log("Usuario o contraseña incorrectos");
        }
    }
});
