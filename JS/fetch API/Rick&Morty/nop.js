const url = "https://rickandmortyapi.com/api/character";

fetch(url)
  .then(data => data.json())
  .then(response => {
    const personajes = response.results;

    let listaNames = [];
    let listaImgs = [];
    let listaStatus = [];

    personajes.forEach(personaje => {
      listaNames.push(personaje.name);
      listaImgs.push(personaje.image);
      listaStatus.push(personaje.status);
    });

    console.log("names", listaNames);
    console.log("imgs", listaImgs);
    console.log("status", listaStatus);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
