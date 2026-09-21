/* DRAFT 2026-09-21: affiliate-only — no Glamour own SKUs / Unsplash in PRODUCTS (verified). No catalogue changes. */
const PRODUCTS = [
  {
    id: "tal-evening-dress-sommerhit2",
    brand: "talbot",
    cat: "women",
    type: "tailoring",
    img: "https://assets.talbotrunhof.com/media/c1/50/63/1769516293/Sommerhit2-OL1000-02-QO15-840-263a-1.jpg?ts=1769516293",
    url: "https://www.awin1.com/cread.php?awinmid=120902&awinaffid=3068705&ued=https%3A%2F%2Fwww.talbotrunhof.com%2Fen%2Fclothing%2Fevening-dress-sommerhit2%2Fsommerhit2-qo15-840-34%2F",
    en: { name: "Evening Dress Sommerhit2", desc: "Shop on their store." },
    el: { name: "Evening Dress Sommerhit2", desc: "Shop on their store." }
  },
  {
    id: "tal-evening-dress-solite1",
    brand: "talbot",
    cat: "women",
    type: "tailoring",
    img: "https://assets.talbotrunhof.com/media/b5/c2/c9/1769516292/Solite1-OL1034-01-1200-840-263a-1.jpg?ts=1769516292",
    url: "https://www.awin1.com/cread.php?awinmid=120902&awinaffid=3068705&ued=https%3A%2F%2Fwww.talbotrunhof.com%2Fen%2Fclothing%2Fevening-dress-solite1%2Fsolite1-1200-840-42%2F",
    en: { name: "Evening Dress Solite1", desc: "Shop on their store." },
    el: { name: "Evening Dress Solite1", desc: "Shop on their store." }
  },
  {
    id: "tal-cocktail-dress-kortney1",
    brand: "talbot",
    cat: "women",
    type: "tailoring",
    img: "https://assets.talbotrunhof.com/media/78/bd/d9/1769516131/Kortney1-OS0152-01-1200-840-263a-1.jpg?ts=1769516131",
    url: "https://www.awin1.com/cread.php?awinmid=120902&awinaffid=3068705&ued=https%3A%2F%2Fwww.talbotrunhof.com%2Fen%2Fclothing%2Fcocktail-dress-kortney1%2Fkortney1-1200-840-34m%2F",
    en: { name: "Cocktail Dress Kortney1", desc: "Shop on their store." },
    el: { name: "Cocktail Dress Kortney1", desc: "Shop on their store." }
  },
  {
    id: "tal-evening-dress-socialclub6",
    brand: "talbot",
    cat: "women",
    type: "tailoring",
    img: "https://assets.talbotrunhof.com/media/f8/f0/11/1770375326/Socialclub6-OL1033-06-ND42-999-263a-1.jpg?ts=1770375326",
    url: "https://www.awin1.com/cread.php?awinmid=120902&awinaffid=3068705&ued=https%3A%2F%2Fwww.talbotrunhof.com%2Fen%2Fclothing%2Fevening-dress-socialclub6%2Fsocialclub6-nd42-999-36%2F",
    en: { name: "Evening Dress Socialclub6", desc: "Shop on their store." },
    el: { name: "Evening Dress Socialclub6", desc: "Shop on their store." }
  },
  {
    id: "tal-midi-dress-postit3",
    brand: "talbot",
    cat: "women",
    type: "tailoring",
    img: "https://assets.talbotrunhof.com/media/84/2b/a4/1769516247/Postit3-OM0879-03-RF15-870-263a-1.jpg?ts=1769516247",
    url: "https://www.awin1.com/cread.php?awinmid=120902&awinaffid=3068705&ued=https%3A%2F%2Fwww.talbotrunhof.com%2Fen%2Fclothing%2Fmidi-dress-postit3%2Fpostit3-rf15-870-34%2F",
    en: { name: "Midi Dress Postit3", desc: "Shop on their store." },
    el: { name: "Midi Dress Postit3", desc: "Shop on their store." }
  },
  {
    id: "tal-midi-dress-rotterdam11",
    brand: "talbot",
    cat: "women",
    type: "tailoring",
    img: "https://assets.talbotrunhof.com/media/0b/48/58/1769516260/Rotterdam11-OM0448-11-RL25-38-263a-1.jpg?ts=1769516260",
    url: "https://www.awin1.com/cread.php?awinmid=120902&awinaffid=3068705&ued=https%3A%2F%2Fwww.talbotrunhof.com%2Fen%2Fclothing%2Fmidi-dress-rotterdam11%2Frotterdam11-rl25-038-34%2F",
    en: { name: "Midi Dress Rotterdam11", desc: "Shop on their store." },
    el: { name: "Midi Dress Rotterdam11", desc: "Shop on their store." }
  },
  {
    id: "tal-evening-dress-pollent1",
    brand: "talbot",
    cat: "women",
    type: "tailoring",
    img: "https://assets.talbotrunhof.com/media/88/52/bc/1769516230/Pollent1-OL0832-01-ND43-870-263a-1.jpg?ts=1769516230",
    url: "https://www.awin1.com/cread.php?awinmid=120902&awinaffid=3068705&ued=https%3A%2F%2Fwww.talbotrunhof.com%2Fen%2Fclothing%2Fevening-dress-pollent1%2Fpollent1-nd43-870-36%2F",
    en: { name: "Evening Dress Pollent1", desc: "Shop on their store." },
    el: { name: "Evening Dress Pollent1", desc: "Shop on their store." }
  },
  {
    id: "tal-midi-dress-sososo2",
    brand: "talbot",
    cat: "women",
    type: "tailoring",
    img: "https://assets.talbotrunhof.com/media/05/55/30/1769516298/Sososo2-OM1022-02-RB45-900-263a-1.jpg?ts=1769516298",
    url: "https://www.awin1.com/cread.php?awinmid=120902&awinaffid=3068705&ued=https%3A%2F%2Fwww.talbotrunhof.com%2Fen%2Fclothing%2Fmidi-dress-sososo2%2Fsososo2-rb45-900-34%2F",
    en: { name: "Midi Dress Sososo2", desc: "Shop on their store." },
    el: { name: "Midi Dress Sososo2", desc: "Shop on their store." }
  },
  {
    id: "erv-made-in-france-t-shirt-1",
    brand: "erverte",
    cat: "men",
    type: "shirts",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/T-shirt-noir_american_shot_53892.webp?v=1766006423",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fmade-in-france-t-shirt-1",
    en: { name: "Black Cotton T-Shirt \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "Black Cotton T-Shirt \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-made-in-france-sweatshirt-1",
    brand: "erverte",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/Sweat-noir_american_shot_54693.webp?v=1766005750",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fmade-in-france-sweatshirt-1",
    en: { name: "Black Organic Cotton Sweatshirt \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "Black Organic Cotton Sweatshirt \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-made-in-france-t-shirt",
    brand: "erverte",
    cat: "men",
    type: "shirts",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/T-shirt-bleu-electrique_american_shot_54710.webp?v=1766004526",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fmade-in-france-t-shirt",
    en: { name: "Blue Cotton T-Shirt \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "Blue Cotton T-Shirt \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-bordeaux-cap-organic-cotton-made-in-",
    brand: "erverte",
    cat: "men",
    type: "accessories",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/edit_98434.webp?v=1778575329",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fbordeaux-cap-organic-cotton-made-in-france",
    en: { name: "Bordeaux Cap \u2013 Organic Cotton, Made in France", desc: "Shop on their store." },
    el: { name: "Bordeaux Cap \u2013 Organic Cotton, Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-french-made-100-silk-mens-rose-savan",
    brand: "erverte",
    cat: "men",
    type: "tailoring",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/french-made-100-silk-savanna-print-pants-150014.jpg?v=1729606309",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Ffrench-made-100-silk-mens-rose-savanna-print-pants",
    en: { name: "French-Made 100% Silk Savanna Print Pants", desc: "Shop on their store." },
    el: { name: "French-Made 100% Silk Savanna Print Pants", desc: "Shop on their store." }
  },
  {
    id: "erv-french-made-thick-cold-wool-pleated-",
    brand: "erverte",
    cat: "men",
    type: "tailoring",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/french-made-thick-cold-wool-pleated-high-waisted-pants-833901.jpg?v=1729606311",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Ffrench-made-thick-cold-wool-pleated-pants",
    en: { name: "French-Made Thick Cold Wool Pleated High-Waisted Pants", desc: "Shop on their store." },
    el: { name: "French-Made Thick Cold Wool Pleated High-Waisted Pants", desc: "Shop on their store." }
  },
  {
    id: "erv-geometric-harmony-linen-shirt",
    brand: "erverte",
    cat: "men",
    type: "shirts",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/tryon_98442.webp?v=1778575390",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fgeometric-harmony-linen-shirt",
    en: { name: "Geometric Harmony Linen Shirt", desc: "Shop on their store." },
    el: { name: "Geometric Harmony Linen Shirt", desc: "Shop on their store." }
  },
  {
    id: "erv-linen-shorts",
    brand: "erverte",
    cat: "men",
    type: "tailoring",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/tryon_98418.webp?v=1778575330",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Flinen-shorts",
    en: { name: "Linen Shorts", desc: "Shop on their store." },
    el: { name: "Linen Shorts", desc: "Shop on their store." }
  },
  {
    id: "erv-linen-white-pleated-pants",
    brand: "erverte",
    cat: "men",
    type: "tailoring",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/linen-white-pleated-pants-113976.jpg?v=1729606307",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Flinen-white-pleated-pants",
    en: { name: "Linen White Pleated Pants", desc: "Shop on their store." },
    el: { name: "Linen White Pleated Pants", desc: "Shop on their store." }
  },
  {
    id: "erv-made-in-france-100-linen-oversized-s",
    brand: "erverte",
    cat: "men",
    type: "shirts",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/made-in-france-100-linen-oversized-shirt-182761.jpg?v=1729606303",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fmade-in-france-100-linen-oversized-shirt",
    en: { name: "Made in France 100% Linen Oversized Shirt", desc: "Shop on their store." },
    el: { name: "Made in France 100% Linen Oversized Shirt", desc: "Shop on their store." }
  },
  {
    id: "erv-made-in-france-hoodie-3",
    brand: "erverte",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/Sweat-capuche_american_shot_53939.webp?v=1765308917",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fmade-in-france-hoodie-3",
    en: { name: "Made in France black hoodie", desc: "Shop on their store." },
    el: { name: "Made in France black hoodie", desc: "Shop on their store." }
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
    id: "erv-made-in-france-grey-t-shirt",
    brand: "erverte",
    cat: "men",
    type: "shirts",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/T-shirt-gris-chin_american_hand_in_pocket_62387.webp?v=1770206230",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fmade-in-france-grey-t-shirt",
    en: { name: "Mottled Grey Cotton T-Shirt \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "Mottled Grey Cotton T-Shirt \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-sweat-gris-chine",
    brand: "erverte",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/Sweat-gris-100-coton_american_hand_on_hip_62367.webp?v=1770206230",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fsweat-gris-chine",
    en: { name: "Mottled Grey Organic Cotton Sweatshirt \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "Mottled Grey Organic Cotton Sweatshirt \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-navy-blue-cap-organic-cotton-made-in",
    brand: "erverte",
    cat: "men",
    type: "accessories",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/tryon_98444.webp?v=1778575330",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fnavy-blue-cap-organic-cotton-made-in-france",
    en: { name: "Navy Blue Cap \u2013 Organic Cotton, Made in France", desc: "Shop on their store." },
    el: { name: "Navy Blue Cap \u2013 Organic Cotton, Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-made-in-france-t-shirt-3",
    brand: "erverte",
    cat: "men",
    type: "shirts",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/T-shirt-bleu-marine_american_arms_behind_62382.webp?v=1774548079",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fmade-in-france-t-shirt-3",
    en: { name: "Navy Cotton T-Shirt \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "Navy Cotton T-Shirt \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-made-in-france-hoodie-2",
    brand: "erverte",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/Sweat-capuche-fabriqu-en-France_american_hand_in_pocket_62879.webp?v=1770371950",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fmade-in-france-hoodie-2",
    en: { name: "Navy Organic Cotton Hoodie \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "Navy Organic Cotton Hoodie \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-navy-organic-cotton-polo-made-in-fra",
    brand: "erverte",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/POLO-MARINE_american_shot_52817.webp?v=1765350425",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fnavy-organic-cotton-polo-made-in-france",
    en: { name: "Navy Organic Cotton Polo \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "Navy Organic Cotton Polo \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-made-in-france-sweatshirt",
    brand: "erverte",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/Sweat-bleu-marine_american_shot_53967_95675c87-0eeb-415a-9bac-860f37bca48f.webp?v=1765311465",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Fmade-in-france-sweatshirt",
    en: { name: "Navy Organic Cotton Sweatshirt \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "Navy Organic Cotton Sweatshirt \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "erv-linen-t-shirt",
    brand: "erverte",
    cat: "men",
    type: "shirts",
    img: "https://cdn.shopify.com/s/files/1/0621/8121/2413/files/linen-t-shirt-635458_american_hand_in_pocket_62940.webp?v=1770371950",
    url: "https://www.awin1.com/cread.php?awinmid=87255&awinaffid=3068705&ued=https%3A%2F%2Ferverte.com%2Fproducts%2Flinen-t-shirt",
    en: { name: "Organic French Linen T-Shirt \u2013 Made in France", desc: "Shop on their store." },
    el: { name: "Organic French Linen T-Shirt \u2013 Made in France", desc: "Shop on their store." }
  },
  {
    id: "via-new-balance-womens-q-speed-fuel-jacq",
    brand: "viaduct",
    cat: "women",
    type: "shirts",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/New_Balance_Women_s_Q_Speed_Fuel_Jacquard_T-Shirt_-_Orange_-_ViaductClothing_-_-_-294737.jpg?v=1717101632",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnew-balance-womens-q-speed-fuel-jacquard-t-shirt-orange",
    en: { name: "New Balance Women's Q Speed Fuel Jacquard T-Shirt - Orange", desc: "Shop on their store." },
    el: { name: "New Balance Women's Q Speed Fuel Jacquard T-Shirt - Orange", desc: "Shop on their store." }
  },
  {
    id: "via-adidas-originals-adventure-dad-cap-m",
    brand: "viaduct",
    cat: "women",
    type: "accessories",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/adidas_Adventure_Dad_Hat_Beige_IB9491_01_standard_a71c9a90-ed0e-4e2e-81b8-036e6df6faba.jpg?v=1773239600",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fadidas-originals-adventure-dad-cap-magic-beige-craft-orange",
    en: { name: "adidas Originals Adventure Dad Cap - Magic Beige / Craft Orange", desc: "Shop on their store." },
    el: { name: "adidas Originals Adventure Dad Cap - Magic Beige / Craft Orange", desc: "Shop on their store." }
  },
  {
    id: "via-new-balance-athletics-intelligent-ch",
    brand: "viaduct",
    cat: "women",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/New_Balance_Athletics_Intelligent_Choice_Crew_-_Saturn_Yellow_-_ViaductClothing_-_-_-293641.jpg?v=1717100245",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnew-balance-athletics-intelligent-choice-crew-saturn-yellow",
    en: { name: "New Balance Athletics Intelligent Choice Crew - Saturn Yellow", desc: "Shop on their store." },
    el: { name: "New Balance Athletics Intelligent Choice Crew - Saturn Yellow", desc: "Shop on their store." }
  },
  {
    id: "via-new-balance-high-collar-solid-color-",
    brand: "viaduct",
    cat: "women",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/New_Balance_High_Collar_Solid_Color_Long_Sleeves_Pullover_Jumper_Sweatshirt_-_Green_-_ViaductClothing_-_-_-294155.jpg?v=1717100914",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnew-balance-high-collar-solid-color-long-sleeves-pullover-jumper-sweatshirt-green",
    en: { name: "New Balance High Collar Solid Color Long Sleeves Pullover Jumper Sweatshirt - Green", desc: "Shop on their store." },
    el: { name: "New Balance High Collar Solid Color Long Sleeves Pullover Jumper Sweatshirt - Green", desc: "Shop on their store." }
  },
  {
    id: "via-adidas-originals-womens-essentials-o",
    brand: "viaduct",
    cat: "women",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/IC4976_F_Model_eCom_1671352230405.jpg?v=1750151628",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fadidas-originals-womens-essentials-oversized-sweatshirt-blue",
    en: { name: "adidas Originals Womens Essentials Oversized Sweatshirt - Blue", desc: "Shop on their store." },
    el: { name: "adidas Originals Womens Essentials Oversized Sweatshirt - Blue", desc: "Shop on their store." }
  },
  {
    id: "via-new-balance-womens-stacked-logo-crop",
    brand: "viaduct",
    cat: "women",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/WT03578-BK_1.jpg?v=1744297957",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnew-balance-womens-stacked-logo-cropped-hoodie-black",
    en: { name: "New Balance Womens Stacked Logo Cropped Hoodie - Black", desc: "Shop on their store." },
    el: { name: "New Balance Womens Stacked Logo Cropped Hoodie - Black", desc: "Shop on their store." }
  },
  {
    id: "via-under-armour-womens-heatgear-mesh-sh",
    brand: "viaduct",
    cat: "women",
    type: "tailoring",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/Under_Armour_Women_s_HeatGear_Mesh_Shorts_-_Black_-_ViaductClothing_-_-_-300799.jpg?v=1717109375",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Funder-armour-womens-heatgear-mesh-shorts-black",
    en: { name: "Under Armour Women's HeatGear Mesh Shorts - Black", desc: "Shop on their store." },
    el: { name: "Under Armour Women's HeatGear Mesh Shorts - Black", desc: "Shop on their store." }
  },
  {
    id: "via-reebok-womens-club-c-85-vintage-trai",
    brand: "viaduct",
    cat: "women",
    type: "trainers",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/GX3687_1.jpg?v=1719579247",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Freebok-womens-club-c-85-vintage-trainers-chalk-sky-blue",
    en: { name: "Reebok Womens Club C 85 Vintage Trainers - Chalk Sky Blue", desc: "Shop on their store." },
    el: { name: "Reebok Womens Club C 85 Vintage Trainers - Chalk Sky Blue", desc: "Shop on their store." }
  },
  {
    id: "via-new-balance-850-mono-pack-trainers-o",
    brand: "viaduct",
    cat: "women",
    type: "trainers",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/New_Balance_850_Mono_Pack_Trainers_-_Off_White_-_ViaductClothing_-_-_-293291_1.jpg?v=1743158534",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnew-balance-850-mono-pack-trainers-off-white",
    en: { name: "New Balance 850 Mono Pack Trainers - Off White", desc: "Shop on their store." },
    el: { name: "New Balance 850 Mono Pack Trainers - Off White", desc: "Shop on their store." }
  },
  {
    id: "via-new-balance-womens-ecb-england-repli",
    brand: "viaduct",
    cat: "women",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/New_Balance_Women_s_ECB_England_Replica_SS_Polo_Test_-_Angora_-_ViaductClothing_-_-_-294706.jpg?v=1717101603",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnew-balance-womens-ecb-england-replica-ss-polo-test-angora",
    en: { name: "New Balance Women's ECB England Replica SS Polo Test - Angora", desc: "Shop on their store." },
    el: { name: "New Balance Women's ECB England Replica SS Polo Test - Angora", desc: "Shop on their store." }
  },
  {
    id: "via-under-armour-ua-womens-hovr-phantom-",
    brand: "viaduct",
    cat: "women",
    type: "trainers",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/Under_Armour_UA_Womens_HOVR_Phantom_3_Rflct_Sneakers_-_Ghost_Grey_Versa_Blue_-_ViaductClothing_-_-_-300597_1.jpg?v=1743183571",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Funder-armour-ua-womens-hovr-phantom-3-rflct-sneakers-ghost-grey-versa-blue",
    en: { name: "Under Armour UA Womens HOVR Phantom 3 Rflct Sneakers - Ghost Grey Versa Blue", desc: "Shop on their store." },
    el: { name: "Under Armour UA Womens HOVR Phantom 3 Rflct Sneakers - Ghost Grey Versa Blue", desc: "Shop on their store." }
  },
  {
    id: "via-ellesse-womens-tanker-cupsole-shoes-",
    brand: "viaduct",
    cat: "women",
    type: "trainers",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/SGMF0459-BLK_1.jpg?v=1721986645",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fellesse-womens-tanker-cupsole-shoes-black-pink",
    en: { name: "Ellesse Womens Tanker Cupsole Shoes - Black Pink", desc: "Shop on their store." },
    el: { name: "Ellesse Womens Tanker Cupsole Shoes - Black Pink", desc: "Shop on their store." }
  },
  {
    id: "via-new-balance-womens-relentless-5-inch",
    brand: "viaduct",
    cat: "women",
    type: "tailoring",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/WS11196-PGL_4.jpg?v=1728464896",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnew-balance-womens-relentless-5-inch-shorts-pink",
    en: { name: "New Balance Womens Relentless 5-inch Shorts - Pink", desc: "Shop on their store." },
    el: { name: "New Balance Womens Relentless 5-inch Shorts - Pink", desc: "Shop on their store." }
  },
  {
    id: "via-reebok-classics-unisex-victory-g-gor",
    brand: "viaduct",
    cat: "women",
    type: "trainers",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/Reebok_Classics_Unisex_Victory_G_Gore-tex_Shoes_-_Blue_-_ViaductClothing_-_-_-298178_1.jpg?v=1743185792",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Freebok-classics-unisex-victory-g-gore-tex-shoes-blue",
    en: { name: "Reebok Classics Unisex Victory G Gore-tex Shoes - Blue", desc: "Shop on their store." },
    el: { name: "Reebok Classics Unisex Victory G Gore-tex Shoes - Blue", desc: "Shop on their store." }
  },
  {
    id: "via-new-balance-womens-energize-cropped-",
    brand: "viaduct",
    cat: "women",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/wt91118gxh_nb_41_i.jpg?v=1744189666",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnew-balance-womens-energize-cropped-hoodie-navy",
    en: { name: "New Balance Womens Energize Cropped Hoodie - Navy", desc: "Shop on their store." },
    el: { name: "New Balance Womens Energize Cropped Hoodie - Navy", desc: "Shop on their store." }
  },
  {
    id: "via-new-balance-womens-space-dye-capri-t",
    brand: "viaduct",
    cat: "women",
    type: "tailoring",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/wp83882bk_nb_40_i.jpg?v=1728395372",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnew-balance-womens-space-dye-capri-tights-black",
    en: { name: "New Balance Womens Space Dye Capri Tights - Black", desc: "Shop on their store." },
    el: { name: "New Balance Womens Space Dye Capri Tights - Black", desc: "Shop on their store." }
  },
  {
    id: "via-nike-tech-men-s-fleece-windrunner-fu",
    brand: "viaduct",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/IH4302-063_1_2999184a-47d8-4372-9cd3-01bd9d866e05.jpg?v=1788853256",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnike-tech-men-s-fleece-windrunner-full-zip-jacket-grey-ih4302-063",
    en: { name: "Nike Tech Men's Fleece Windrunner Full-Zip Jacket - Grey", desc: "Shop on their store." },
    el: { name: "Nike Tech Men's Fleece Windrunner Full-Zip Jacket - Grey", desc: "Shop on their store." }
  },
  {
    id: "via-nike-tech-men-s-fleece-windrunner-fu",
    brand: "viaduct",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/IH4302100_1_10cf8eb5-a18a-4dcc-9d7d-38b183cc98f8.jpg?v=1788853193",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fnike-tech-men-s-fleece-windrunner-full-zip-jacket-white-blue-ih4302-100",
    en: { name: "Nike Tech Men's Fleece Windrunner Full-Zip Jacket - White / Blue", desc: "Shop on their store." },
    el: { name: "Nike Tech Men's Fleece Windrunner Full-Zip Jacket - White / Blue", desc: "Shop on their store." }
  },
  {
    id: "via-adidas-originals-adicolor-essentials",
    brand: "viaduct",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/H34649_5.jpg?v=1788527152",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fadidas-originals-adicolor-essentials-trefoil-hoodie-white-h34649",
    en: { name: "adidas Originals Adicolor Essentials Trefoil Hoodie - White", desc: "Shop on their store." },
    el: { name: "adidas Originals Adicolor Essentials Trefoil Hoodie - White", desc: "Shop on their store." }
  },
  {
    id: "via-adidas-men-s-essentials-fleece-hoodi",
    brand: "viaduct",
    cat: "men",
    type: "knit",
    img: "https://cdn.shopify.com/s/files/1/0300/6631/1261/files/Essentials_Fleece_Hoodie_White_H12211_01_laydown_1.jpg?v=1788522895",
    url: "https://www.awin1.com/cread.php?awinmid=125096&awinaffid=3068705&ued=https%3A%2F%2Fviaductclothing.co.uk%2Fproducts%2Fadidas-men-s-essentials-fleece-hoodie-white-h12211",
    en: { name: "adidas Men's Essentials Fleece Hoodie - White", desc: "Shop on their store." },
    el: { name: "adidas Men's Essentials Fleece Hoodie - White", desc: "Shop on their store." }
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
  },
  {
    id: "talbot",
    name: "TALBOT RUNHOF",
    model: "affiliate",
    en: "Partner house. Evening and occasion womenswear, Munich. You buy on their store.",
    el: "Φίρμα-συνεργάτης. Evening / occasion γυναικεία, Μόναχο. Αγορά στο δικό τους store."
  }
];

let lang = localStorage.getItem("glamour-lang") || "en";
let filter = "all";
let shopSeeAll = false;
const SHOP_PREVIEW = 8;
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
  const filtered = PRODUCTS.filter(
    (p) => filter === "all" || p.cat === filter || p.type === filter || p.brand === filter
  );
  const list = shopSeeAll ? filtered : filtered.slice(0, SHOP_PREVIEW);
  root.innerHTML = list
    .map((p) => {
      const b = brandOf(p);
      return `<a class="card shop-card" rel="sponsored noopener" target="_blank" href="${p.url}"><div class="card-img"><span class="badge">${b.name}</span><img src="${p.img}" alt="${p[lang].name}" loading="lazy"></div><div class="card-body"><h3>${p[lang].name}</h3><div class="meta"><strong>Shop on their store</strong></div></div></a>`;
    })
    .join("");
  const btn = document.getElementById("shop-see-all");
  if (btn) {
    const more = filtered.length > SHOP_PREVIEW;
    btn.style.display = more ? "" : "none";
    btn.textContent = shopSeeAll ? (lang === "el" ? "Λιγότερα" : "Show less") : (lang === "el" ? "Δες όλα" : "See all");
  }
}
function toggleShopSeeAll() {
  shopSeeAll = !shopSeeAll;
  renderProducts();
}
window.toggleShopSeeAll = toggleShopSeeAll;
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
  shopSeeAll=false;
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
