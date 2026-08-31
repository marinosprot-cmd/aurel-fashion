const PRODUCTS = [
  { id:"m1", brand:"glamour", cat:"men", type:"shirts", price:145, img:"https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80", en:{name:"Coastal Linen Shirt",desc:"Stone linen, cut for heat."}, el:{name:"Λινό Coastal",desc:"Λινό πέτρας, κοπή για ζέστη."} },
  { id:"m2", brand:"glamour", cat:"men", type:"tailoring", price:390, img:"https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=900&q=80", en:{name:"Ink Blazer",desc:"Unstructured shoulder. One button."}, el:{name:"Σακάκι Ink",desc:"Μαλακός ώμος. Ένα κουμπί."} },
  { id:"m3", brand:"mare", cat:"men", type:"tailoring", price:220, img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80", en:{name:"Crete Trouser",desc:"High rise, tobacco wool-blend."}, el:{name:"Παντελόνι Crete",desc:"Ψηλή μέση, καπνό χρώμα."} },
  { id:"m4", brand:"mare", cat:"men", type:"knit", price:180, img:"https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=900&q=80", en:{name:"Cashmere Crew",desc:"Light gauge. Ivory."}, el:{name:"Πλεκτό Cashmere",desc:"Λεπτό πλεκτό. Εκρού."} },
  { id:"m5", brand:"glamour", cat:"men", type:"shirts", price:155, img:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80", en:{name:"Marina Oxford",desc:"Soft white oxford."}, el:{name:"Oxford Marina",desc:"Μαλακό λευκό oxford."} },
  { id:"m6", brand:"glamour", cat:"men", type:"tailoring", price:245, img:"https://images.unsplash.com/photo-1473963968149-25aa97fe0b0e?auto=format&fit=crop&w=900&q=80", en:{name:"Harbour Chino",desc:"Stone cotton, tapered."}, el:{name:"Chino Harbour",desc:"Βαμβάκι πέτρας."} },
  { id:"m7", brand:"mare", cat:"men", type:"knit", price:210, img:"https://images.unsplash.com/photo-1618354691373-d851c5c3a99b?auto=format&fit=crop&w=900&q=80", en:{name:"Navy Polo Knit",desc:"Fine gauge polo."}, el:{name:"Polo Navy",desc:"Λεπτό polo."} },
  { id:"m8", brand:"glamour", cat:"men", type:"shirts", price:175, img:"https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80", en:{name:"Sand Overshirt",desc:"Jacket-shirt for the marina."}, el:{name:"Overshirt Sand",desc:"Πουκάμισο-σακάκι."} },
  { id:"m9", brand:"mare", cat:"men", type:"tailoring", price:420, img:"https://images.unsplash.com/photo-1594938291221-94d21d93b35b?auto=format&fit=crop&w=900&q=80", en:{name:"Navy Dinner Jacket",desc:"Unstructured evening jacket."}, el:{name:"Σακάκι Dinner",desc:"Μαλακό βραδινό σακάκι."} },
  { id:"w1", brand:"nisi", cat:"women", type:"dresses", price:260, img:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80", en:{name:"Ivory Slip Dress",desc:"Bias silk. Quiet neckline."}, el:{name:"Ivory Slip",desc:"Μετάξι λοξής κοπής."} },
  { id:"w2", brand:"glamour", cat:"women", type:"shirts", price:165, img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80", en:{name:"Midnight Shirt",desc:"Black poplin, long cuff."}, el:{name:"Midnight Shirt",desc:"Μαύρο poplin."} },
  { id:"w3", brand:"nisi", cat:"women", type:"dresses", price:310, img:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80", en:{name:"Aegean Column",desc:"Long dress, side slit."}, el:{name:"Στήλη Aegean",desc:"Μακρύ φόρεμα σε άμμο."} },
  { id:"w4", brand:"nisi", cat:"women", type:"knit", price:195, img:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80", en:{name:"Soft Culotte Knit",desc:"Wide knit trouser."}, el:{name:"Culotte",desc:"Φαρδύ πλεκτό παντελόνι."} },
  { id:"w5", brand:"glamour", cat:"women", type:"shirts", price:170, img:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=80", en:{name:"Ivory Silk Shirt",desc:"Open collar, gold hour."}, el:{name:"Μεταξωτό Ivory",desc:"Ανοιχτός γιακάς."} },
  { id:"w6", brand:"nisi", cat:"women", type:"dresses", price:285, img:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80", en:{name:"Limassol Wrap",desc:"Wrap dress in warm stone."}, el:{name:"Wrap Λεμεσός",desc:"Φόρεμα wrap."} },
  { id:"w7", brand:"glamour", cat:"women", type:"tailoring", price:340, img:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=900&q=80", en:{name:"Camel Coat Dress",desc:"Light tailoring."}, el:{name:"Παλτό Camel",desc:"Ελαφριά ραπτική."} },
  { id:"w8", brand:"nisi", cat:"women", type:"knit", price:205, img:"https://images.unsplash.com/photo-1525507399780-32739548bd87?auto=format&fit=crop&w=900&q=80", en:{name:"Bone Cardigan",desc:"Long line knit."}, el:{name:"Ζακέτα Bone",desc:"Μακρύ πλεκτό."} },
  { id:"w9", brand:"glamour", cat:"women", type:"shirts", price:160, img:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80", en:{name:"Black Column Blouse",desc:"Sharp cuff."}, el:{name:"Μπλούζα Column",desc:"Καθαρό μανίκι."} }
];
let lang = localStorage.getItem("glamour-lang") || "en";
let filter = "all";
let cart = JSON.parse(localStorage.getItem("glamour-cart") || "[]");
let activeProduct = null;
let activeSize = "M";
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
function t(key){ let v=I18N[lang]; for (const p of key.split(".")) v=v?.[p]; return v??key; }
function applyLang(){
  $$("[data-i]").forEach(el => el.textContent = t(el.dataset.i));
  $$("[data-ph]").forEach(el => el.placeholder = t(el.dataset.ph));
  document.documentElement.lang = lang==="el"?"el":"en";
  $$(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang===lang));
  renderProducts(); renderBrands(); renderCart();
}
function brandOf(p){ return BRANDS.find(b => b.id === (p.brand||"glamour")); }
function renderBrands(){
  const root = document.getElementById("brands"); if(!root) return;
  root.innerHTML = BRANDS.map(b => `<article class="brand-card" onclick="setFilter('${b.id}', null)"><h3>${b.name}</h3><p>${b[lang]}</p><div class="comm">${b.model==="own"?(lang==="el"?"Οίκος · 100%":"House · 100%"): (lang==="el"?"Προμήθεια ":"Commission ")+b.cut+"%"}</div></article>`).join("");
}
function renderProducts(){
  const root = $("#grid"); if(!root) return;
  const list = PRODUCTS.filter(p => filter==="all" || p.cat===filter || p.type===filter || p.brand===filter);
  root.innerHTML = list.map(p => `<article class="card" onclick="openProduct('${p.id}')"><div class="card-img"><span class="badge">${p.cat==="men"?t("men"):t("women")}</span><img src="${p.img}" alt="${p[lang].name}"></div><div class="card-body"><h3>${p[lang].name}</h3><div class="meta"><span>${brandOf(p).name}</span><strong>€${p.price}</strong></div></div></article>`).join("");
}
function openProduct(id){
  activeProduct = PRODUCTS.find(p=>p.id===id); activeSize="M";
  $("#drawer").style.display="block";
  const b = brandOf(activeProduct);
  $("#drawer-body").innerHTML = `<button class="icon-btn" onclick="closeDrawer()">${t("close")}</button><div class="product-hero"><img src="${activeProduct.img}" alt=""></div><h2>${activeProduct[lang].name}</h2><p style="color:var(--muted);margin:8px 0 16px">${activeProduct[lang].desc}</p><p>${t("soldBy")} <strong>${b.name}</strong></p><strong>€${activeProduct.price}</strong><p style="margin-top:16px">${t("size")}</p><div class="sizes">${["XS","S","M","L","XL"].map(s=>`<button class="${s===activeSize?"active":""}" onclick="setSize('${s}', this)">${s}</button>`).join("")}</div><button class="cta" style="width:100%;margin-top:8px" onclick="addToCart()">${t("add")}</button>`;
}
function setSize(s,el){ activeSize=s; $$(".sizes button").forEach(b=>b.classList.remove("active")); el.classList.add("active"); }
function closeDrawer(){ $("#drawer").style.display="none"; }
function closeCart(){ $("#cart").style.display="none"; }
function openCart(){ renderCart(); $("#cart").style.display="block"; }
function addToCart(){ cart.push({id:activeProduct.id,size:activeSize,qty:1}); localStorage.setItem("glamour-cart", JSON.stringify(cart)); updateCount(); closeDrawer(); }
function renderCart(){
  const body=$("#cart-body"); if(!body) return;
  if(!cart.length){ body.innerHTML=`<p>${t("empty")}</p>`; $("#cart-total").textContent="€0"; return; }
  let total=0;
  body.innerHTML = cart.map(item=>{ const p=PRODUCTS.find(x=>x.id===item.id); total+=p.price; return `<div class="cart-item"><img src="${p.img}" alt=""><div><strong>${p[lang].name}</strong><div>${item.size}</div></div><div>€${p.price}</div></div>`; }).join("");
  $("#cart-total").textContent="€"+total;
}
function updateCount(){ const c=$("#count"); if(c) c.textContent=cart.length; }
function setLang(next){ lang=next; localStorage.setItem("glamour-lang", lang); applyLang(); }
function setFilter(next,el){ filter=next; $$(".chip").forEach(c=>c.classList.remove("active")); if(el) el.classList.add("active"); renderProducts(); document.getElementById("shop")?.scrollIntoView({behavior:"smooth"}); }
function partnerApply(e){ e.preventDefault(); e.target.reset(); alert(lang==="el"?"Η αίτηση καταγράφηκε ως demo.":"Application saved as demo."); }
function quiz(mood){ const box=$("#quiz-result"); box.style.display="block"; box.textContent=I18N[lang].rec[mood]; }
function newsletter(e){ e.preventDefault(); e.target.reset(); alert(lang==="el"?"Ευχαριστούμε.":"Thank you."); }
window.openProduct=openProduct; window.setSize=setSize; window.closeDrawer=closeDrawer; window.closeCart=closeCart; window.openCart=openCart; window.addToCart=addToCart; window.setLang=setLang; window.setFilter=setFilter; window.quiz=quiz; window.newsletter=newsletter; window.partnerApply=partnerApply;
applyLang(); updateCount();
