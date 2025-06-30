// quiz.js
// Este script gestiona la lógica del quiz usando los datos de data.js

let eventoActual = null;
let preguntaIndex = 0;
let oportunidadExtra = false;
let bloqueado = false;

function iniciarQuiz(eventoId) {
  eventoActual = eventos.find(e => e.id === eventoId);
  preguntaIndex = 0;
  oportunidadExtra = false;
  bloqueado = false;
  mostrarPregunta();
}

function mostrarPregunta() {
  const contenedor = document.querySelector(".quiz-container");
  const preguntaActual = eventoActual.quiz[preguntaIndex];

  if (!preguntaActual) {
    contenedor.innerHTML = `
      <div class="question">¡Felicidades! Completaste el quiz 🎉</div>
      <button onclick="iniciarQuiz(eventoActual.id)">Regresar</button>
    `;
    return;
  }

  const opcionesHTML = Object.entries(preguntaActual.opciones).map(([letra, texto]) => `
    <div class="option" onclick="verificarRespuesta('${letra}')">
      <span>${letra}</span> ${texto}
    </div>
  `).join("");

  contenedor.innerHTML = `
    <div class="question">${preguntaActual.pregunta}</div>
    <div id="opciones">${opcionesHTML}</div>
    <div class="message" id="mensaje"></div>
    <button id="ad-btn" onclick="verAnuncio()" style="display:none">Ver anuncio para continuar</button>
    <button id="siguiente-btn" onclick="siguientePregunta()" style="display:none">Siguiente</button>
    <button id="reiniciar-btn" onclick="iniciarQuiz(${eventoActual.id})" style="display:none">Reiniciar</button>
  `;

  bloqueado = false;
}

function verificarRespuesta(letra) {
  if (bloqueado) return;
  bloqueado = true;
  const correcta = eventoActual.quiz[preguntaIndex].respuesta;
  const mensaje = document.getElementById("mensaje");

  if (letra === correcta) {
    mensaje.textContent = "¡Correcto! 🎉";
    mensaje.style.color = "green";
    document.getElementById("siguiente-btn").style.display = "inline-block";
  } else {
    mensaje.textContent = "¡Incorrecto! 😢";
    mensaje.style.color = "red";
    if (!oportunidadExtra) {
      document.getElementById("ad-btn").style.display = "inline-block";
    } else {
      document.getElementById("reiniciar-btn").style.display = "inline-block";
    }
  }
}

function verAnuncio() {
  const adBtn = document.getElementById("ad-btn");
  adBtn.textContent = "Viendo anuncio...";
  adBtn.disabled = true;

  setTimeout(() => {
    oportunidadExtra = true;
    bloqueado = false;
    adBtn.style.display = "none";
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡Oportunidad extra desbloqueada! Intenta de nuevo.";
    mensaje.style.color = "blue";
  }, 5000);
}

function siguientePregunta() {
  preguntaIndex++;
  mostrarPregunta();
}
