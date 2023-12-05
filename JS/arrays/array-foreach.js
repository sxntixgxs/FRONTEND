let arr = [4.6,2.5,2.5,2.5,2.5]
arr.forEach(function(elemento) {
    console.log(elemento);
});

arr.forEach(e => console.log(e*0.8+1));//ejecuta la funcion por cada elemento del array

let curv8 = arr.map(e => e*0.8+1);
console.log(curv8);//la diferencia entre el foreach y este es que map devuelve una lista con cada valor nuevo

// que solo me devuelva los elementos mayortes de 3
let may3=arr.filter(function(e){
    if (e>=3 ) return e
});
console.log(may3);
//reduce coge todo el array y devuelve solo un valor solo riene dos valores el que lleva el acumulador y cada valor

let suma=arr.reduce(function(acumulador,valor){
    return acumulador+valor;
});
console.log(suma);
//find devuelve el indice de la primera ocurrencia de un valor en el arrayl

let sumC8 = arr.reduce((c,e)=>c+(e*0.8+1))
console.log(sumC8.toFixed(2));

let maxNumber = arr.reduce(function(acumulador,currentValue){
    return Math.max(acumulador,currentValue);
}); //devolveria el numeor mayor de una lista de valores