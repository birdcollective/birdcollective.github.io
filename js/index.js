


$(document).ready(function(){
  var audio = document.getElementById('video-background');

  document.getElementById('mute-btn').addEventListener('click', function (e)
  {
      e = e || window.event;
      audio.muted = !audio.muted;
     e.preventDefault();

     if (audio.muted){
      console.log("audio is muted");
      $('.fa').removeClass('fa-volume-up');
      $('.fa').addClass('fa-volume-off');
     } else {
      console.log("audio is not muted");
      $('.fa').removeClass('fa-volume-off');
      $('.fa').addClass('fa-volume-up');
     }
  }, false);
});


