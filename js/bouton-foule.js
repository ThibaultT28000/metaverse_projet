document.addEventListener('DOMContentLoaded', function () {
  const player = document.querySelector('#foule');
  const bouton = document.querySelector('#btn-foule');

  let mute = false;

  bouton.addEventListener('click', function () {
    if (!mute) {
      player.setAttribute('sound', 'volume: 1');
      mute = false;
      bouton.setAttribute('color', '#5555FF');
    } else {
      player.setAttribute('sound', 'volume: 0');
      mute = true;
      bouton.setAttribute('color', 'red');
    }
  });
});
