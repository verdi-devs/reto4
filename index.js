const botonCambiarEstilo = document.getElementById('botonCambiarEstilo');

botonCambiarEstilo.addEventListener('click', function () {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    botonCambiarEstilo.style.backgroundColor = color;
});
