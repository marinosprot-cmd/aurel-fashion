(function () {
  const INTERVAL = 4500;

  function initLookbook(stage) {
    const wrap = stage.closest(".lookbook-wrap") || stage.parentElement;
    const slides = [...stage.querySelectorAll("img.look-slide")];
    const dotsRoot = wrap.querySelector(".lookbook-dots");
    if (slides.length < 1) return;

    let i = 0;
    let timer = null;

    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, idx) => s.classList.toggle("on", idx === i));
      if (dotsRoot) {
        [...dotsRoot.querySelectorAll("button")].forEach((b, idx) => {
          if (idx === i) b.setAttribute("aria-current", "true");
          else b.removeAttribute("aria-current");
        });
      }
    }

    function next() { show(i + 1); }
    function prev() { show(i - 1); }

    function arm() {
      clearInterval(timer);
      if (slides.length < 2) return;
      timer = setInterval(next, INTERVAL);
    }

    if (dotsRoot) {
      dotsRoot.innerHTML = "";
      slides.forEach((_, idx) => {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Slide " + (idx + 1));
        b.addEventListener("click", () => { show(idx); arm(); });
        dotsRoot.appendChild(b);
      });
    }

    let x0 = null;
    stage.addEventListener("touchstart", (e) => {
      x0 = e.changedTouches[0].clientX;
    }, { passive: true });
    stage.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) < 40) return;
      if (dx < 0) next(); else prev();
      arm();
    }, { passive: true });

    show(0);
    arm();
  }

  document.querySelectorAll("[data-lookbook]").forEach(initLookbook);
})();
