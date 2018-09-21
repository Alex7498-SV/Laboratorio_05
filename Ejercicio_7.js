//Ejercicio 7
var anhio =prompt('Ingrese un año: ');
if ((anhio % 4 == 0 && anhio % 100 != 0) || anhio % 400 == 0){
    console.log(`El año ${anhio} es bisiesto`);
}
else{
    console.log(`El año ${anhio} no es bisiesto`);
}