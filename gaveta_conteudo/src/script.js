function alteraTamanho() {
    let altura = window.innerHeight;
    let container = document.getElementById('container');
    container.style.height = (altura - 20) + 'px';
}

alteraTamanho();

function img() {
    // Lista de URLs de imagens
    var imagens = [
        "/img/coracao-dos-namorados.jpg",
        "/img/desenho-de-maquete.jpg",
        "/img/maquete-de-coracoes-flutuantes.jpg",
        "/img/maquete-do-conceito-de-dia-dos-namorados.jpg"
    ];

    var elementos = document.querySelectorAll('.object-hover');

    elementos.forEach(function (elemento, index) {
        elemento.style.backgroundImage = "url('" + imagens[index] + "')";
    });

}

img()

// Seleciona o elemento
var elemento = document.getElementById('elemento');

var elementos = document.querySelectorAll('.object-hover');

elementos.forEach(function (elemento, index) {
    elemento.addEventListener('click', function () {

        elementos.forEach(function(outroElemento) {
            outroElemento.removeAttribute('id');
        });
        
        this.id = 'aberto';

        setTimeout(() => {
            elementos.forEach(function(outroElemento) {
                outroElemento.removeAttribute('id');
            });
        }, 10000)
    })
});
