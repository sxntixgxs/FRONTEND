//modal cuando se preisone approaves
const abreModal = document.getElementById("ap");
const modal = document.querySelector('.modal');
const cerrar = document.querySelector('.close-modal')

document.addEventListener('DOMContentLoaded',function(){
    abreModal.addEventListener('click',e=>{
        e.preventDefault();
        modal.style.visibility = "visible"
        modal.classList.add("modal--show")
    })
    cerrar.addEventListener('click',e=>{
        e.preventDefault()
        modal.classList.remove("modal--show")
    })
})