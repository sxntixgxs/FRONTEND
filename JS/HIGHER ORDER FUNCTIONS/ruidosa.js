function ruidosa(funcion){
    return (...argumentos)=>{
        console.log("Llamando con",argumentos);
        let resultado  = funcion(...argumentos);
        console.log("Llamada con",argumentos,", retorno,",resultado);
        return resultado;
    };
}
ruidosa(Math.min)(3,2,1);
//return 1 pq FUNCION que es el primer argumento es Math.min;
//argumentos, son 3,2,1;
