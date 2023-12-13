//Crear una promesa
const miPromesa = new Promise((resolve,reject)=>{
    //Simulamos una operación asincrónica que toma tiempo en completarse
    setTimeout(() => {
        const exito = True;//cambiar a false para simular el rechazo
        if (exito){
            resolve("La promesa se cumplió con éxito");
        }else{
            reject("Hubo un error al cumplir la promesa <()");
        }

    },2000);//simulamos un retraso de 2 segundos
});

//consumir la promesa

miPromesa
    .then(resultado =>{
        console.log("Exito:",resultado);// Manejar el caso de exito
    })//resultado es el mensaje o respuesta que se da en resolve
    .catch(error=>{
        console.error("Error:",error);//Manejar el caso de error
    })//error es el mensaje o respuesta que se da en reject