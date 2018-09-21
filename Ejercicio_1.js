//Ejercicio 1

var palabra = prompt("Ingrese una palabra:");

var longitud = palabra.length;
console.log(longitud);
console.log(palabra);
var aux="";

 for(var i = 0; i< longitud; i++){
     aux=aux+palabra[longitud - (i+1)];
}
console.log(aux);
if(palabra == aux){
     alert("Es palindromo");
}
else{
     alert("No es palindromo")
}




