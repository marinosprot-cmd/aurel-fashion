const EXTRA = [
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515e0c78f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1544441892-794166f5eac0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516762689617-e1cffcef79da?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542068829-1115f7251690?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512436991641-674fa658bd89?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1467043237213-65f2da5332fa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1495121604496-2613eaf782b3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80"
];
PRODUCTS.forEach((p, i) => {
  p.img2 = EXTRA[i % EXTRA.length];
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
        `<article class="card" onclick="openProduct('${p.id}')"><div class="card-img" data-slides><span class="badge">${brandOf(p).name}</span><img class="slide on" src="${p.img}" alt="${p[lang].name}"><img class="slide" src="${p.img2}" alt=""></div><div class="card-body"><h3>${p[lang].name}</h3><div class="meta"><span>${p.color}</span><strong>€${p.price}</strong></div></div></article>`
    )
    .join("");
  if (window.initSlides) window.initSlides();
}
renderProducts();
