const PRODUCTS = [
  {
    id: "erv-geometric-harmony-linen-",
    brand: "erverte",
    cat: "men",
    type: "shirts",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/tryon_98442.webp?v=1778575390",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fgeometric-harmony-linen-shirt",
    en: { name: "Geometric Harmony Linen Shirt", desc: "Shop on their store." },
    el: { name: "Geometric Harmony Linen Shirt", desc: "Shop on their store." }
  },
  {
    id: "erv-made-in-france-100-linen",
    brand: "erverte",
    cat: "men",
    type: "shirts",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/made-in-france-100-linen-oversized-shirt-182761.jpg?v=1729606303",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fmade-in-france-100-linen-oversized-shirt",
    en: { name: "Made in France 100% Linen Oversized Shirt", desc: "Shop on their store." },
    el: { name: "Made in France 100% Linen Oversized Shirt", desc: "Shop on their store." }
  },
  {
    id: "erv-navy-organic-cotton-polo",
    brand: "erverte",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/POLO-MARINE_american_shot_52817.webp?v=1765350425",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fnavy-organic-cotton-polo-made-in-france",
    en: { name: "Navy Organic Cotton Polo \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "Navy Organic Cotton Polo \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-white-organic-cotton-pol",
    brand: "erverte",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/ERM22O002-A11_1_american_shot_52010.webp?v=1765350634",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fwhite-organic-cotton-polo-made-in-france",
    en: { name: "White Organic Cotton Polo \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "White Organic Cotton Polo \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-made-in-france-hoodie-4",
    brand: "erverte",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/Sweat-capuche_american_hand_in_pocket_62874.webp?v=1770371949",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fmade-in-france-hoodie-4",
    en: { name: "Made in France grey hoodie", desc: "Shop on their store." },
    el: { name: "Made in France grey hoodie", desc: "Shop on their store." }
  },
  {
    id: "erv-made-in-france-sweatshir",
    brand: "erverte",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/Sweat-bleu-marine_american_shot_53967_95675c87-0eeb-415a-9bac-860f37bca48f.webp?v=1765311465",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fmade-in-france-sweatshirt",
    en: { name: "Navy Organic Cotton Sweatshirt \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "Navy Organic Cotton Sweatshirt \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-linen-white-pleated-pant",
    brand: "erverte",
    cat: "men",
    type: "tailoring",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/linen-white-pleated-pants-113976.jpg?v=1729606307",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Flinen-white-pleated-pants",
    en: { name: "Linen White Pleated Pants", desc: "Shop on their store." },
    el: { name: "Linen White Pleated Pants", desc: "Shop on their store." }
  },
  {
    id: "erv-navy-blue-cap-organic-co",
    brand: "erverte",
    cat: "men",
    type: "accessories",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/tryon_98444.webp?v=1778575330",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fnavy-blue-cap-organic-cotton-made-in-france",
    en: { name: "Navy Blue Cap \u2013 Organic Cotton, Made in France", desc: "Shop on their store." },
    el: { name: "Navy Blue Cap \u2013 Organic Cotton, Made in France", desc: "Shop on their store." }
  },
  {
    id: "via-nike-tech-men-s-fleece-w",
    brand: "viaduct",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/IH4302-063_1_2999184a-47d8-4372-9cd3-01bd9d866e05.jpg?v=1788853256",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnike-tech-men-s-fleece-windrunner-full-zip-jacket-grey-ih4302-063",
    en: { name: "Nike Tech Men's Fleece Windrunner Full-Zip Jacket - Grey", desc: "Shop on their store." },
    el: { name: "Nike Tech Men's Fleece Windrunner Full-Zip Jacket - Grey", desc: "Shop on their store." }
  },
  {
    id: "via-nike-tech-men-s-fleece-w",
    brand: "viaduct",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/IH4302100_1_10cf8eb5-a18a-4dcc-9d7d-38b183cc98f8.jpg?v=1788853193",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnike-tech-men-s-fleece-windrunner-full-zip-jacket-white-blue-ih4302-100",
    en: { name: "Nike Tech Men's Fleece Windrunner Full-Zip Jacket - White / Blue", desc: "Shop on their store." },
    el: { name: "Nike Tech Men's Fleece Windrunner Full-Zip Jacket - White / Blue", desc: "Shop on their store." }
  },
  {
    id: "via-adidas-originals-superst",
    brand: "viaduct",
    cat: "men",
    type: "trainers",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/GY3420_SLC_eCom_1659594725131.jpg?v=1788518215",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fadidas-originals-superstar-shoes-white-gy3420",
    en: { name: "adidas Originals Superstar Shoes - White", desc: "Shop on their store." },
    el: { name: "adidas Originals Superstar Shoes - White", desc: "Shop on their store." }
  },
  {
    id: "via-adidas-originals-men-s-r",
    brand: "viaduct",
    cat: "men",
    type: "trainers",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/Rod_Laver_Shoes_White_JI1905_01_standard.jpg?v=1784882995",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fadidas-originals-men-s-rod-laver-trainers-ftwr-white-ji1905",
    en: { name: "adidas Originals Rod Laver Trainers - Ftwr White", desc: "Shop on their store." },
    el: { name: "adidas Originals Rod Laver Trainers - Ftwr White", desc: "Shop on their store." }
  },
  {
    id: "via-adidas-originals-women-s",
    brand: "viaduct",
    cat: "women",
    type: "trainers",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/Court_Tourino_Shoes_White_H02177_01_standard_1.jpg?v=1788522647",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fadidas-originals-women-s-court-tourino-shoes-white-h02177",
    en: { name: "adidas Originals Court Tourino Shoes - White", desc: "Shop on their store." },
    el: { name: "adidas Originals Court Tourino Shoes - White", desc: "Shop on their store." }
  },
  {
    id: "via-adidas-advantage-shoes-w",
    brand: "viaduct",
    cat: "women",
    type: "trainers",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/HR0322_01_standard_1.jpg?v=1788199828",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fadidas-advantage-shoes-white-hr0322",
    en: { name: "adidas Women's Advantage Shoes - White / Pink", desc: "Shop on their store." },
    el: { name: "adidas Women's Advantage Shoes - White / Pink", desc: "Shop on their store." }
  }
];

const BRANDS = [
  {
    id: "erverte",
    name: "ERVERTE",
    model: "affiliate",
    en: "Partner house. High-end menswear in natural fibres, made in France. You buy on their store.",
    el: "Φίρμα-συνεργάτης. Ανδρικά σε φυσικές ίνες, made in France. Αγορά στο δικό τους store."
  },
  {
    id: "viaduct",
    name: "VIADUCT",
    model: "affiliate",
    en: "Partner house. Men, women, trainers. You buy on their store.",
    el: "Φίρμα-συνεργάτης. Άνδρες, γυναίκες, trainers. Αγορά στο δικό τους store."
  }
];

let lang = localStorage.getItem("glamour-lang") || "en";
let filter = "all";
let cart = [];
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function t(key) {
  let v = typeof I18N !== "undefined" ? I18N[lang] : null;
  if (!v) return key;
  for (const p of key.split(".")) v = v?.[p];
  return v ?? key;
}
function brandOf(p) {
  return BRANDS.find((b) => b.id === p.brand) || BRANDS[0];
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
function renderProducts() {
  const root = $("#grid");
  if (!root) return;
  const list = PRODUCTS.filter(
    (p) => filter === "all" || p.cat === filter || p.type === filter || p.brand === filter
  );
  root.innerHTML = list
    .map((p) => {
      const b = brandOf(p);
      return `<a class="card shop-card" rel="sponsored noopener" target="_blank" href="${p.url}"><div class="card-img"><span class="badge">${b.name}</span><img src="${p.img}" alt="${p[lang].name}" loading="lazy"></div><div class="card-body"><h3>${p[lang].name}</h3><div class="meta"><strong>Shop on their store</strong></div></div></a>`;
    })
    .join("");
}
function openProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (p?.url) window.open(p.url, "_blank", "noopener");
}
function closeDrawer(){ const d=$("#drawer"); if(d) d.style.display="none"; }
function closeCart(){ const c=$("#cart"); if(c) c.style.display="none"; }
function openCart(){ renderCart(); const c=$("#cart"); if(c) c.style.display="block"; }
function addToCart(){}
function renderCart(){ const body=$("#cart-body"); if(!body) return; body.innerHTML=`<p>${t("empty")}</p>`; }
function updateCount(){ const c=$("#count"); if(c) c.textContent=0; }
function setLang(next){ lang=next; localStorage.setItem("glamour-lang", lang); applyLang(); }
function setFilter(next, el){
  filter=next;
  $$(".chip").forEach((c)=>c.classList.remove("active"));
  if(el) el.classList.add("active");
  renderProducts();
  document.getElementById("shop")?.scrollIntoView({behavior:"smooth"});
}
function partnerApply(e){ e.preventDefault(); e.target.reset(); }
function quiz(mood){ const box=$("#quiz-result"); if(!box||typeof I18N==="undefined") return; box.style.display="block"; box.textContent=I18N[lang].rec[mood]; }
function newsletter(e){ e.preventDefault(); e.target.reset(); }

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
