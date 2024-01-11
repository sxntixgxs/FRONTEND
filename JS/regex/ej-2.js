const names = ["Pedro","Sara","Miriam","Nestor","Adrian","Sandro"];

//Comprobación sin usar expresiones regulares
names.forEach(function(name){
    const firstLetter = name.at(0).toLowerCase();
    const lastLetter = name.at(-1).toLowerCase();

    if((firstLetter === "p" || firstLetter === "s") && (lastLetter === "o" || lastLetter === "a")){
        console.log(`El nombre ${name} cumple las restricciones`);
    }
});

//Comprobación usando expresiones regulares

names.forEach(function(name){
    const regex = /^(p|s).+(o|a)$/i;
    if(regex.test(name)){ //.test() devuelve si la expresion a la que se le esta pasando es true or false expresion.text(elemento)
        console.log(`El nombre ${name} cumple las restricciones`)
    }
})