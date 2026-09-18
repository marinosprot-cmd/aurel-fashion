(function () {
  var TRACKS = [
    {
      title: "Luxury Style (Calm Deep House)",
      src: "https://archive.org/download/royalty-free-music/Luxury%20Style%20(Calm%20Deep%20House).mp3"
    },
    {
      title: "Atmosphere Piano House",
      src: "https://archive.org/download/royalty-free-music/Atmosphere%20Piano%20House%20(Royalty%20Free%20Music).mp3"
    },
    {
      title: "Chill Deep House",
      src: "https://archive.org/download/royalty-free-music/Chill%20Deep%20House%20(Royalty%20Free%20Music).mp3"
    }
  ];
  var idx = 0;
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
  btn.setAttribute("aria-label", "Play · " + TRACKS[0].title);
  btn.title = TRACKS[0].title + " — click play/pause · double-click next";
  btn.innerHTML = "<span aria-hidden=\"true\">\u266a</span>";
  var audio = document.createElement("audio");
  audio.id = "house-audio";
  audio.preload = "none";
  audio.volume = 0.36;
  var src = document.createElement("source");
  src.type = "audio/mpeg";
  src.src = TRACKS[0].src;
  audio.appendChild(src);
  document.body.appendChild(btn);
  document.body.appendChild(audio);
  init();

  function applyLabels(playing) {
    var b = document.getElementById("audio-toggle");
    if (!b) return;
    var t = TRACKS[idx].title;
    b.title = t + " — click play/pause · double-click next";
    b.setAttribute("aria-label", (playing ? "Mute · " : "Play · ") + t);
  }

  function setTrack(i, keepPlaying) {
    idx = ((i % TRACKS.length) + TRACKS.length) % TRACKS.length;
    var a = document.getElementById("house-audio");
    var b = document.getElementById("audio-toggle");
    if (!a) return;
    var shouldPlay = keepPlaying;
    a.pause();
    while (a.firstChild) a.removeChild(a.firstChild);
    var s = document.createElement("source");
    s.type = "audio/mpeg";
    s.src = TRACKS[idx].src;
    a.appendChild(s);
    a.load();
    applyLabels(!!shouldPlay && b && b.classList.contains("is-on"));
    if (shouldPlay) {
      a.play().then(function () {
        if (b) {
          b.setAttribute("aria-pressed", "true");
          b.classList.add("is-on");
          applyLabels(true);
        }
      }).catch(function () {});
    }
  }

  function init() {
    var b = document.getElementById("audio-toggle");
    var a = document.getElementById("house-audio");
    if (!b || !a) return;
    a.volume = 0.36;
    a.loop = false;
    a.addEventListener("ended", function () {
      setTrack(idx + 1, true);
    });
    var clickTimer = null;
    b.addEventListener("click", function (e) {
      if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
        setTrack(idx + 1, !a.paused || b.classList.contains("is-on"));
        return;
      }
      clickTimer = setTimeout(function () {
        clickTimer = null;
        if (a.paused) {
          a.play().then(function () {
            b.setAttribute("aria-pressed", "true");
            b.classList.add("is-on");
            applyLabels(true);
          }).catch(function () {});
        } else {
          a.pause();
          b.setAttribute("aria-pressed", "false");
          b.classList.remove("is-on");
          applyLabels(false);
        }
      }, 280);
    });
  }
})();
