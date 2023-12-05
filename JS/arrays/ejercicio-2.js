let text;
function checkInString(text,term){
    text=text.toLowerCase();
    term=term.toLowerCase();
    if (text.indexOf(term)>=0){
        return true
    }else{return false}
}

text = prompt("Ingrese un texto");
console.log(checkInString(text,prompt('Ingrese un texto')));


//recorrido con for of
for (const l of letras.values()) {
    console.log(l)  
}