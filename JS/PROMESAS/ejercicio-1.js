const datos = [
    {
        id :1,
        title : "Iron Man",
        year : 2008
    },{
        id : 2,
        title : "Spiderman: HomeComing",
        year : 2017
    },{
        id : 3,
        title : "Avengers: Endgame",
        year : 2019
    }
]
//consumir el objeto de forma sincrona
// const getDatos = () => {
//     return datos;
// }
// console.log(getDatos())

//2. callbacks ; simulamos que esperamos 1.5s la rta del servidor
// const getDatos = () => {
//     setTimeout( () => {
//         return datos;
//     },1500)
// }

// console.log(getDatos())

// promesas
const getDatos = () => {
    return new Promise((resolve,reject)=>{
        if (datos.length===0){
            reject(new Error("Error. No existen datos"))
        }
        setTimeout(() => {
           resolve(datos) ;
        }, 1500)
    })
}

getDatos()
    .then((datos) => {console.table(datos)})
    .catch((err) => {console.error(err.message)})