export function choose_id(){
    const min = Math.ceil(1);
    const max = Math.floor(806);
    const poke_id = Math.floor(Math.random()*(max-min+1)+min);
    return poke_id
}//ya está corregida