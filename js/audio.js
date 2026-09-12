(function () {
  if (document.getElementById("audio-toggle")) return init();
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "css/audio.css";
  document.head.appendChild(link);
  var btn = document.createElement("button");
  btn.type = "button";
  btn.id = "audio-toggle";
  btn.className = "audio-toggle";
  btn.setAttribute("aria-pressed", "false");
  btn.setAttribute("aria-label", "Play background music");
  btn.innerHTML = "<span aria-hidden=\"true\">\u266a</span>";
  var audio = document.createElement("audio");
  audio.id = "house-audio";
  audio.loop = true;
  audio.preload = "none";
  audio.volume = 0.28;
  var src = document.createElement("source");
  src.src = "https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8a73467.mp3";
  src.type = "audio/mpeg";
  audio.appendChild(src);
  document.body.appendChild(btn);
  document.body.appendChild(audio);
  init();
  function init() {
    var b = document.getElementById("audio-toggle");
    var a = document.getElementById("house-audio");
    if (!b || !a) return;
    a.volume = 0.28;
    b.addEventListener("click", function () {
      if (a.paused) {
        a.play().then(function () {
          b.setAttribute("aria-pressed", "true");
          b.classList.add("is-on");
          b.setAttribute("aria-label", "Mute background music");
        }).catch(function () {});
      } else {
        a.pause();
        b.setAttribute("aria-pressed", "false");
        b.classList.remove("is-on");
        b.setAttribute("aria-label", "Play background music");
      }
    });
  }
})();
