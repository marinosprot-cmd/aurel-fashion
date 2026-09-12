(function () {
  var SRC = "https://archive.org/download/ChillAndLounge/chill_lounge1.mp3";
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
  btn.setAttribute("aria-label", "Play lounge music");
  btn.innerHTML = "<span aria-hidden=\"true\">\u266a</span>";
  var audio = document.createElement("audio");
  audio.id = "house-audio";
  audio.loop = true;
  audio.preload = "none";
  audio.volume = 0.32;
  var src = document.createElement("source");
  src.src = SRC;
  src.type = "audio/mpeg";
  audio.appendChild(src);
  document.body.appendChild(btn);
  document.body.appendChild(audio);
  init();
  function init() {
    var b = document.getElementById("audio-toggle");
    var a = document.getElementById("house-audio");
    if (!b || !a) return;
    a.volume = 0.32;
    b.addEventListener("click", function () {
      if (a.paused) {
        a.play().then(function () {
          b.setAttribute("aria-pressed", "true");
          b.classList.add("is-on");
          b.setAttribute("aria-label", "Mute lounge music");
        }).catch(function () {});
      } else {
        a.pause();
        b.setAttribute("aria-pressed", "false");
        b.classList.remove("is-on");
        b.setAttribute("aria-label", "Play lounge music");
      }
    });
  }
})();
