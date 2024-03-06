export function show_pokemon(name,img,stats,who){
    let section = document.getElementById("my_pokemon_title_container");
    let section_cpu = document.getElementById("cpu_title_container")
    let title_poke_name  =document.createElement("h3");
    let name_mayus = name.toUpperCase();
    //apenas vamos a crear y llenar los elementos para mostrar mi pokemon
    if(who){
        //esto significa que el pokemon que vamos a mostrar es el del usuario;
        let img_tag = document.getElementById('my_poke_img');
        let pokemon_stats = document.getElementById('pokemon_stats');
        let title_styles = "text-xl text-black-900 my-4 text-center bg-white font-bold";
        let i = 0;
        let stats_list = document.getElementById('stats_list')

        img_tag.setAttribute('src',img);//deberia mostrar la imagen
        console.log("link de la imagen que deberia mostrarse",img);
        title_poke_name.textContent = name_mayus;
        title_poke_name.setAttribute('id','my_poke_name');
        title_poke_name.setAttribute('class',title_styles);
        console.log("nombre del poke",title_poke_name);    
        section.appendChild(title_poke_name);
        console.log(stats[0])
        stats[0].forEach(element => {
            let pair = document.createElement('li');
            pair.setAttribute('class','stats_custom uppercase font-bold text-center rounded-full border-solid border-2 border-rose-500 shadow-lg shadow-indigo-500/40')
            pair.textContent=`${stats[0][i]}: ${stats[1][i]}`
            stats_list.appendChild(pair)
            i++
        });//funciona en cuestion de valores, pero los nombres de las stats salen como undefined


    }else{
        let img_tag = document.getElementById('cpu_poke_img');
        let title_styles = "text-xl text-black-900 my-4 text-center bg-white font-bold";
        let i = 0;
        let stats_list = document.getElementById('stats_list_cpu')
        img_tag.setAttribute('src',img);//deberia mostrar la imagen
        console.log("link de la imagen que deberia mostrarse",img);
        title_poke_name.textContent = name_mayus;
        title_poke_name.setAttribute('id','my_poke_name');
        title_poke_name.setAttribute('class',title_styles);
        console.log("nombre del poke",title_poke_name); 
        section_cpu.appendChild(title_poke_name);
        console.log(stats[0])
        //incompleto, solo da la imagen por ahora
        
    }
}