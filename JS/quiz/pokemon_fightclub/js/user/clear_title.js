export function clear_data(who_select){
    let name_poke = document.getElementById('my_poke_name');
    let poke_container = document.getElementById('my_pokemon_title_container');
    let ul = document.getElementById('stats_list')
    if(who_select){
        if(name_poke){
            poke_container.removeChild(name_poke);
        }
        while(ul.firstChild){
            ul.removeChild(ul.firstChild)
        }
    }else{
        //completar con limpiar la card del cpu
    }
}