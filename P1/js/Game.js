var winner = false;

function loadMedia(idplayer){
    var videoElement = document.getElementById(idplayer);
    videoElement.load();
}

function startGame(){
    var videoElement = document.getElementById("vid");
	var tracks = videoElement.textTracks;
    alert("startGame");
    tracks[1].oncuechange = function() {
        if (!winner) {
            var cue = this.activeCues[0];
            var cueText = cue.text;
            console.log('cue text = ' + cueText);
            showPregunta(cueText); 
        } else {
            alert("entra");
        }
    }
}

function showPregunta(json) {
    //console.log('in showPregunta(json)');
    var info = JSON.parse(json);
    //Obtenemos información contenida en el JSON de la cue
    var inpregunta = info.n_pregunta;
    var ipregunta = info.pregunta;
    var irespuestas = info.respuestas;

    //Mostramos pregunta y respuestas por pantalla
    var preg = document.getElementsByClassName("pregunta");
    preg[0].setAttribute("id", inpregunta);
    preg[0].innerHTML = ipregunta;
    $("#respuestas").html('');
    for (var i = 0; i < irespuestas.length; i++) {
        var btn = document.createElement("BUTTON");
        btn.setAttribute("class", "btn");
        if (i == 0) {
            btn.setAttribute("class", "btn btn-info btnrespuesta animated bounceIn");
        } else {
            btn.setAttribute("class", "btn btn-warning btnrespuesta animated bounceIn");
        }
        btn.setAttribute("id", i.toString());
        btn.innerHTML = irespuestas[i].respuesta;
        btn.onclick= function () {
            checkRespuesta(json, this.id);
        };
        document.getElementById("respuestas").appendChild(btn);
    }

}


