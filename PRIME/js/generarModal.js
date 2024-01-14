
function leerDesc(i){

}
function generarTarjeta(){
    const tarjeta = document.createElement("div");
    const img = document.createElement("img");
    const desc = document.createElement("p");
    const btn_stats = document.createElement("button")
    const btn_vote = document.createElement("button")
    const modal = document.getElementById("modal")
    let i = 1;
    while(i<7){
        tarjeta.classList.add("card")
        img.classList.add("album1")
        img.src = `https://sxntixgxs.github.io/FRONTEND/PRIME/img/${i}.png`
        desc.textContent = leerDesc(i)
        btn_stats.classList.add("btn_stats")
        btn_stats.id("btn_stats")
        btn_stats.classList.add("btn_vote")
        btn_stats.id("btn_vote")

        i++
    }

}