const respuestasContestadas = [];
const preguntas = [];
var acabat = false;
var videoElement;
var tracks; 
var seleccionable = true;

function startGame() {
    videoElement = document.getElementById("vid");
    tracks = videoElement.textTracks;
    tracks[0].oncuechange = function () {
        if (tracks.activeCues !== null && this.activeCues[0] !== null) {
            var cue = this.activeCues[0];
            if (cue) {
                if (cue.text == 'Final') {
                    seleccionable = false;
                    mostrarRespuestas();
                } else {
                    preguntas.push(newPregunta(cue.text));
                    showPregunta(preguntas[preguntas.length-1]);
                }
            }        
        }      
    }
}

function showPregunta(pregunta) {
    //Mostramos pregunta y respuestas por pantalla
    var preg = document.getElementsByClassName("pregunta");
    var btn = [];
    preg[0].setAttribute("id", pregunta.id);
    preg[0].innerHTML = pregunta.preguntaText;
    $("#respuestas").html(''); 
    for (var i = 0; i < pregunta.respuestas.length; i++) {
        btn[i] = document.createElement("BUTTON");
        btn[i].setAttribute("class", "btn btn-info btnrespuesta animated bounceIn");           
        btn[i].setAttribute("id", i.toString());
        btn[i].innerHTML = btn[i].id.toString() + ".  " + pregunta.respuestas[i];
        btn[i].onclick = function () {
            //Si todavía no ha terminado el juego, seleccionamos
            if (seleccionable) {
                //Reset de color de los botones
                btn[0].setAttribute("class", "btn btn-info btnrespuesta animated bounceIn");
                btn[1].setAttribute("class", "btn btn-info btnrespuesta animated bounceIn");
                btn[2].setAttribute("class", "btn btn-info btnrespuesta animated bounceIn");

                respuestasContestadas[pregunta.id] = (this.id == pregunta.idRespuestaCorrecta);
                this.setAttribute("class", "btn btn-warning btnrespuesta animated bounceIn");
            }    
        };
        document.getElementById("respuestas").appendChild(btn[i]);
    }
    //mostramos las preguntas correctas cuando el juego ya ha terminado
    if (!seleccionable) {
        if (pregunta.idRespuestaCorrecta == 0) {
            btn[0].setAttribute("class", "btn btn-success btnrespuesta animated bounceIn");
        } else if (pregunta.idRespuestaCorrecta == 1) {
            btn[1].setAttribute("class", "btn btn-success btnrespuesta animated bounceIn");
        } else {
            btn[2].setAttribute("class", "btn btn-success btnrespuesta animated bounceIn");
        }
    }
}

function mostrarRespuestas() {
    //var label = document.createElement("LABEL");
    //label.setAttribute("id", "indice-preg");
    //label.textContent = "Indice de preguntas";
    //document.getElementById("resultadosQuiz").appendChild(label);

    var btn = []
    $("#resultadosQuiz").html('');
    for (var i = 0; i < respuestasContestadas.length; i++) {
        btn[i] = document.createElement("Boton_respuesta_guardada");
        btn[i].setAttribute("class", "btn");
        btn[i].setAttribute("id", i.toString());
        if (respuestasContestadas[i]) {
            btn[i].setAttribute("class", "btn btn-success btnrespuesta animated bounceIn");
        } else {
            btn[i].setAttribute("class", "btn btn-danger btnrespuesta animated bounceIn");        
        }
        btn[i].innerHTML = i;
        btn[i].onclick = function () {
            debugger;
            showPregunta(preguntas[this.id]);
        }
        document.getElementById("resultadosQuiz").appendChild(btn[i]);
    }
}

function newPregunta(json) {
    var p = JSON.parse(json);
    var pregunta = {
        id: p.n_pregunta,
        preguntaText: p.pregunta,
        respuestas: p.respuestas,
        idRespuestaCorrecta: p.respuesta_correcta
    }
    return pregunta;
}



