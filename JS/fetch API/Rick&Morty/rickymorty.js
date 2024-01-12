//https://rickandmortyapi.com/api/character

const url = "https://rickandmortyapi.com/api/character";
fetch(url)
.then(data=>data.json())
.then(
    datos => {
        const personajes = datos.results;
        let nombre;
        let listaImgs;
        let code = ""
        let main = document.getElementsByTagName("main")
        let listaStatus;
        let i=0

        personajes.forEach(personaje => {
            nombre=personaje.name
            listaImgs=personaje.image
            listaStatus=personaje.status
            console.log(nombre)
            console.log(listaImgs)
            console.log(listaStatus)
            

        });
    }
)
.catch(error=>console.log(error))
