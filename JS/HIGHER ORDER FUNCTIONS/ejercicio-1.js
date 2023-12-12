const recibeFuncion=(operation,num)=>{

    for(let i = 0; i<num;i++){
        console.log(i)
        operation(parametroCall)//se ejecuta i veces
    }
}
recibeFuncion(opeation,num)(parametroCall)//pasamos a operation el parametro "parametroCall"