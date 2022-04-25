const vid = document.getElementById("vid");
const timeElapsed = document.getElementById('time-elapsed');
const duration = document.getElementById('duration');
const volumen = document.getElementById("volumen");   
const mute = document.getElementById("Mute"); 
const menuVolumen = document.getElementById("VolumenMenu");
const iconMute = document.getElementById("muteButton");
const iconVolume = document.getElementById("volumeButton");

//inicio
function setup() {
    const videoDuration = Math.round(vid.duration);
    duration.setAttribute('max', videoDuration);
    const time = formatTime(videoDuration);
    duration.innerText = `${time.minutes}:${time.seconds}`;
    duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
    if (vid.muted) {
        iconMute.hidden = false;
    } else {
        iconVolume.hidden = false;
    }
}
// start video
function startPlayback() {
    vid.play();
    document.getElementById("play").hidden = true;
    document.getElementById("pause").hidden = false;
}
// pause video
function pausePlayback() {
    vid.pause();
    document.getElementById("play").hidden = false;
    document.getElementById("pause").hidden = true;
}

// updateVolume updates the video's volume
// and disables the muted state if active
function updateVolume() {
    if (vid.muted) {
        vid.muted = false;
    }
    vid.volume = volumen.value;
}

function updateMute() {
    vid.muted = !vid.muted;

    if (vid.muted) {
        volumen.setAttribute('data-volume', volumen.value);
        volumen.value = 0;
        iconMute.hidden = false;
        iconVolume.hidden = true;
    } else {
        volumen.value = volumen.dataset.volume;
        iconMute.hidden = true;
        iconVolume.hidden = false;
    }
}

//function fullscreen() {
//    document.getElementById("vid").requestFullscreen
//}

//utils
// formatTime takes a time length in seconds and returns the time in
// minutes and seconds
function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

    return {
        minutes: result.substr(3, 2),
        seconds: result.substr(6, 2),
    };
};
// updateTimeElapsed indicates how far through the video
// the current playback is
function updateTimeElapsed() {
    const time = formatTime(Math.round(vid.currentTime));
    timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
    timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}

//Event listeners
vid.addEventListener('loadedmetadata', setup);
vid.addEventListener('timeupdate', updateTimeElapsed);
volumen.addEventListener('input', updateVolume);
