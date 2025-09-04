
document.getElementById("enviar").addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let lenguaje = document.getElementById("lenguaje").value;


    document.getElementById("resultado").innerText =
        `Hola ${nombre}, tu edad es ${edad} y ya estás aprendiendo ${lenguaje}.`;
});