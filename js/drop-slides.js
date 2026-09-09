const EXTRA = [
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=80"
];
PRODUCTS.forEach((p, i) => {
  let extra = EXTRA[i % EXTRA.length];
  if (extra === p.img) extra = EXTRA[(i + 3) % EXTRA.length];
  p.img2 = extra;
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
