document.addEventListener('DOMContentLoaded', () => {

    var player1 = new BootstrapVideoplayer('player-1',{
        selectors:{
            video: '.video'
        }
    })


    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl,{
          boundary: document.body
      })
    })

})

document.addEventListener('DOMContentLoaded', () => {
    var myPlayer = new BootstrapVideoplayer('myPlayer',{
        selectors:{
          video: '.video',
          playPauseButton: '.btn-video-playpause',
          playIcon: '.bi-play-fill',
          pauseIcon: '.bi-pause-fill',
          progress: '.progress',
          progressbar: '.progress-bar',
          pipButton: '.btn-video-pip',
          fullscreenButton: '.btn-video-fullscreen',
          volumeRange: '.form-range-volume'
        }
    })
  })
