const contenedor  = document.getElementById("quiz");
const resultadoTest = document.getElementById("quiz");

const preguntas = [
  {
    pregunta: "A qué pertenece el logo?",
    respuestas: {
      a: "Juegos olímpicos",
      b: "Juegos paralímpicos",
      c: "Juegos panamericanos",
      d: "Juegos del hambre"
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
          <input type="button" 
          style="text-align:center" 
          name="${numeroDePregunta}" 
          value="${preguntaActual.respuestas[letraRespuesta]}" /> 
        </label>
        <br>`
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


function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas"); /*Cogemos las respuestas del div */
  let respuestasCorrectas = 0; /* Contador en caso de que la respuesta se correcta */

  /* Recorremos las preguntas para */
  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta]; /* Accedemos a todas las respuestas */
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`; /*comprueba la casilla que ha marcado el usuario*/
    
    const respuestaElegida = ( /*Comprobamos la respuesta que el usuario ha marcado*/
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    /* Miramos que la respuesta del usuario sea buena o mala  */
    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;
      respuestas[numeroDePregunta].style.color = "blue";
      
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.push(
    `<label> 
      <input  
          style="text-align:center" 
          name="${respuestasCorrectas}" 
          value="${respuestasCorrectas}" de 10 /> 
        </label>`
  );
}

mostrarResultado();