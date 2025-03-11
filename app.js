// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombreAmigo = inputAmigo.value.trim();

  if (nombreAmigo === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  listaDeAmigos.push(nombreAmigo);
  inputAmigo.value = '';

  actualizarListaAmigos();
}
