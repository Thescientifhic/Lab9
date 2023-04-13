const openModal = document.querySelector('.btn1');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');
const boton = document.getElementById("button")
const textarea = document.getElementById("comentario")
const cComentarios = document.getElementById("cComentarios")


openModal.addEventListener('click', ()=>{
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', ()=>{
    modal.classList.remove('modal--show');
});

function activar() {
    var value = textarea.value
    if ( value === "") {
        boton.classList.remove("activaBoton")
        boton.classList.add("desactivaBoton")
        boton.disabled = true;
    } else {
        boton.classList.remove("desactivaBoton")
        boton.classList.add("activaBoton")
        boton.disabled = false;
    }
}

function subirPublicacion() {
    var text = textarea.value
    var comment = `
    <div class="comentarios">
        <div class="perfil-s">
            <div><img class="img-2" src="./mujer.png" alt=""></div>
        <div class="name"><label for="img">Andrea Andrade</label></div>
    </div>
        <p class="publiComment">${text}</p>
    </div>
    `
    cComentarios.innerHTML += comment;
    document.getElementById("comentario").value = "";

}


