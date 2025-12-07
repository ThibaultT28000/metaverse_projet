document.addEventListener('DOMContentLoaded', () => {

  const video = document.querySelector('#fight_scene');
  const videoPlane = document.querySelector('#video_plane');

  if (!video || !videoPlane) {
    console.error("Impossible de trouver la vidéo ou la surface vidéo.");
    return;
  }

  let playing = true;

  videoPlane.addEventListener('click', () => {
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    playing = !playing;
  });

});
