import { choose_id } from "./random_id.js"
import {calculate_stats} from "./calculate_stats.js"
import { show_pokemon } from "./show_pokemon.js";
import { clear_data } from "./clear_title.js";
async function choose_pokemon(){
    const who_select = true; //who_select lo hago para que la funcion show_pokemon sea general y la pueda usar tanto para el pokemon del usuario como el CPU
    let id = choose_id();
    console.log("id pokemon user",id);
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    if(!respuesta.ok)
        throw new Error(`${id} ID pokemon doesn't found`);
    const json = await respuesta.json();
    const poke_name = json.forms[0].name;
    const poke_img = json.sprites.other["official-artwork"].front_default;//esto es una prueba los []
    console.log("img link",poke_img);
    let stats = calculate_stats(json);
    clear_data();
    show_pokemon(poke_name,poke_img,stats,who_select);
}

let choose_button = document.getElementById('choose_button');
choose_button.addEventListener('click',choose_pokemon);
