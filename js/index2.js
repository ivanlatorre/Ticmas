/*document.getElementById('boton'). onclick = function (){
    console.log("Capturamos el evento click");//en consola
    document.getElementById("demo").innerHTML = " Estamos probando nuestro primero elemento en  JS"
}*/
/*
document.addEventListener('click', function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = " Estamos probando nuestro primero elemento en  JS"


});*/

document.getElementById('boton').addEventListener('click', function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = " Estamos probando nuestro primero elemento en  JS"


});

document.getElementById('boton_color').addEventListener('click',function(){
    document.body.style.backgroundColor = '#FF0000';
});

document.getElementById('boton_dafault').addEventListener('click',function(){
    document.body.style.backgroundColor = 'blue';
});

document.getElementById('boton_ocultar').addEventListener('click',function(){
    document.getElementById('demo').style.display = 'none';
});

const collection = document.getElementsByClassName("prueba");
for(let i = 0; i < collection.length; i++){
    collection [i].style.backgroundColor = "green";
}
document.getElementById('primary').addEventListener('click',function(){
    document.body.style.backgroundColor = 'blue';
});
document.getElementById('secondary').addEventListener('click',function(){
    document.body.style.backgroundColor = '#6c757d';
});
document.getElementById('success').addEventListener('click',function(){
    document.body.style.backgroundColor = '#198754';
});
document.getElementById('danger').addEventListener('click',function(){
    document.body.style.backgroundColor = '#dc3545';
});
