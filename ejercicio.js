
function ingresar (a , b){

    a = parseInt(prompt('Ingrese un numero'));
    b =  parseInt(prompt('Ingrese un numero'));
    var suma =  a + b;
    var resta = a - b;
    var multiplicar = a * b;
    return ('La suma es '+ suma + '<br>' + 'la resta es:' + resta + '<br>');
    
}
document.write(ingresar())