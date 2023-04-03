
function cuenta_18(array){

    if(array.length > 18){
        return array.length;
    }
}

cuenta_18(13,15,18,20,28);


function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    // Tu código:
    
    //if(num.toString()[0]=== '9')console.log(true);
    //console.log(num)
    
    if(num.toString().startsWith('9'))console.log(true);
    console.log(num)

    //if(num.tostring().startswith('9'))console.log(num)
 
 }

 empiezaConNueve(999,834,785,91)



 
function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
    // Debes multiplicar este número por 5 y retornar el resultado.
    // Tu código:
    var multiplicar = 5
    numero = objetoMisterioso * multiplicar
    objetoMisterioso[numero]
    console.log(numero)
    
 }
 multiplicarNumeroDesconocidoPorCinco(1)