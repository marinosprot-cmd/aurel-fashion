window.__slideTimers = window.__slideTimers || [];
function initSlides() {
  window.__slideTimers.forEach(clearInterval);
  window.__slideTimers = [];
  document.querySelectorAll("[data-slides]").forEach((box) => {
    const slides = [...box.querySelectorAll("img.slide")];
    slides.forEach((img) => {
      img.addEventListener("error", () => {
        img.remove();
        const left = box.querySelectorAll("img.slide");
        if (left.length && !box.querySelector("img.slide.on")) left[0].classList.add("on");
      });
    });
    if (slides.length < 2) return;
    let i = 0;
    const t = setInterval(() => {
      const now = [...box.querySelectorAll("img.slide")];
      if (now.length < 2) return;
      now.forEach((s) => s.classList.remove("on"));
      i = (i + 1) % now.length;
      now[i].classList.add("on");
    }, 4500);
    window.__slideTimers.push(t);
  });
}
window.initSlides = initSlides;
initSlides();

if (!document.querySelector('script[src="js/audio.js"]')) {
  var s = document.createElement("script");
  s.src = "js/audio.js";
  document.body.appendChild(s);
}
