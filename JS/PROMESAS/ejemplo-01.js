//crear una promesa que simula una operación asincrona

const miPromesa = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        //resuelve la promesa despues de un retraso simulado -haciendo de la espera de la rta de un servidor
        resolve("¡Operación completada con éxito!");
    },2000);
});

console.log("Inicio de la operación");

miPromesa
    .then(resultado=>{
        console.log(resultado); //Se ejecuta cuando la promesa se cumple
    })
    .catch(error => {
        console.error("Error:",error)//Manejar errores si la promesa se rechaza
    });
console.log("Tareas adicionales") //se ejecuta antes de que la promesa se complete    