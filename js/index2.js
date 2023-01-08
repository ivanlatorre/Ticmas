/*document.getElementById('boton'). onclick = function (){
    console.log("Capturamos el evento click");//en consola
    document.getElementById("demo").innerHTML = " Estamos probando nuestro primero elemento en  JS"
}*/
document.addEventListener('click', function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = " Estamos probando nuestro primero elemento en  JS"


});