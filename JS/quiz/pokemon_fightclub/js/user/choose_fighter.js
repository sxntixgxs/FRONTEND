import { choose_id } from "./random_id.js"
import {calculate_stats} from "./calculate_stats.js"
import { show_pokemon } from "./show_pokemon.js";
import { clear_data } from "./clear_title.js";
async function choose_pokemon(who_select){
    let id = choose_id();
    console.log("id pokemon user",id);
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    if(!respuesta.ok)
        throw new Error(`${id} ID pokemon doesn't found`);
    const json = await respuesta.json();
    if(who_select){
        const poke_name = json.forms[0].name;
        const poke_img = json.sprites.other["official-artwork"].front_default;//esto es una prueba los []
        console.log("img link",poke_img);
        let stats = calculate_stats(json);

        clear_data(who_select);
        show_pokemon(poke_name,poke_img,stats,who_select);
    }else{
        console.log('sanandreas')
        let card_cpu = document.getElementById('card_cpu');
        card_cpu.setAttribute('class','card w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center shadow-lg shadow-indigo-500/40')
        const poke_name = json.forms[0].name;
        const poke_img = json.sprites.other["official-artwork"].front_default;//esto es una prueba los []
        console.log("img link",poke_img);
        let stats = calculate_stats(json);
        clear_data(who_select);
        show_pokemon(poke_name,poke_img,stats,who_select)
    }
}
let who_select = true;

let choose_button = document.getElementById('choose_button');
choose_button.addEventListener('click',()=>{
    who_select = true;
    choose_pokemon(who_select)
});

let fight_button = document.getElementById('fight_button');
fight_button.addEventListener('click',()=>{
    who_select = false;
    choose_pokemon(who_select)
})