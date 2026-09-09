function extraImg(p) {
  const same = PRODUCTS.filter((x) => x.cat === p.cat);
  const i = same.findIndex((x) => x.id === p.id);
  return same[(i + 1) % same.length].img;
}
function renderProducts() {
  const root = document.querySelector("#grid");
  if (!root) return;
  const list = PRODUCTS.filter(
    (p) => filter === "all" || p.cat === filter || p.type === filter || p.brand === filter
  );
  root.innerHTML = list
    .map(
      (p) =>
        `<article class="card" onclick="openProduct('${p.id}')"><div class="card-img" data-slides><span class="badge">${brandOf(p).name}</span><img class="slide on" src="${p.img}" alt="${p[lang].name}"><img class="slide" src="${extraImg(p)}" alt=""></div><div class="card-body"><h3>${p[lang].name}</h3><div class="meta"><span>${p.color}</span><strong>€${p.price}</strong></div></div></article>`
    )
    .join("");
  if (window.initSlides) window.initSlides();
}
renderProducts();
