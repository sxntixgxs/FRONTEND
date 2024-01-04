function calcularDiagonal(matriz){
    const longitud = matriz.length;
    let suma1=0
    let suma2=0
    for (let i = 0; i< longitud;i++){
        suma1+=matriz[i][i]
        console.log("this is i",suma1)
    }
//falta la diagonal al reves!
    console.log(suma1,suma2)
    let diff = (suma1-suma2)
    if(diff<0) diff=-diff
    console.log(`The diagonal difference is ${diff}`)
}