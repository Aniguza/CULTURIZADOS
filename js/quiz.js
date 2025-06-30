// quiz.js
// Este script gestiona la lógica del quiz usando los datos de data.js

let eventoActual = null;
let preguntaIndex = 0;
let oportunidadExtra = false;
let bloqueado = false;
let tiempoRestante = 10;
let temporizador;
let intentos = 0; // máximo 2 intentos por pregunta

// Sonidos
const sonidoCorrecto = new Audio('../mp3/correcta.mp3');
const sonidoIncorrecto = new Audio('../mp3/perder.mp3');

function iniciarQuiz(eventoId) {
  eventoActual = eventos.find(e => e.id === eventoId);
  preguntaIndex = 0;
  oportunidadExtra = false;
  bloqueado = false;
  intentos = 0;
  mostrarPregunta();
}

function mostrarPregunta() {
  clearInterval(temporizador);
  tiempoRestante = 10;
  intentos = 0;

  const contenedor = document.querySelector(".quiz-container");
  const preguntaActual = eventoActual.quiz[preguntaIndex];

  if (!preguntaActual) {
    const completados = JSON.parse(localStorage.getItem('quizCompletados')) || [];
    if (!completados.includes(eventoActual.id)) {
      completados.push(eventoActual.id);
      localStorage.setItem('quizCompletados', JSON.stringify(completados));
    }

    window.location.href = `../html/premio.html?id=${eventoActual.id}`;
    return;
  }

  const opcionesHTML = Object.entries(preguntaActual.opciones).map(([letra, texto]) => `
    <div class="option" onclick="verificarRespuesta('${letra}')">
      <span>${letra}</span> ${texto}
    </div>
  `).join("");

  contenedor.innerHTML = `
    <div class="question">${preguntaActual.pregunta}</div>
    <div class="timer">⏳ Tiempo: <span id="timer">10</span>s</div>
    <div id="opciones">${opcionesHTML}</div>
    <div class="message" id="mensaje"></div>
    <button id="ad-btn" onclick="verAnuncio()" style="display:none">Ver anuncio para continuar</button>
    <button id="siguiente-btn" onclick="siguientePregunta()" style="display:none">Siguiente</button>
    <button id="reiniciar-btn" onclick="iniciarQuiz(${eventoActual.id})" style="display:none">Reiniciar</button>
  `;

  bloqueado = false;
  iniciarTemporizador();
}

function iniciarTemporizador() {
  const timerEl = document.getElementById("timer");
  temporizador = setInterval(() => {
    tiempoRestante--;
    timerEl.textContent = tiempoRestante;
    if (tiempoRestante <= 0) {
      clearInterval(temporizador);
      verificarRespuesta(null); // tiempo agotado, cuenta como intento
    }
  }, 1000);
}

function verificarRespuesta(letra) {
  if (bloqueado) return;
  bloqueado = true;
  clearInterval(temporizador);

  const correcta = eventoActual.quiz[preguntaIndex].respuesta;
  const mensaje = document.getElementById("mensaje");

  if (letra === correcta) {
    mensaje.textContent = "¡Correcto! 🎉";
    mensaje.style.color = "green";
    document.getElementById("siguiente-btn").style.display = "inline-block";
    sonidoCorrecto.play();
  } else {
    intentos++;
    mensaje.textContent = "¡Incorrecto! 😢";
    mensaje.style.color = "red";
    sonidoIncorrecto.play();

    if (intentos === 1 && !oportunidadExtra) {
      document.getElementById("ad-btn").style.display = "inline-block";
    } else {
      // Guardar como no obtenido
      const noObtenidos = JSON.parse(localStorage.getItem('quizNoObtenido')) || [];
      if (!noObtenidos.includes(eventoActual.id)) {
        noObtenidos.push(eventoActual.id);
        localStorage.setItem('quizNoObtenido', JSON.stringify(noObtenidos));
      }
      // Redirigir a la página de eventos
      setTimeout(() => {
        window.location.href = " ../html/event.html ";
      }, 1500);
    }
  }
}

function verAnuncio() {
  const adBtn = document.getElementById("ad-btn");
  adBtn.disabled = true;

  const modal = new bootstrap.Modal(document.getElementById('modalAnuncio'));
  const video = document.getElementById('videoAnuncio');

  // Reinicia el video
  video.currentTime = 0;
  video.muted = false;
  video.controls = false;

  // Muestra el modal y reproduce el video
  modal.show();
  video.play().catch(err => {
    console.warn("Autoplay falló, esperando interacción del usuario:", err);
  });

  // Cuando termina el video, desbloquea oportunidad
  video.onended = () => {
    modal.hide();
    oportunidadExtra = true;
    bloqueado = false;
    adBtn.style.display = "none";

    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡Oportunidad extra desbloqueada! Intenta de nuevo.";
    mensaje.style.color = "blue";
  };
}


function siguientePregunta() {
  preguntaIndex++;
  mostrarPregunta();
}
