document.addEventListener('DOMContentLoaded', function () {

  const sky = document.querySelector('#sky');
  const boutonSky = document.querySelector('#btn-jn');

  let modeNuit = false;

  boutonSky.addEventListener('click', function () {

    if (!modeNuit) {
      // Passer au ciel de nuit
      sky.setAttribute('src', '#nuit');
      modeNuit = true;
      boutonSky.setAttribute('color', '#5555FF');
    } else {
      // Revenir au ciel de jour
      sky.setAttribute('src', '#jour');
      modeNuit = false;
      boutonSky.setAttribute('color', '#FFA500');
    }

  });

});
