function operar ( arr,operacion, val = 0){
    let resultado = val
    for (let num of arr) {
        resultado = operacion(resultado , num)
    }

    return resultado
}

function suma(a,b){
    return a + b 
}

function producto(a,b){
    console.log(a , b)
    return a*b
    
}

const numeros = [1,2,3,4,5]
const sumaTotal = operar(numeros , suma)
const productoTotal = operar(numeros, producto , 1)
console.log(sumaTotal)
console.log(productoTotal)