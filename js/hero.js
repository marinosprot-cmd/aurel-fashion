(() => {
  document.querySelectorAll("[data-slides]").forEach((box) => {
    const slides = [...box.querySelectorAll("img.slide")];
    slides.forEach((img) => {
      img.addEventListener("error", () => {
        img.remove();
        const left = box.querySelectorAll("img.slide");
        if (left.length && !box.querySelector("img.slide.on")) left[0].classList.add("on");
      });
    });
    const live = () => [...box.querySelectorAll("img.slide")];
    if (live().length < 2) return;
    let i = 0;
    setInterval(() => {
      const now = live();
      if (now.length < 2) return;
      now.forEach((s) => s.classList.remove("on"));
      i = (i + 1) % now.length;
      now[i].classList.add("on");
    }, 4500);
  });
})();
