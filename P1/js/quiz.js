const contenedor  = document.getElementById("quiz");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. En que hábitat vive nemo?",
    respuestas: {
      a: "Agua",
      b: "Aire",
      c: "Tierra",
      d: "Fuego"
    },
    respuestaCorrecta: "a"
  }
];


/* Ponemos en el html las preguntas */
function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = []; /*Array de respuestas*/

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push( 
        /*Mezclamos en una cadena de texto las diferentes etiquetas html con los valores que queremos darle*/
        `<label> 
          <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" /> 
          ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]} 
        </label>`
      );
    }

    /*Añadimos las preguntas y respuestas al array de "preguntasYrespuestas" */
    preguntasYrespuestas.push( /* Pregunta actual y respuesta*/
      `<div class="cuestion">${preguntaActual.pregunta}</div>
      <div class="respuestas"> ${respuestas.join("")} </div>` /*El join lo hacemos  */
    );
  });

  /* Introducimos todo en el contenedor del quiz*/
  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest()

/*
function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado); */