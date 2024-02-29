export function show_pokemon(name,img,stats,who){
    let section = document.getElementById("my_pokemon_title_container");
    let title_poke_name  =document.createElement("h3");
    let name_mayus = name.toUpperCase();
    //apenas vamos a crear y llenar los elementos para mostrar mi pokemon
    if(who){
        //esto significa que el pokemon que vamos a mostrar es el del usuario;
        let img_tag = document.getElementById('my_poke_img');
        let pokemon_stats = document.getElementById('pokemon_stats');
        let title_styles = "text-xl font-medium text-gray-900 my-4 text-center bg-white";
        let i = 0;
        let stats_list = document.getElementById('stats_list')

        img_tag.setAttribute('src',img);//deberia mostrar la imagen
        console.log("link de la imagen que deberia mostrarse",img);
        title_poke_name.textContent = name_mayus;
        title_poke_name.setAttribute('id','my_poke_name');
        title_poke_name.setAttribute('class',title_styles);
        console.log("nombre del poke",title_poke_name);    
        section.appendChild(title_poke_name);

        stats[0].forEach(element => {
            let pair = document.createElement('li');
            pair.textContent=`${stats[0][i]}: ${stats[1][i]}`
            stats_list.appendChild(pair)
            i++
        });//funciona en cuestion de valores, pero los nombres de las stats salen como undefined


    }
}