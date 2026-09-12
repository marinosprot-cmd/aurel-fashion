(function () {
  var btn = document.getElementById("audio-toggle");
  var audio = document.getElementById("house-audio");
  if (!btn || !audio) return;
  audio.volume = 0.28;
  function setOn(on) {
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.classList.toggle("is-on", on);
    btn.setAttribute("aria-label", on ? "Mute background music" : "Play background music");
  }
  btn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play().then(function () { setOn(true); }).catch(function () { setOn(false); });
    } else {
      audio.pause();
      setOn(false);
    }
  });
})();
