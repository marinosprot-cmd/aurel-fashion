const PRODUCTS = [
  {
    id: "erv-shirt",
    brand: "erverte",
    cat: "men",
    type: "shirts",
    color: "Multi",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/tryon_98442.webp?v=1778575390",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https://erverte.com/products/geometric-harmony-linen-shirt",
    en: { name: "Geometric Harmony Linen Shirt", desc: "Made in France. Shop on their store." },
    el: { name: "Geometric Harmony Linen Shirt", desc: "Made in France. Αγορά στο δικό τους store." }
  },
  {
    id: "erv-polo",
    brand: "erverte",
    cat: "men",
    type: "knit",
    color: "Navy",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/POLO-MARINE_american_shot_52817.webp?v=1765350425",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https://erverte.com/products/navy-organic-cotton-polo-made-in-france",
    en: { name: "Navy organic polo", desc: "Organic cotton. Made in France. Shop on their store." },
    el: { name: "Navy organic polo", desc: "Organic cotton. Made in France. Αγορά στο δικό τους store." }
  },
  {
    id: "via-hoodie",
    brand: "viaduct",
    cat: "men",
    type: "knit",
    color: "Grey",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/IH4302-063_1_2999184a-47d8-4372-9cd3-01bd9d866e05.jpg?v=1788853256",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https://viaductclothing.co.uk/products/nike-tech-men-s-fleece-windrunner-full-zip-jacket-grey-ih4302-063",
    en: { name: "Nike Tech Windrunner", desc: "Fleece full-zip. Shop on their store." },
    el: { name: "Nike Tech Windrunner", desc: "Fleece full-zip. Αγορά στο δικό τους store." }
  },
  {
    id: "via-trainers",
    brand: "viaduct",
    cat: "men",
    type: "trainers",
    color: "White",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/GY3420_SLC_eCom_1659594725131.jpg?v=1788518215",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https://viaductclothing.co.uk/products/adidas-originals-superstar-shoes-white-gy3420",
    en: { name: "adidas Superstar", desc: "Trainers. Shop on their store." },
    el: { name: "adidas Superstar", desc: "Trainers. Αγορά στο δικό τους store." }
  }
];

const BRANDS = [
  {
    id: "erverte",
    name: "Erverte",
    model: "affiliate",
    en: "Partner house. High-end menswear in natural fibres, made in France. You buy on their store.",
    el: "Φίρμα-συνεργάτης. Ανδρικά σε φυσικές ίνες, made in France. Αγορά στο δικό τους store."
  },
  {
    id: "viaduct",
    name: "Viaduct",
    model: "affiliate",
    en: "Partner house. Men, women, trainers. You buy on their store.",
    el: "Φίρμα-συνεργάτης. Άνδρες, γυναίκες, trainers. Αγορά στο δικό τους store."
  }
];

let lang = localStorage.getItem("glamour-lang") || "en";
let filter = "all";
let cart = [];
let activeProduct = null;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function t(key) {
  let v = typeof I18N !== "undefined" ? I18N[lang] : null;
  if (!v) return key;
  for (const p of key.split(".")) v = v?.[p];
  return v ?? key;
}

function brandOf(p) {
  return BRANDS.find((b) => b.id === (p.brand || "erverte")) || BRANDS[0];
}

function applyLang() {
  $$("[data-i]").forEach((el) => (el.textContent = t(el.dataset.i)));
  $$("[data-ph]").forEach((el) => (el.placeholder = t(el.dataset.ph)));
  document.documentElement.lang = lang === "el" ? "el" : "en";
  $$(".lang-btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  renderProducts();
  renderBrands();
  renderCart();
}

function renderBrands() {
  const root = document.getElementById("brands");
  if (!root) return;
  root.innerHTML = BRANDS.map(
    (b) =>
      `<article class="brand-card" onclick="setFilter('${b.id}', null)"><h3>${b.name}</h3><p>${b[lang]}</p></article>`
  ).join("");
}

function shopCta() {
  return lang === "el" ? "Shop on their store" : "Shop on their store";
}

function renderProducts() {
  const root = $("#grid");
  if (!root) return;
  const list = PRODUCTS.filter(
    (p) => filter === "all" || p.cat === filter || p.type === filter || p.brand === filter
  );
  root.innerHTML = list
    .map((p) => {
      const b = brandOf(p);
      return `<a class="card" rel="sponsored noopener" target="_blank" href="${p.url}"><div class="card-img"><span class="badge">${b.name}</span><img src="${p.img}" alt="${p[lang].name}" loading="lazy"></div><div class="card-body"><h3>${p[lang].name}</h3><div class="meta"><span>${p.color}</span><strong>${shopCta()}</strong></div></div></a>`;
    })
    .join("");
}

function openProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (p?.url) window.open(p.url, "_blank", "noopener");
}

function closeDrawer() {
  const d = $("#drawer");
  if (d) d.style.display = "none";
}
function closeCart() {
  const c = $("#cart");
  if (c) c.style.display = "none";
}
function openCart() {
  renderCart();
  const c = $("#cart");
  if (c) c.style.display = "block";
}
function addToCart() {}
function renderCart() {
  const body = $("#cart-body");
  if (!body) return;
  body.innerHTML = `<p>${t("empty")}</p>`;
}
function updateCount() {
  const c = $("#count");
  if (c) c.textContent = 0;
}
function setLang(next) {
  lang = next;
  localStorage.setItem("glamour-lang", lang);
  applyLang();
}
function setFilter(next, el) {
  filter = next;
  $$(".chip").forEach((c) => c.classList.remove("active"));
  if (el) el.classList.add("active");
  renderProducts();
  document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
}
function partnerApply(e) {
  e.preventDefault();
  e.target.reset();
}
function quiz(mood) {
  const box = $("#quiz-result");
  if (!box || typeof I18N === "undefined") return;
  box.style.display = "block";
  box.textContent = I18N[lang].rec[mood];
}
function newsletter(e) {
  e.preventDefault();
  e.target.reset();
}

window.PRODUCTS = PRODUCTS;
window.BRANDS = BRANDS;
window.openProduct = openProduct;
window.closeDrawer = closeDrawer;
window.closeCart = closeCart;
window.openCart = openCart;
window.setLang = setLang;
window.setFilter = setFilter;
window.quiz = quiz;
window.newsletter = newsletter;
window.partnerApply = partnerApply;
applyLang();
updateCount();
