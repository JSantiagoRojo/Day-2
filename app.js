
document.getElementById("enviar").addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let lenguaje = document.getElementById("lenguaje").value;


    document.getElementById("resultado").innerText =
        `Hola ${nombre}, tu edad es ${edad} y ya estás aprendiendo ${lenguaje}.`;

     document.getElementById("pregunta").innerText =`¿Te gusta estudiar ${lenguaje}?`;
//Esta parte esconde y muestra los botones de Si y No
    document.getElementById("Si").style.display = "inline-block";
    document.getElementById("no").style.display = "inline-block";
    document.getElementById("Respuesta").style.display = "block";
     
     document.getElementById("Si").addEventListener("click", function() {
       document.getElementById("Respuesta").innerText =
        `¡Muy bien! Sigue estudiando y tendrás mucho éxito.`;
       
  })
       document.getElementById("no").addEventListener("click", function() {
       document.getElementById("Respuesta").innerText =
        ` Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`;
   })
});

