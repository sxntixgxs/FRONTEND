export function calculate_stats(json){
    let stats_names = [];
    let stats_values = [];
    //[Hp, Attack, Defense, Speed] 
    let hp_name = json.stats[0].name;
    let attack_name = json.stats[1].name;
    let defense_name = json.stats[2].name;
    let speed_name = json.stats[3].name;
    stats_names.push(hp_name,attack_name,defense_name,speed_name);
    let hp_value = json.stats[0].base_stat;
    let attack_value = json.stats[1].base_stat;
    let defense_value = json.stats[2].base_stat;
    let speed_value = json.stats[3].base_stat;
    stats_values.push(hp_value,attack_value,defense_value,speed_value);
    let exp = json.base_experience;
    let stats = [stats_names,stats_values,exp];//mejor manejo así que con Object
    return stats
}

