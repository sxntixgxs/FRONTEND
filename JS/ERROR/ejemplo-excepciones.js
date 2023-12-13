function calcularCuadradoDeNumero(numero){
    if (isNaN(numero)){
        throw new Error ('La entrada debe ser un numero');
    }
    return numero * numero
}
try {
    const input = prompt('Ingrese un numero');
    const numero = parseFloat(input);
    const resultado = calcularCuadradoDeNumero(numero);
    console.log(`El cuadrado de ${numero} es ${resultado}`);
}catch (error) {
    console.error(`Se produjo un error ${error.message}`)
}