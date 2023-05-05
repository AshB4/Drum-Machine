const drumPads = document.querySelectorAll('.drum-pad');

drumPads.forEach(pad => {
  pad.addEventListener('click', function() {
    const audio = this.querySelector('.clip');
    audio.currentTime = 0; // reset audio to start if it's already playing
    audio.play();
    const display = document.getElementById('display');
    display.innerHTML = this.id;
  });
});
