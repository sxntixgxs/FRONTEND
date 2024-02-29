export function clear_data(){
    let name_poke = document.getElementById('my_poke_name');
    let poke_container = document.getElementById('my_pokemon_title_container');
    if(name_poke){
        poke_container.removeChild(name_poke);
    }
    //completar la funcion, debe limpiar tambien las stats de la lista
}