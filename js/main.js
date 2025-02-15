function mostrarMensaje() {
    document.getElementById('mensaje').classList.add('mostrar');
}
function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-float');
    corazon.innerHTML = '❤️';
    document.querySelector('.corazones').appendChild(corazon);
    
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    setTimeout(() => {
        corazon.remove();
    }, 5000);
}
setInterval(crearCorazon, 500);