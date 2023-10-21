/* alert("Este es un mensaje de alerta"); */
// Obtén una referencia al botón y al elemento que deseas cambiar
const botonCambiarEstilo = document.getElementById('cambiarEstilo');
const elementoAfectado = document.getElementById('elementoAfectado');

// Agrega un manejador de eventos al botón para el evento de clic
botonCambiarEstilo.addEventListener('click', () => {
    // Agrega o quita una clase CSS al elemento
    elementoAfectado.classList.toggle('nuevo-estilo');
});
