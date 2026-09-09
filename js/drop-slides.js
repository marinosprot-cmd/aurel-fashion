const SWAP = {
  m3: "https://images.unsplash.com/photo-1594938298603-c8148c26dae2?auto=format&fit=crop&w=900&q=80",
  m11: "https://images.unsplash.com/photo-1552374196-1ab2a1c5930e?auto=format&fit=crop&w=900&q=80",
  w2: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80",
  w9: "https://images.unsplash.com/photo-1529626455594-6445a6ce3b23?auto=format&fit=crop&w=900&q=80",
  w14: "https://images.unsplash.com/photo-1515886657613-9f3515e0c78f?auto=format&fit=crop&w=900&q=80"
};
PRODUCTS.forEach((p) => {
  if (SWAP[p.id]) p.img = SWAP[p.id];
});
function renderProducts() {
  const root = document.querySelector("#grid");
  if (!root) return;
  const list = PRODUCTS.filter(
    (p) => filter === "all" || p.cat === filter || p.type === filter || p.brand === filter
  );
  root.innerHTML = list
    .map(
      (p) =>
        `<article class="card" onclick="openProduct('${p.id}')"><div class="card-img"><span class="badge">${brandOf(p).name}</span><img src="${p.img}" alt="${p[lang].name}"></div><div class="card-body"><h3>${p[lang].name}</h3><div class="meta"><span>${p.color}</span><strong>€${p.price}</strong></div></div></article>`
    )
    .join("");
}
renderProducts();
