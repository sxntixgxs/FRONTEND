// //promesas

// function getNombre(nomusu){
//     const url = `https://api.github.com/users/${nomusu}`

//     //fetch es una promesa
//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then(json => {
//             console.log(json.name);
//         })
// }

// getNombre('sxntixgxs')

//async await

// async function getNombre(nomusu){
//     const url = `https://api.github.com/users/${nomusu}`;

//     const respuesta = await fetch(url);
//     const json = await respuesta.json();
//     console.log(json.name, json.created_at);
// }

// getNombre("sxntixgxs")

//----poke

// async function getNombre(nompoke){
//     const url = `https://pokeapi.co/api/v2/pokemon/${nompoke}`;
//     const respuesta = await fetch(url);
//     const json = await respuesta.json();

//     console.log(json.sprites.front_default);
// }
// getNombre("bulbasaur");

//-- pokemon no existe 

async function getNombre(pokemon){
     const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
     const respuesta = await fetch(url);

     //si la respuesta no fue exitosa
     //if (respuesta.ok !== 200)
     if (!respuesta.ok)
        throw new Error("Error. Pokemon no existe")
    const json = await respuesta.json();
    //retornar el nombre de usuario
    return json.sprites.front_default;
}
// getNombre es una promesa
(async function(){
    try {
        let urlImg = await getNombre('pikachu');
        console.log(urlImg);

        urlImg = await getNombre('limber');
        console.log(urlImg);
    }catch(error){
        console.error(error.message);
    }
})()//ESTE PARTENTESIS HAY QUE PONERLO; SINO NO SE EJECUTA !!!!!!!!
//async await haciendo un return

// async function getNombre(nomusu){
//     const url = `https://api.github.com/users/${nomusu}`;
//     const respuesta = await fetch(url);
//     //si la respuesta no fue exitosa
//     if (respuesta.status !==200)
//         throw new Error ...
//...
// }

//buscar como se debe ejecutar una funcion apenas se declara