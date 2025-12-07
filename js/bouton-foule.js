document.addEventListener('DOMContentLoaded', function () {

  const player = document.querySelector('#ambiance-foule');
  const bouton = document.querySelector('#btn-foule');

  let mute = false;

  bouton.addEventListener('click', function () {

    // Si on mute
    if (!mute) {
      player.setAttribute('sound', 'volume: 0');
      mute = true;
      bouton.setAttribute('color', '#5555FF'); // feedback visuel optionnel
    }
    // Si on unmute
    else {
      player.setAttribute('sound', 'volume: 1');
      mute = false;
      bouton.setAttribute('color', '#FF5555'); // feedback visuel
    }

  });

});
