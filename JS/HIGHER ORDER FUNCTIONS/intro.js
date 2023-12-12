function operar(arr,operacion,valorInicial=0){
    let resultado = valorInicial;
    for (let num of arr){
        resultado = operacion(resultado,num);
    }
    return resultado;
}
function suma(a,b){
    return a + b;
}
function producto(a,b){
    return a * b;
}
const numeros = [ 1,2,3,4,5];
const sumaTotal =  operar(numeros,suma);//15
const productoTotal = operar(numeros,producto,1);//120
//devuelve funciones

function multiplicador(factor){
    return function (numero){
        return numero * factor;
    };
}
const duplicar = multiplicador(2);
const triplicar = multiplicador(3);

console.log(duplicar(5)); // 10
console.log(triplicar(5)); //15

