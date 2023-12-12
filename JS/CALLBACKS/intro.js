
const myNumbers = [ 4,1,-20,-7,5,9,-6];
const posNumbers = removeNeg(myNumbers,(x)=>x>0);
console.log(posNumbers)

function removeNeg(numbers,callback){
    const myArray=[];
    for ( const x of numbers ){
        if (callback(x))
        myArray.push(x)
       return myArray;  
    }
        
}
//mas ejemplos
function realizarTareaAsincronica(callback){
    setTimeout(function(){
        console.log("Tarea asincronica completada");
        callback();
    },2000);
}
function miCallback(){
    //funcion de callback
    console.log("El callback se ha ejecutado");
}
//Llamando a la funcion asincronica y pasando el callback
realizarTareaAsincronica(miCallback)
console.log("Tarea principal conitnua")