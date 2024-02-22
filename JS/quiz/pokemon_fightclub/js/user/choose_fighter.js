import { choose_id } from "./random_id.js"
import {calculate_stats} from "./calculate_stats.js"
async function choose_pokemon(){
    let id = choose_id();
    console.log("id pokemon user",id);
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    if(!respuesta.ok)
        throw new Error(`${id} ID pokemon doesn't found`);
    const json = await respuesta.json();
    const poke_name = json.forms[0].name;
    const poke_img = json.sprites.other.official-artwork.front_default;
    console.log("img link",poke_img);
    let stats = calculate_stats(json);
    show_pokemon(poke_name,poke_img,stats);
}