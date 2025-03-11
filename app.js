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

function actualizarListaAmigos() {
  const listaAmigosElement = document.getElementById('listaAmigos');
  listaAmigosElement.innerHTML = '';

  listaDeAmigos.forEach(amigo => {
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = amigo;
    listaAmigosElement.appendChild(nuevoItem);
  });
}

function sortearAmigo() {
  if (listaDeAmigos.length < 2) {
    alert('Necesitas al menos dos amigos para realizar el sorteo.');
    return;
  }

  const resultadoSorteo = asignarAmigosSecretos();
  mostrarResultado(resultadoSorteo);
}
function asignarAmigosSecretos() {
    let amigos = [...listaDeAmigos]; // Clonamos la lista para no modificar la original
    let amigosSecretos = {};
  
    // Función para mezclar un array usando el algoritmo de Fisher-Yates
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    shuffleArray(amigos);
  
    for (let i = 0; i < listaDeAmigos.length; i++) {
      let amigoActual = listaDeAmigos[i];
      let amigoSecreto = amigos[i];
  
      // Asegurar que nadie se tenga a sí mismo como amigo secreto
      if (amigoActual === amigoSecreto) {
        if (i === listaDeAmigos.length - 1) { // Si es el último, intercambia con el anterior
          amigosSecretos[amigoActual] = amigos[0];
          amigosSecretos[listaDeAmigos[0]] = amigoSecreto;
        } else { // Si no, intercambia con el siguiente
          amigosSecretos[amigoActual] = amigos[i + 1];
          amigosSecretos[listaDeAmigos[i+1]] = amigoSecreto;
        }
      } else {
           amigosSecretos[amigoActual] = amigoSecreto;
      }
    }
    return amigosSecretos;
  }

function mostrarResultado(resultadoSorteo) {
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = ''; // Limpia el resultado anterior

  for (const amigo in resultadoSorteo) {
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = `${amigo} le regala a ${resultadoSorteo[amigo]}`;
    resultadoElement.appendChild(nuevoItem);
  }
}
